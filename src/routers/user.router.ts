import { Router } from 'express';
import { authMiddleware } from '../middleware/auth.middleware';
import upload from '../middleware/upload.middleware';
import { UserController } from '../controllers/user.controller';

const router = Router();

router.patch(
  '/profile',
  authMiddleware(),
  upload.single('profilePicture'),
  UserController.updateProfile
);

router.patch('/password', authMiddleware(), UserController.updatePassword);

export default router;