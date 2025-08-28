import { AmenityRepository } from '../repositories/amenity.repository';
import { prisma } from '../config/prisma';
import { Amenity } from '../generated/prisma';

export const AmenityService = {
  createAmenity: async (name: string): Promise<Amenity> => {
    const existingAmenity = await prisma.amenity.findUnique({ where: { name } });
    if (existingAmenity) {
      throw new Error('Nama fasilitas sudah ada.');
    }
    return await AmenityRepository.create(name);
  },

  getAllAmenities: async (): Promise<Amenity[]> => {
    return await AmenityRepository.findAll();
  },

  updateAmenity: async (id: string, name: string): Promise<Amenity> => {
    const amenity = await AmenityRepository.findById(id);
    if (!amenity) {
      throw new Error('Fasilitas tidak ditemukan.');
    }
    return await AmenityRepository.update(id, name);
  },

  deleteAmenity: async (id: string): Promise<Amenity> => {
    const amenity = await AmenityRepository.findById(id);
    if (!amenity) {
      throw new Error('Fasilitas tidak ditemukan.');
    }
    return await AmenityRepository.delete(id);
  },
};