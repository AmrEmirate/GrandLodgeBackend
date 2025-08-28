import { PropertyRepository } from '../repositories/property.repository';
import { Property } from '../generated/prisma';
import { GeocodingService } from './geocoding.service';
import { uploadToCloudinary } from '../utils/cloudinary';
import { Express } from 'express'; // Pastikan Express diimpor untuk tipe Multer.File

export const TenantPropertyService = {
  createProperty: async (data: any, tenantId: number): Promise<Property> => {
    // Logika ini sudah diperbarui untuk menggunakan cityId
    const { name, categoryId, description, zipCode, amenityIds, cityId } = data;
    
    const propertyData = {
      name,
      categoryId,
      description,
      zipCode,
      cityId,
    };

    return await PropertyRepository.create(propertyData, tenantId, amenityIds);
  },

  getPropertiesByTenant: async (tenantId: number): Promise<Property[]> => {
    return await PropertyRepository.findAllByTenantId(tenantId);
  },

  getPropertyDetailForTenant: async (id: number, tenantId: number): Promise<Property> => {
    const property = await PropertyRepository.findByIdAndTenantId(id, tenantId);
    if (!property) {
      throw new Error('Properti tidak ditemukan atau Anda tidak memiliki akses.');
    }
    return property;
  },

  updateProperty: async (id: number, tenantId: number, data: any): Promise<Property> => {
    const { amenityIds, ...propertyData } = data;
    await TenantPropertyService.getPropertyDetailForTenant(id, tenantId);
    return await PropertyRepository.update(id, propertyData, amenityIds);
  },

  deleteProperty: async (id: number, tenantId: number): Promise<Property> => {
    await TenantPropertyService.getPropertyDetailForTenant(id, tenantId);
    return await PropertyRepository.softDelete(id);
  },

  uploadPropertyImage: async (id: number, tenantId: number, file: Express.Multer.File): Promise<Property> => {
    // 1. Pastikan properti ini milik tenant yang sedang login
    await TenantPropertyService.getPropertyDetailForTenant(id, tenantId);
    
    // 2. Upload file ke Cloudinary
    const result = await uploadToCloudinary(file.buffer, 'property_images');
    
    // 3. Update database dengan URL gambar baru
    return await PropertyRepository.update(id, { mainImage: result.secure_url });
  },

  uploadGalleryImages: async (id: number, tenantId: number, files: Express.Multer.File[]) => {
    // 1. Pastikan properti ini milik tenant yang sedang login
    await TenantPropertyService.getPropertyDetailForTenant(id, tenantId);

    // 2. Upload semua file ke Cloudinary secara paralel
    const uploadPromises = files.map(file => 
        uploadToCloudinary(file.buffer, 'property_gallery')
    );

    const uploadResults = await Promise.all(uploadPromises);
    const imageUrls = uploadResults.map(result => result.secure_url);

    // 3. Simpan semua URL gambar baru ke database
    return await PropertyRepository.addGalleryImages(id, imageUrls);
  },
};