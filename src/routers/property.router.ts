import { Router } from 'express';
import { PropertyController } from '../controllers/property.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { UserRole } from '../generated/prisma';
import roomRouter from './room.router';
import upload from '../middleware/upload.middleware';

const router = Router();
const tenantOnly = authMiddleware([UserRole.TENANT]);

// --- Endpoint Publik untuk User ---
router.get('/', PropertyController.getAll);
router.get('/cities', PropertyController.getCities);
router.get('/:id', PropertyController.getOne);
router.get('/:id/availability', PropertyController.getMonthlyAvailability);

// --- Endpoint Terproteksi untuk Tenant (Manajemen Properti) ---
router.post('/', tenantOnly, PropertyController.create);
router.get('/my-properties/all', tenantOnly, PropertyController.getPropertiesByTenant);
router.get('/my-properties/:id', tenantOnly, PropertyController.getPropertyByIdForTenant);
router.patch('/my-properties/:id', tenantOnly, PropertyController.update);
router.delete('/my-properties/:id', tenantOnly, PropertyController.delete);
router.patch(
    '/my-properties/:id/upload-image',
    tenantOnly,
    upload.single('propertyImage'),
    PropertyController.uploadImage
);
router.post(
    '/my-properties/:id/gallery',
    tenantOnly,
    upload.array('galleryImages', 10),
    PropertyController.uploadGallery
);

// --- Endpoint Terproteksi untuk Tenant (Manajemen Kamar) ---
router.use('/my-properties/:propertyId/rooms', tenantOnly, roomRouter);

export default router;