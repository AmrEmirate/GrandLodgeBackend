import { prisma } from '../config/prisma';
import crypto from 'crypto';
import { addHours } from 'date-fns';
import { comparePassword, hashPassword } from '../utils/hashing';
import { uploadToCloudinary } from '../utils/cloudinary';

export const UserService = {
  updateProfile: async (userId: number, data: any, file: Express.Multer.File | undefined) => {
    const currentUser = await prisma.user.findUnique({ where: { id: userId } });
    if (!currentUser) {
      throw new Error('User tidak ditemukan.');
    }

    const updateData: any = {};

    if (data.fullName) {
      updateData.fullName = data.fullName;
    }

    if (file) {
      const result = await uploadToCloudinary(file.buffer, 'profile_pictures');
      updateData.profilePicture = result.secure_url;
    }

    if (data.email && data.email !== currentUser.email) {
      const existingUser = await prisma.user.findUnique({ where: { email: data.email } });
      if (existingUser) {
        throw new Error('Email baru sudah terdaftar oleh pengguna lain.');
      }
      
      updateData.email = data.email;
      updateData.verified = false;

      const token = crypto.randomBytes(32).toString('hex');
      await prisma.token.create({
        data: {
          token,
          purpose: 'EMAIL_VERIFICATION',
          expiresAt: addHours(new Date(), 1),
          userId: userId,
        },
      });
      console.log(`Verification token for NEW email ${data.email}: ${token}`);
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
};