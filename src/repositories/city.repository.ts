import { prisma } from '../config/prisma';
import { City } from '../generated/prisma';

export const CityRepository = {
  /**
   * Membuat kota baru.
   * @param data - Data untuk kota baru.
   */
  create: async (data: { name: string; provinsi: string; latitude: number; longitude: number }): Promise<City> => {
    return await prisma.city.create({
      data: data,
    });
  },

  /**
   * Mengambil semua data kota.
   */
  findAll: async (): Promise<City[]> => {
    return await prisma.city.findMany();
  },

  /**
   * Menemukan satu kota berdasarkan ID uniknya.
   * @param id - ID unik kota (UUID).
   */
  findById: async (id: string): Promise<City | null> => {
    return await prisma.city.findUnique({
      where: { id },
    });
  },

  /**
   * Memperbarui data kota.
   * @param id - ID kota (UUID) yang akan diperbarui.
   * @param data - Data baru untuk kota.
   */
  update: async (id: string, data: { name: string; provinsi: string }): Promise<City> => {
    return await prisma.city.update({
      where: { id },
      data: data,
    });
  },

  /**
   * Menghapus kota dari database.
   * @param id - ID kota (UUID) yang akan dihapus.
   */
  delete: async (id: string): Promise<City> => {
    return await prisma.city.delete({
      where: { id },
    });
  },
};