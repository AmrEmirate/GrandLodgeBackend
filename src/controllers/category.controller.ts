import { Request, Response } from 'express';
import { CategoryService } from '../services/category.servlce';

export const CategoryController = {
  create: async (req: Request, res: Response) => {
    try {
      const category = await CategoryService.createCategory(req.body.name);
      res.status(201).json({ message: 'Kategori berhasil dibuat.', data: category });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },

  getAll: async (_req: Request, res: Response) => {
    try {
      const categories = await CategoryService.getAllCategories();
      res.status(200).json({ data: categories });
    } catch (error: any) {
      res.status(500).json({ message: 'Gagal mengambil data kategori.' });
    }
  },

  getById: async (req: Request, res: Response) => {
    try {
      const category = await CategoryService.getCategoryById(Number(req.params.id));
      res.status(200).json({ data: category });
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const category = await CategoryService.updateCategory(Number(req.params.id), req.body.name);
      res.status(200).json({ message: 'Kategori berhasil diperbarui.', data: category });
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      await CategoryService.deleteCategory(Number(req.params.id));
      res.status(200).json({ message: 'Kategori berhasil dihapus.' });
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  },
};