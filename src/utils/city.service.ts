import { CityRepository } from '../repositories/city.repository';
import { prisma } from '../config/prisma';
import { City } from '../generated/prisma';
import { GeocodingService } from './geocoding.service';

export const CityService = {
  createCity: async (data: { name: string; provinsi: string }): Promise<City> => {
    const existingCity = await prisma.city.findUnique({ where: { name: data.name } });
    if (existingCity) {
      throw new Error('Nama kota sudah ada.');
    }

    const { latitude, longitude } = await GeocodingService.getFromAddress(`${data.name}, ${data.provinsi}`);

    if (latitude === null || longitude === null) {
      throw new Error('Gagal mendapatkan data geolokasi untuk kota ini.');
    }

    const cityData = { ...data, latitude, longitude };
    return await CityRepository.create(cityData);
  },

  getAllCities: async (): Promise<City[]> => {
    return await CityRepository.findAll();
  },

  updateCity: async (id: number, data: { name: string; provinsi: string }): Promise<City> => {
    const city = await CityRepository.findById(id);
    if (!city) {
      throw new Error('Kota tidak ditemukan.');
    }
    // Opsional: Anda bisa menambahkan logika geocoding ulang di sini jika diperlukan
    return await CityRepository.update(id, data);
  },

  deleteCity: async (id: number): Promise<City> => {
    const city = await CityRepository.findById(id);
    if (!city) {
      throw new Error('Kota tidak ditemukan.');
    }
    return await CityRepository.delete(id);
  },
};