import { Router } from 'express';
import { authMiddleware } from '../middleware/auth.middleware';
import upload from '../middleware/upload.middleware';
import { UserController } from '../controllers/user.controller';

const router = Router();

// Endpoint untuk memperbarui data teks (JSON) atau gambar (form-data)
router.patch(
  '/profile',
  authMiddleware(),
  upload.single('profilePicture'),
  UserController.updateProfile
);

// Endpoint khusus untuk memperbarui password
router.patch('/password', authMiddleware(), UserController.updatePassword);

// Endpoint untuk memulai proses ganti email
router.post('/request-email-change', authMiddleware(), UserController.requestEmailChange);

// Endpoint publik untuk mengkonfirmasi perubahan email via token
router.post('/confirm-email-change', UserController.confirmEmailChange);

export default router;