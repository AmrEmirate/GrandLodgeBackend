import { Request, Response } from 'express';
import { AmenityService } from '../services/amenity.service';

export const AmenityController = {
  create: async (req: Request, res: Response) => {
    try {
      const amenity = await AmenityService.createAmenity(req.body.name);
      res.status(201).json({ message: 'Fasilitas berhasil dibuat.', data: amenity });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },

  getAll: async (_req: Request, res: Response) => {
    try {
      const amenities = await AmenityService.getAllAmenities();
      res.status(200).json({ data: amenities });
    } catch (error: any) {
      res.status(500).json({ message: 'Gagal mengambil data fasilitas.' });
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const amenity = await AmenityService.updateAmenity(Number(req.params.id), req.body.name);
      res.status(200).json({ message: 'Fasilitas berhasil diperbarui.', data: amenity });
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      await AmenityService.deleteAmenity(Number(req.params.id));
      res.status(200).json({ message: 'Fasilitas berhasil dihapus.' });
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  },
};