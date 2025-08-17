import { prisma } from '../config/prisma';
import { UserRole } from '@prisma/client';
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
    console.log(`Verification token for ${user.email}: ${verificationToken}`);
    return user;
  },

  registerTenant: async (data: any) => {
    const existingUser = await prisma.user.findUnique({ where: { email: data.email } });
    if (existingUser) throw new Error('Email sudah terdaftar.');

    const result = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({ data: { fullName: data.fullName, email: data.email, role: UserRole.TENANT } });
      await tx.tenant.create({ data: { userId: user.id, companyName: data.companyName, addressCompany: data.addressCompany, phoneNumberCompany: data.phoneNumberCompany } });
      const verificationToken = await TokenService.createToken(user.id, 'EMAIL_VERIFICATION');
      console.log(`Verification token for tenant ${user.email}: ${verificationToken}`);
      return user;
    });
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
    const verificationToken = await TokenService.createToken(user.id, 'EMAIL_VERIFICATION');
    console.log(`NEW Verification token for ${user.email}: ${verificationToken}`);
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
    const resetToken = await TokenService.createToken(user.id, 'PASSWORD_RESET');
    console.log(`Password reset token for ${user.email}: ${resetToken}`);
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