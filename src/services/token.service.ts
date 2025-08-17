import { prisma } from '../config/prisma';
import { TokenPurpose } from '@prisma/client';
import crypto from 'crypto';
import { addHours } from 'date-fns';

export const TokenService = {
  createToken: async (userId: number, purpose: TokenPurpose, expiresInHours: number = 1) => {
    const token = crypto.randomBytes(32).toString('hex');
    await prisma.token.create({
      data: {
        token,
        purpose,
        expiresAt: addHours(new Date(), expiresInHours),
        userId,
      },
    });
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