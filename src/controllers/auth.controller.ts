import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { AuthRequest } from '../middleware/auth.middleware';

export const AuthController = {
  register: async (req: Request, res: Response) => {
    try {
      const user = await AuthService.registerUser(req.body);
      res.status(201).json({ message: 'Registrasi berhasil. Silakan cek email Anda untuk verifikasi.', data: user });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },

  registerTenant: async (req: Request, res: Response) => {
    try {
      const tenant = await AuthService.registerTenant(req.body);
      res.status(201).json({ message: 'Registrasi tenant berhasil. Silakan cek email Anda untuk verifikasi.', data: tenant });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },

  verifyAndSetPassword: async (req: Request, res: Response) => {
    try {
      const { token, password } = req.body;
      await AuthService.verifyEmailAndSetPassword(token, password);
      res.status(200).json({ message: 'Akun berhasil diverifikasi. Silakan login.' });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },

  resendVerification: async (req: Request, res: Response) => {
    try {
      await AuthService.resendVerificationEmail(req.body.email);
      res.status(200).json({ message: 'Email verifikasi baru telah dikirim.' });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },

  login: async (req: Request, res: Response) => {
    try {
      const { user, token } = await AuthService.login(req.body);
      res.status(200).json({ message: 'Login berhasil.', data: { user, token } });
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  },

  requestPasswordReset: async (req: Request, res: Response) => {
    try {
      await AuthService.requestPasswordReset(req.body.email);
    } catch (error: any) {
    } finally {
      res.status(200).json({ message: 'Jika email terdaftar dan menggunakan password, kami akan mengirimkan link reset.' });
    }
  },

  resetPassword: async (req: Request, res: Response) => {
    try {
      const { token, password } = req.body;
      await AuthService.resetPassword(token, password);
      res.status(200).json({ message: 'Password berhasil direset. Silakan login kembali.' });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },

  getProfile: async (req: AuthRequest, res: Response) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
      const profile = await AuthService.getProfile(userId);
      res.status(200).json({ data: profile });
    } catch (error: any) {
      res.status(500).json({ message: 'Server error' });
    }
  },
};