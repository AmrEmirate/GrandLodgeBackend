import { PropertyRepository } from '../repositories/property.repository';
import { Property } from '../generated/prisma';
import { uploadToCloudinary } from '../utils/cloudinary';
import { Express } from 'express';

export const TenantPropertyService = {
  /**
   * Membuat properti baru untuk seorang tenant.
   * @param data - Data properti yang akan dibuat (termasuk amenityIds sebagai string[]).
   * @param tenantId - ID tenant (UUID) yang membuat properti.
   */
  createProperty: async (data: any, tenantId: string): Promise<Property> => {
    // amenityIds sekarang diharapkan menjadi array of strings (UUIDs)
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

  /**
   * Mendapatkan semua properti yang dimiliki oleh seorang tenant.
   * @param tenantId - ID tenant (UUID).
   */
  getPropertiesByTenant: async (tenantId: string): Promise<Property[]> => {
    return await PropertyRepository.findAllByTenantId(tenantId);
  },

  /**
   * Mendapatkan detail satu properti milik tenant.
   * @param id - ID properti (UUID).
   * @param tenantId - ID tenant (UUID) untuk validasi kepemilikan.
   */
  getPropertyDetailForTenant: async (id: string, tenantId: string): Promise<Property> => {
    const property = await PropertyRepository.findByIdAndTenantId(id, tenantId);
    if (!property) {
      throw new Error('Properti tidak ditemukan atau Anda tidak memiliki akses.');
    }
    return property;
  },

  /**
   * Memperbarui data properti.
   * @param id - ID properti (UUID) yang akan diperbarui.
   * @param tenantId - ID tenant (UUID) untuk validasi.
   * @param data - Data baru untuk properti.
   */
  updateProperty: async (id: string, tenantId: string, data: any): Promise<Property> => {
    // Pastikan properti ini ada dan dimiliki oleh tenant
    await TenantPropertyService.getPropertyDetailForTenant(id, tenantId);
    
    const { amenityIds, ...propertyData } = data;
    return await PropertyRepository.update(id, propertyData, amenityIds);
  },

  /**
   * Menghapus properti secara soft delete.
   * @param id - ID properti (UUID) yang akan dihapus.
   * @param tenantId - ID tenant (UUID) untuk validasi.
   */
  deleteProperty: async (id: string, tenantId: string): Promise<Property> => {
    // Pastikan properti ini ada dan dimiliki oleh tenant
    await TenantPropertyService.getPropertyDetailForTenant(id, tenantId);
    return await PropertyRepository.softDelete(id);
  },

  /**
   * Mengunggah gambar utama (mainImage) untuk sebuah properti.
   * @param id - ID properti (UUID).
   * @param tenantId - ID tenant (UUID).
   * @param file - File gambar yang diunggah.
   */
  uploadPropertyImage: async (id: string, tenantId: string, file: Express.Multer.File): Promise<Property> => {
    // Validasi kepemilikan properti
    await TenantPropertyService.getPropertyDetailForTenant(id, tenantId);
    
    const result = await uploadToCloudinary(file.buffer, 'property_images');
    
    // Update database dengan URL gambar baru
    return await PropertyRepository.update(id, { mainImage: result.secure_url });
  },

  /**
   * Mengunggah beberapa gambar galeri untuk sebuah properti.
   * @param id - ID properti (UUID).
   * @param tenantId - ID tenant (UUID).
   * @param files - Array file gambar yang diunggah.
   */
  uploadGalleryImages: async (id: string, tenantId: string, files: Express.Multer.File[]) => {
    // Validasi kepemilikan properti
    await TenantPropertyService.getPropertyDetailForTenant(id, tenantId);

    // Upload semua file ke Cloudinary secara paralel
    const uploadPromises = files.map(file => 
        uploadToCloudinary(file.buffer, 'property_gallery')
    );

    const uploadResults = await Promise.all(uploadPromises);
    const imageUrls = uploadResults.map(result => result.secure_url);

    // Simpan semua URL gambar baru ke database
    return await PropertyRepository.addGalleryImages(id, imageUrls);
  },
};