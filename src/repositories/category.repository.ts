import { prisma } from '../config/prisma';
import { Category } from "../generated/prisma";

export const CategoryRepository = {
  create: async (name: string): Promise<Category> => {
    return await prisma.category.create({
      data: { name },
    });
  },

  findAll: async (): Promise<Category[]> => {
    return await prisma.category.findMany({
      where: { deletedAt: null }, // Filter data aktif
    });
  },

  findById: async (id: string): Promise<Category | null> => {
    return await prisma.category.findFirst({
      where: { id, deletedAt: null }, // Filter data aktif
    });
  },

  update: async (id: string, name: string): Promise<Category> => {
    return await prisma.category.update({
      where: { id },
      data: { name },
    });
  },

  // Mengubah delete menjadi softDelete
  delete: async (id: string): Promise<Category> => {
    return await prisma.category.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  },
};