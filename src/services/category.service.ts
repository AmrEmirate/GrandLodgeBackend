import { CategoryRepository } from '../repositories/category.repository';
import { Category } from '../generated/prisma';
import { prisma } from '../config/prisma';

export const CategoryService = {
  createCategory: async (name: string): Promise<Category> => {
    const existingCategory = await prisma.category.findUnique({ where: { name } });
    if (existingCategory) {
      throw new Error('Nama kategori sudah ada.');
    }
    return await CategoryRepository.create(name);
  },

  getAllCategories: async (): Promise<Category[]> => {
    return await CategoryRepository.findAll();
  },

  getCategoryById: async (id: string): Promise<Category | null> => {
    const category = await CategoryRepository.findById(id);
    if (!category) {
      throw new Error('Kategori tidak ditemukan.');
    }
    return category;
  },

  updateCategory: async (id: string, name: string): Promise<Category> => {
    await CategoryService.getCategoryById(id); // Memastikan kategori ada sebelum update
    return await CategoryRepository.update(id, name);
  },

  deleteCategory: async (id: string): Promise<Category> => {
    await CategoryService.getCategoryById(id); // Memastikan kategori ada sebelum dihapus
    return await CategoryRepository.delete(id);
  },
};