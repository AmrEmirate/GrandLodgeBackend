import { prisma } from '../config/prisma';
import { City } from '../generated/prisma';

export const CityRepository = {
  create: async (data: { name: string; provinsi: string; latitude: number; longitude: number }): Promise<City> => {
    return await prisma.city.create({
      data: data,
    });
  },

  findAll: async (): Promise<City[]> => {
    return await prisma.city.findMany({
      where: { deletedAt: null }, // Filter data aktif
    });
  },

  findById: async (id: string): Promise<City | null> => {
    return await prisma.city.findFirst({
      where: { id, deletedAt: null }, // Filter data aktif
    });
  },

  update: async (id: string, data: { name: string; provinsi: string }): Promise<City> => {
    return await prisma.city.update({
      where: { id },
      data: data,
    });
  },

  // Mengubah delete menjadi softDelete
  delete: async (id: string): Promise<City> => {
    return await prisma.city.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  },
};