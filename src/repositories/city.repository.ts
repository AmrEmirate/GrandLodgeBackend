import { prisma } from '../config/prisma';
import { City } from '../generated/prisma';

export const CityRepository = {
  create: async (data: { name: string; provinsi: string; latitude: number; longitude: number }): Promise<City> => {
    return await prisma.city.create({
      data: data,
    });
  },

  findAll: async (): Promise<City[]> => {
    return await prisma.city.findMany();
  },

  findById: async (id: number): Promise<City | null> => {
    return await prisma.city.findUnique({
      where: { id },
    });
  },

  update: async (id: number, data: { name: string; provinsi: string }): Promise<City> => {
    return await prisma.city.update({
      where: { id },
      data: data,
    });
  },

  delete: async (id: number): Promise<City> => {
    return await prisma.city.delete({
      where: { id },
    });
  },
};