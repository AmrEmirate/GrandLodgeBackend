import { prisma } from '../config/prisma';
import { UserRole } from '../generated/prisma';
import { hashPassword, comparePassword } from '../utils/hashing';
import { generateToken } from '../utils/jwt';
import { TokenService } from './token.service';

export const AuthService = {
  registerUser: async (data: any) => {
    const existingUser = await prisma.user.findUnique({ where: { email: data.email } });
    if (existingUser) {
      throw new Error('Email sudah terdaftar.');
    }
    const user = await prisma.user.create({ data: { fullName: data.fullName, email: data.email, role: UserRole.USER } });
    
    const verificationToken = await TokenService.createToken(user.id, 'EMAIL_VERIFICATION');
    await TokenService.sendTokenEmail(user, verificationToken, 'EMAIL_VERIFICATION');
    
    return user;
  },

  registerTenant: async (data: any) => {
    const existingUser = await prisma.user.findUnique({ where: { email: data.email } });
    if (existingUser) throw new Error('Email sudah terdaftar.');

    let user, token;
    const result = await prisma.$transaction(async (tx) => {
      user = await tx.user.create({ data: { fullName: data.fullName, email: data.email, role: UserRole.TENANT } });
      await tx.tenant.create({ data: { userId: user.id, companyName: data.companyName, addressCompany: data.addressCompany, phoneNumberCompany: data.phoneNumberCompany } });
      token = await TokenService.createToken(user.id, 'EMAIL_VERIFICATION', tx);
      return user;
    });

    if (user && token) {
      await TokenService.sendTokenEmail(user, token, 'EMAIL_VERIFICATION');
    }
    return result;
  },

  verifyEmailAndSetPassword: async (token: string, password: string) => {
    const userId = await TokenService.validateAndUseToken(token, 'EMAIL_VERIFICATION');
    const hashedPassword = await hashPassword(password);
    return await prisma.user.update({ where: { id: userId }, data: { password: hashedPassword, verified: true } });
  },

  resendVerificationEmail: async (email: string) => {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error('User tidak ditemukan.');
    if (user.verified) throw new Error('Akun ini sudah terverifikasi.');
    const token = await TokenService.createToken(user.id, 'EMAIL_VERIFICATION');
    await TokenService.sendTokenEmail(user, token, 'EMAIL_VERIFICATION');
  },

  login: async (data: any) => {
    const user = await prisma.user.findUnique({ where: { email: data.email } });
    if (!user || !user.password) throw new Error('Email atau password salah.');
    if (!user.verified) throw new Error('Akun belum diverifikasi.');
    const isPasswordValid = await comparePassword(data.password, user.password);
    if (!isPasswordValid) throw new Error('Email atau password salah.');
    const jwt = generateToken({ id: user.id, role: user.role });
    return { user, token: jwt };
  },

  requestPasswordReset: async (email: string) => {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !user.password) throw new Error('Jika email terdaftar, kami akan mengirimkan link reset.');
    const token = await TokenService.createToken(user.id, 'PASSWORD_RESET');
    await TokenService.sendTokenEmail(user, token, 'PASSWORD_RESET');
  },

  resetPassword: async (token: string, password: string) => {
    const userId = await TokenService.validateAndUseToken(token, 'PASSWORD_RESET');
    const hashedPassword = await hashPassword(password);
    await prisma.user.update({ where: { id: userId }, data: { password: hashedPassword } });
  },

  getProfile: async (userId: number) => {
    return await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, fullName: true, email: true, role: true, profilePicture: true, verified: true },
    });
  },
};