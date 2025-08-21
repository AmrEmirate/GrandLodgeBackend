import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';
import { prisma } from '../config/prisma';
import { UserRole } from '../generated/prisma';

export interface AuthRequest extends Request {
  user?: any;
}

export const authMiddleware = (roles: UserRole[] = []) => {
  return async (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Akses ditolak, tidak ada token.' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);

    if (!decoded) {
      return res.status(401).json({ message: 'Token tidak valid atau sudah kedaluwarsa.' });
    }

    try {
      const user = await prisma.user.findUnique({
        where: { id: decoded.id },
        include: {
          tenant: true,
        },
      });

      if (!user) {
        return res.status(401).json({ message: 'User tidak ditemukan.' });
      }

      if (!user.verified) {
        return res.status(403).json({ message: 'Akun Anda belum terverifikasi.' });
      }

      req.user = user;

      if (roles.length > 0 && !roles.includes(user.role)) {
        return res.status(403).json({ message: 'Anda tidak memiliki hak akses untuk sumber daya ini.' });
      }

      next();
    } catch (error) {
      res.status(500).json({ message: 'Terjadi kesalahan pada server.' });
    }
  };
};