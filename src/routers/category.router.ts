import { Router } from 'express';
import { CategoryController } from '../controllers/category.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { UserRole } from '@prisma/client';

const router = Router();

const tenantOnly = authMiddleware([UserRole.TENANT]);

router.post('/', tenantOnly, CategoryController.create);
router.get('/', tenantOnly, CategoryController.getAll);
router.get('/:id', tenantOnly, CategoryController.getById);
router.patch('/:id', tenantOnly, CategoryController.update);
router.delete('/:id', tenantOnly, CategoryController.delete);

export default router;