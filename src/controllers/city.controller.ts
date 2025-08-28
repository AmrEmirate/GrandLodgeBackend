import { Request, Response } from 'express';
import { CityService } from '../services/city.service';

export const CityController = {
  create: async (req: Request, res: Response) => {
    try {
      const city = await CityService.createCity(req.body);
      res.status(201).json({ message: 'Kota berhasil dibuat.', data: city });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },

  getAll: async (_req: Request, res: Response) => {
    try {
      const cities = await CityService.getAllCities();
      res.status(200).json({ data: cities });
    } catch (error: any) {
      res.status(500).json({ message: 'Gagal mengambil data kota.' });
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const city = await CityService.updateCity(Number(req.params.id), req.body);
      res.status(200).json({ message: 'Kota berhasil diperbarui.', data: city });
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      await CityService.deleteCity(Number(req.params.id));
      res.status(200).json({ message: 'Kota berhasil dihapus.' });
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  },
};