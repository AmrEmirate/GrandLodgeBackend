import { Router } from 'express';
import { PropertyController } from '../controllers/property.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { UserRole } from '@prisma/client';
import roomRouter from './room.router';

const router = Router();
const tenantOnly = authMiddleware([UserRole.TENANT]);

router.get('/', PropertyController.getAll);
router.get('/cities', PropertyController.getCities);
router.get('/:id', PropertyController.getOne);

router.post('/', tenantOnly, PropertyController.create);
router.get('/my-properties/all', tenantOnly, PropertyController.getPropertiesByTenant);
router.get('/my-properties/:id', tenantOnly, PropertyController.getPropertyByIdForTenant);
router.patch('/my-properties/:id', tenantOnly, PropertyController.update);
router.delete('/my-properties/:id', tenantOnly, PropertyController.delete);
router.get('/:id', PropertyController.getOne);
router.get('/:id/availability', PropertyController.getMonthlyAvailability);

router.use('/my-properties/:propertyId/rooms', tenantOnly, roomRouter);

export default router;