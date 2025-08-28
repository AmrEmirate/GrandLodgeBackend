import { Router } from 'express';
import { CityController } from '../controllers/city.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { UserRole } from '../generated/prisma';

const router = Router();
const tenantOnly = authMiddleware([UserRole.TENANT]);

// Endpoint publik untuk mengambil semua kota
router.get('/', CityController.getAll);

// Endpoint terproteksi hanya untuk tenant
router.post('/', tenantOnly, CityController.create);
router.patch('/:id', tenantOnly, CityController.update);
router.delete('/:id', tenantOnly, CityController.delete);

export default router;