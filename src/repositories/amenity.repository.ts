import { prisma } from '../config/prisma';
import { Amenity } from '../generated/prisma';

export const AmenityRepository = {
  create: async (name: string): Promise<Amenity> => {
    return await prisma.amenity.create({
      data: { name },
    });
  },

  findAll: async (): Promise<Amenity[]> => {
    return await prisma.amenity.findMany({
      where: { deletedAt: null }, // Filter data aktif
    });
  },

  findById: async (id: string): Promise<Amenity | null> => {
    return await prisma.amenity.findFirst({
      where: { id, deletedAt: null }, // Filter data aktif
    });
  },

  update: async (id: string, name: string): Promise<Amenity> => {
    return await prisma.amenity.update({
      where: { id },
      data: { name },
    });
  },

  // Mengubah delete menjadi softDelete
  delete: async (id: string): Promise<Amenity> => {
    return await prisma.amenity.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  },
};