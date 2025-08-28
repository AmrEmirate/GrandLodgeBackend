import { prisma } from '../config/prisma';
import { Category } from "../generated/prisma";

export const CategoryRepository = {
  /**
   * Membuat kategori baru.
   * @param name - Nama kategori yang akan dibuat.
   */
  create: async (name: string): Promise<Category> => {
    return await prisma.category.create({
      data: { name },
    });
  },

  /**
   * Mengambil semua data kategori.
   */
  findAll: async (): Promise<Category[]> => {
    return await prisma.category.findMany();
  },

  /**
   * Menemukan satu kategori berdasarkan ID uniknya.
   * @param id - ID unik kategori (UUID).
   */
  findById: async (id: string): Promise<Category | null> => {
    return await prisma.category.findUnique({
      where: { id },
    });
  },

  /**
   * Memperbarui nama kategori.
   * @param id - ID kategori (UUID) yang akan diperbarui.
   * @param name - Nama baru untuk kategori.
   */
  update: async (id: string, name: string): Promise<Category> => {
    return await prisma.category.update({
      where: { id },
      data: { name },
    });
  },

  /**
   * Menghapus kategori dari database.
   * @param id - ID kategori (UUID) yang akan dihapus.
   */
  delete: async (id: string): Promise<Category> => {
    return await prisma.category.delete({
      where: { id },
    });
  },
};