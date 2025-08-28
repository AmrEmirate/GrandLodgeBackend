import { prisma } from '../config/prisma';
import { Property } from '../generated/prisma';

export const PropertyRepository = {
  /**
   * Membuat properti baru yang terhubung dengan tenant, kota, kategori, dan fasilitas.
   * @param data - Data properti seperti nama, deskripsi, dll.
   * @param tenantId - ID tenant (UUID) yang memiliki properti.
   * @param amenityIds - Array ID fasilitas (UUID) yang akan dihubungkan.
   */
  create: async (data: any, tenantId: string, amenityIds?: string[]): Promise<Property> => {
    // Memisahkan ID relasi dari sisa data untuk menghindari konflik
    const { categoryId, cityId, ...propertyData } = data;

    return await prisma.property.create({
      data: {
        ...propertyData, // Menggunakan sisa data properti (name, description, zipCode)
        tenant: {
          connect: { id: tenantId },
        },
        city: {
          connect: { id: cityId },
        },
        category: {
          connect: { id: categoryId },
        },
        amenities: {
          connect: amenityIds?.map((id) => ({ id })) || [],
        },
      },
    });
  },

  /**
   * Menemukan semua properti milik seorang tenant.
   * @param tenantId - ID tenant (UUID) yang propertinya akan dicari.
   */
  findAllByTenantId: async (tenantId: string): Promise<Property[]> => {
    return await prisma.property.findMany({
      where: { tenantId: tenantId, deletedAt: null },
      include: {
        category: true,
        city: true,
        amenities: true,
      },
    });
  },

  /**
   * Menemukan satu properti spesifik milik seorang tenant.
   * @param id - ID properti (UUID) yang akan dicari.
   * @param tenantId - ID tenant (UUID) untuk validasi kepemilikan.
   */
  findByIdAndTenantId: async (id: string, tenantId: string): Promise<Property | null> => {
    return await prisma.property.findFirst({
      where: { id: id, tenantId: tenantId, deletedAt: null },
      include: {
        category: true,
        city: true,
        amenities: true,
        rooms: true,
        images: true, // Menyertakan gambar galeri
      },
    });
  },

  /**
   * Memperbarui data properti.
   * @param id - ID properti (UUID) yang akan diperbarui.
   * @param data - Data baru untuk properti.
   * @param amenityIds - Array ID fasilitas (UUID) yang baru.
   */
  update: async (id: string, data: any, amenityIds?: string[]): Promise<Property> => {
    const { cityId, categoryId, ...propertyData } = data;

    return await prisma.property.update({
      where: { id: id },
      data: {
        ...propertyData,
        city: cityId ? { connect: { id: cityId } } : undefined,
        category: categoryId ? { connect: { id: categoryId } } : undefined,
        amenities: {
          // 'set' akan menggantikan semua fasilitas lama dengan yang baru
          set: amenityIds?.map((id) => ({ id })),
        },
      },
    });
  },

  /**
   * Melakukan soft delete pada properti dengan mengisi kolom `deletedAt`.
   * @param id - ID properti (UUID) yang akan di-soft delete.
   */
  softDelete: async (id: string): Promise<Property> => {
    return await prisma.property.update({
      where: { id: id },
      data: {
        deletedAt: new Date(),
      },
    });
  },

  /**
   * Menambahkan gambar galeri ke properti.
   * @param propertyId - ID properti (UUID) tempat gambar akan ditambahkan.
   * @param imageUrls - Array berisi URL gambar baru.
   */
  addGalleryImages: async (propertyId: string, imageUrls: string[]) => {
    const imageData = imageUrls.map(url => ({
      propertyId: propertyId,
      imageUrl: url,
    }));

    await prisma.propertyImage.createMany({
      data: imageData,
    });

    return prisma.property.findUnique({
      where: { id: propertyId },
      include: { images: true }
    });
  },
};