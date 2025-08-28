import { Router } from 'express';
import { AmenityController } from '../controllers/amenity.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { UserRole } from '../generated/prisma';

const router = Router();
const tenantOnly = authMiddleware([UserRole.TENANT]);

router.post('/', tenantOnly, AmenityController.create);
router.get('/', tenantOnly, AmenityController.getAll);
router.patch('/:id', tenantOnly, AmenityController.update);
router.delete('/:id', tenantOnly, AmenityController.delete);

export default router;