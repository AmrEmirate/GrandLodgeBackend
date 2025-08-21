import { prisma } from '../config/prisma';
import { UserRole, Category } from "../generated/prisma";

export const CategoryRepository = {
  create: async (name: string): Promise<Category> => {
    return await prisma.category.create({
      data: { name },
    });
  },

  findAll: async (): Promise<Category[]> => {
    return await prisma.category.findMany();
  },

  findById: async (id: number): Promise<Category | null> => {
    return await prisma.category.findUnique({
      where: { id },
    });
  },

  update: async (id: number, name: string): Promise<Category> => {
    return await prisma.category.update({
      where: { id },
      data: { name },
    });
  },

  delete: async (id: number): Promise<Category> => {
    return await prisma.category.delete({
      where: { id },
    });
  },
};