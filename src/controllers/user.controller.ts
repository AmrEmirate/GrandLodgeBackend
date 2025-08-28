import { Request, Response } from 'express';
import { AuthRequest } from '../middleware/auth.middleware';
import { UserService } from '../services/user.service';

export const UserController = {
  updateProfile: async (req: AuthRequest, res: Response) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const updatedUser = await UserService.updateProfile(userId, req.body, req.file);
      res.status(200).json({ message: 'Profil berhasil diperbarui.', data: updatedUser });
    } catch (error: any) {
      res.status(500).json({ message: 'Terjadi kesalahan pada server.', error: error.message });
    }
  },

  updatePassword: async (req: AuthRequest, res: Response) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      await UserService.updatePassword(userId, req.body);
      res.status(200).json({ message: 'Password berhasil diperbarui.' });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },

  requestEmailChange: async (req: AuthRequest, res: Response) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
      await UserService.requestEmailChange(userId, req.body.newEmail);
      res.status(200).json({ message: 'Email konfirmasi telah dikirim ke alamat email lama Anda.' });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },

  confirmEmailChange: async (req: Request, res: Response) => {
    try {
      const { token, newEmail } = req.body;
      await UserService.confirmEmailChange(token, newEmail);
      res.status(200).json({ message: 'Perubahan email berhasil dikonfirmasi. Silakan cek email baru Anda untuk verifikasi akhir.' });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },
};