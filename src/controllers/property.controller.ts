import { Request, Response } from 'express';
import { PublicPropertyService } from '../services/publicProperty.service';
import { TenantPropertyService } from '../services/tenantProperty.service';
import { AuthRequest } from '../middleware/auth.middleware';

export const PropertyController = {
  // --- Panggil PublicPropertyService ---
  getAll: async (req: Request, res: Response) => {
    try {
      const result = await PublicPropertyService.getProperties(req.query);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(500).json({ message: 'Gagal mengambil data properti.' });
    }
  },

  getOne: async (req: Request, res: Response) => {
    try {
      const property = await PublicPropertyService.getPropertyById(Number(req.params.id));
      if (!property) {
        return res.status(404).json({ message: 'Properti tidak ditemukan.' });
      }
      res.status(200).json({ data: property });
    } catch (error: any) {
      res.status(500).json({ message: 'Gagal mengambil detail properti.' });
    }
  },

  getMonthlyAvailability: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { month, year } = req.query;
      if (!month || !year) {
        return res.status(400).json({ message: 'Parameter bulan dan tahun dibutuhkan.' });
      }
      const availability = await PublicPropertyService.getMonthlyAvailability(Number(id), Number(month), Number(year));
      res.status(200).json({ data: availability });
    } catch (error: any) {
      res.status(500).json({ message: 'Gagal mengambil data ketersediaan.' });
    }
  },

  getCities: async (_req: Request, res: Response) => {
    try {
      const cities = await PublicPropertyService.getCities();
      res.status(200).json({ data: cities });
    } catch (error: any) {
      res.status(500).json({ message: 'Gagal mengambil data kota.' });
    }
  },

  // --- Panggil TenantPropertyService ---
  create: async (req: AuthRequest, res: Response) => {
    try {
      const tenantId = req.user?.tenant?.id;
      if (!tenantId) {
        return res.status(403).json({ message: 'Akses ditolak. Akun ini bukan tenant.' });
      }
      const property = await TenantPropertyService.createProperty(req.body, tenantId);
      res.status(201).json({ message: 'Properti berhasil dibuat.', data: property });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },

  getPropertiesByTenant: async (req: AuthRequest, res: Response) => {
    try {
      const tenantId = req.user?.tenant?.id;
      if (!tenantId) {
        return res.status(403).json({ message: 'Akses ditolak. Akun ini bukan tenant.' });
      }
      const properties = await TenantPropertyService.getPropertiesByTenant(tenantId);
      res.status(200).json({ data: properties });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  getPropertyByIdForTenant: async (req: AuthRequest, res: Response) => {
    try {
      const tenantId = req.user?.tenant?.id;
      if (!tenantId) {
        return res.status(403).json({ message: 'Akses ditolak. Akun ini bukan tenant.' });
      }
      const property = await TenantPropertyService.getPropertyDetailForTenant(Number(req.params.id), tenantId);
      res.status(200).json({ data: property });
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  },

  update: async (req: AuthRequest, res: Response) => {
    try {
      const tenantId = req.user?.tenant?.id;
      if (!tenantId) {
        return res.status(403).json({ message: 'Akses ditolak. Akun ini bukan tenant.' });
      }
      const property = await TenantPropertyService.updateProperty(Number(req.params.id), tenantId, req.body);
      res.status(200).json({ message: 'Properti berhasil diperbarui.', data: property });
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  },

  delete: async (req: AuthRequest, res: Response) => {
    try {
      const tenantId = req.user?.tenant?.id;
      if (!tenantId) {
        return res.status(403).json({ message: 'Akses ditolak. Akun ini bukan tenant.' });
      }
      await TenantPropertyService.deleteProperty(Number(req.params.id), tenantId);
      res.status(200).json({ message: 'Properti berhasil dihapus.' });
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  },
};