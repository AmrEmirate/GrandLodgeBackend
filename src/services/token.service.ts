import { prisma } from '../config/prisma';
import { TokenPurpose } from '@prisma/client';
import crypto from 'crypto';
import { addHours } from 'date-fns';
import { sendEmail } from '../utils/mailer';

export const TokenService = {
  createToken: async (userId: number, purpose: TokenPurpose, expiresInHours: number = 1) => {
    const token = crypto.randomBytes(32).toString('hex');
    const user = await prisma.user.findUnique({ where: { id: userId } });
    
    if (!user) {
        throw new Error("User not found to create token");
    }

    await prisma.token.create({
      data: {
        token,
        purpose,
        expiresAt: addHours(new Date(), expiresInHours),
        userId,
      },
    });

    if (purpose === 'EMAIL_VERIFICATION') {
        const verificationLink = `${process.env.FRONTEND_URL}/verify-email?token=${token}`;
        await sendEmail({
            to: user.email,
            subject: 'Verifikasi Akun Grand Lodge Anda',
            html: `
                <h1>Selamat Datang di Grand Lodge!</h1>
                <p>Terima kasih telah mendaftar. Silakan klik link di bawah ini untuk memverifikasi akun Anda dan mengatur password:</p>
                <a href="${verificationLink}" target="_blank" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Verifikasi Akun Saya</a>
                <p>Link ini hanya berlaku selama 1 jam.</p>
            `
        });
    } else if (purpose === 'PASSWORD_RESET') {
        const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;
        await sendEmail({
            to: user.email,
            subject: 'Reset Password Akun Grand Lodge Anda',
            html: `
                <h1>Permintaan Reset Password</h1>
                <p>Anda menerima email ini karena ada permintaan untuk mereset password akun Anda. Silakan klik link di bawah ini:</p>
                <a href="${resetLink}" target="_blank" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Reset Password Saya</a>
                <p>Link ini hanya berlaku selama 1 jam. Jika Anda tidak merasa melakukan permintaan ini, silakan abaikan email ini.</p>
            `
        });
    }

    console.log(`Token for ${purpose} for ${user.email}: ${token}`);
    
    return token;
  },

  validateAndUseToken: async (token: string, purpose: TokenPurpose) => {
    const dbToken = await prisma.token.findFirst({
      where: {
        token: token,
        purpose: purpose,
        expiresAt: { gt: new Date() },
      },
    });

    if (!dbToken) {
      throw new Error('Token tidak valid atau sudah kedaluwarsa.');
    }

    await prisma.token.delete({ where: { id: dbToken.id } });

    return dbToken.userId;
  },
};