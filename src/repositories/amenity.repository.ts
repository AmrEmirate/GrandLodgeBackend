import { prisma } from '../config/prisma';
import { Amenity } from '../generated/prisma';

export const AmenityRepository = {
  create: async (name: string): Promise<Amenity> => {
    return await prisma.amenity.create({
      data: { name },
    });
  },

  findAll: async (): Promise<Amenity[]> => {
    return await prisma.amenity.findMany();
  },

  findById: async (id: number): Promise<Amenity | null> => {
    return await prisma.amenity.findUnique({
      where: { id },
    });
  },

  update: async (id: number, name: string): Promise<Amenity> => {
    return await prisma.amenity.update({
      where: { id },
      data: { name },
    });
  },

  delete: async (id: number): Promise<Amenity> => {
    return await prisma.amenity.delete({
      where: { id },
    });
  },
};