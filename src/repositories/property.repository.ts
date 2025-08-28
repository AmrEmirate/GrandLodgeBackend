import { prisma } from '../config/prisma';
import { Property } from '../generated/prisma';

export const PropertyRepository = {
  create: async (data: any, tenantId: number, amenityIds?: number[]): Promise<Property> => {
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

  findAllByTenantId: async (tenantId: number): Promise<Property[]> => {
    return await prisma.property.findMany({
      where: { tenantId: tenantId, deletedAt: null },
      include: {
        category: true,
        city: true,
        amenities: true,
      },
    });
  },

  findByIdAndTenantId: async (id: number, tenantId: number): Promise<Property | null> => {
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

  update: async (id: number, data: any, amenityIds?: number[]): Promise<Property> => {
    const { cityId, categoryId, ...propertyData } = data;

    return await prisma.property.update({
      where: { id: id },
      data: {
        ...propertyData,
        city: cityId ? { connect: { id: cityId } } : undefined,
        category: categoryId ? { connect: { id: categoryId } } : undefined,
        amenities: {
          set: amenityIds?.map((id) => ({ id })),
        },
      },
    });
  },

  softDelete: async (id: number): Promise<Property> => {
    return await prisma.property.update({
      where: { id: id },
      data: {
        deletedAt: new Date(),
      },
    });
  },

  addGalleryImages: async (propertyId: number, imageUrls: string[]) => {
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