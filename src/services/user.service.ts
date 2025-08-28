import { prisma } from '../config/prisma';
import { comparePassword, hashPassword } from '../utils/hashing';
import { uploadToCloudinary } from '../utils/cloudinary';
import { TokenService } from './token.service';

export const UserService = {
  updateProfile: async (userId: number, data: any, file: Express.Multer.File | undefined) => {
    const updateData: any = {};

    if (data.fullName) {
      updateData.fullName = data.fullName;
    }

    if (file) {
      const result = await uploadToCloudinary(file.buffer, 'profile_pictures');
      updateData.profilePicture = result.secure_url;
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: {
        id: true,
        fullName: true,
        email: true,
        profilePicture: true,
        verified: true,
      },
    });

    return updatedUser;
  },

  updatePassword: async (userId: number, data: any) => {
    const { oldPassword, newPassword } = data;
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user || !user.password) {
      throw new Error('User tidak ditemukan atau tidak menggunakan password.');
    }

    const isPasswordValid = await comparePassword(oldPassword, user.password);
    if (!isPasswordValid) {
      throw new Error('Password lama salah.');
    }

    const hashedPassword = await hashPassword(newPassword);
    await prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });
  },

  requestEmailChange: async (userId: number, newEmail: string) => {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new Error('User tidak ditemukan.');

    const existingEmail = await prisma.user.findUnique({ where: { email: newEmail } });
    if (existingEmail) throw new Error('Email baru sudah terdaftar oleh pengguna lain.');

    const token = await TokenService.createToken(userId, 'EMAIL_CHANGE');
    await TokenService.sendTokenEmail(user, token, 'EMAIL_CHANGE', { newEmail });
  },

  confirmEmailChange: async (token: string, newEmail: string) => {
    const userId = await TokenService.validateAndUseToken(token, 'EMAIL_CHANGE');
    
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        email: newEmail,
        verified: false,
      },
    });

    const verificationToken = await TokenService.createToken(userId, 'EMAIL_VERIFICATION');
    await TokenService.sendTokenEmail(updatedUser, verificationToken, 'EMAIL_VERIFICATION');

    return updatedUser;
  },
};