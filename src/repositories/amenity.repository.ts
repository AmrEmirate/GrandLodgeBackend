import { prisma } from '../config/prisma';
import { Amenity } from '../generated/prisma';

export const AmenityRepository = {
  /**
   * Membuat fasilitas baru.
   * @param name - Nama fasilitas yang akan dibuat.
   */
  create: async (name: string): Promise<Amenity> => {
    return await prisma.amenity.create({
      data: { name },
    });
  },

  /**
   * Mengambil semua data fasilitas.
   */
  findAll: async (): Promise<Amenity[]> => {
    return await prisma.amenity.findMany();
  },

  /**
   * Menemukan satu fasilitas berdasarkan ID uniknya.
   * @param id - ID unik fasilitas (UUID).
   */
  findById: async (id: string): Promise<Amenity | null> => {
    return await prisma.amenity.findUnique({
      where: { id },
    });
  },

  /**
   * Memperbarui nama fasilitas.
   * @param id - ID fasilitas (UUID) yang akan diperbarui.
   * @param name - Nama baru untuk fasilitas.
   */
  update: async (id: string, name: string): Promise<Amenity> => {
    return await prisma.amenity.update({
      where: { id },
      data: { name },
    });
  },

  /**
   * Menghapus fasilitas dari database.
   * @param id - ID fasilitas (UUID) yang akan dihapus.
   */
  delete: async (id: string): Promise<Amenity> => {
    return await prisma.amenity.delete({
      where: { id },
    });
  },
};