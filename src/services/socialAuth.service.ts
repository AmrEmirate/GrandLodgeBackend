import { prisma } from '../config/prisma';

export const SocialAuthService = {
  findOrCreateGoogleUser: async (profile: any) => {
    const user = await prisma.user.findUnique({
      where: { provider_providerId: { provider: 'google', providerId: profile.id } },
    });

    if (user) {
      return user;
    }

    const email = profile.emails[0].value;
    const existingEmail = await prisma.user.findUnique({ where: { email } });

    if (existingEmail) {
      throw new Error('Email sudah terdaftar dengan metode lain.');
    }

    const newUser = await prisma.user.create({
      data: {
        email: email,
        fullName: profile.displayName,
        provider: 'google',
        providerId: profile.id,
        role: 'USER',
        verified: true,
        profilePicture: profile.photos[0].value,
      },
    });

    return newUser;
  },

  findOrCreateFacebookUser: async (profile: any) => {
    const user = await prisma.user.findUnique({
      where: { provider_providerId: { provider: 'facebook', providerId: profile.id } },
    });

    if (user) {
      return user;
    }

    if (!profile.emails || !profile.emails[0]?.value) {
      throw new Error('Email tidak ditemukan dari profil Facebook.');
    }
    const email = profile.emails[0].value;

    const existingEmail = await prisma.user.findUnique({ where: { email } });
    if (existingEmail) {
      throw new Error('Email sudah terdaftar dengan metode lain.');
    }

    const newUser = await prisma.user.create({
      data: {
        email: email,
        fullName: profile.displayName,
        provider: 'facebook',
        providerId: profile.id,
        role: 'USER',
        verified: true,
        profilePicture: profile.photos ? profile.photos[0].value : null,
      },
    });

    return newUser;
  },

  findOrCreateTwitterUser: async (profile: any) => {
    const user = await prisma.user.findUnique({
      where: { provider_providerId: { provider: 'twitter', providerId: profile.id } },
    });

    if (user) {
      return user;
    }

    if (!profile.emails || !profile.emails[0]?.value) {
      throw new Error('Email tidak bisa didapatkan dari profil Twitter. Pastikan aplikasi Anda memiliki izin yang cukup.');
    }
    const email = profile.emails[0].value;

    const existingEmail = await prisma.user.findUnique({ where: { email } });
    if (existingEmail) {
      throw new Error('Email sudah terdaftar dengan metode lain.');
    }

    const newUser = await prisma.user.create({
      data: {
        email: email,
        fullName: profile.displayName,
        provider: 'twitter',
        providerId: profile.id,
        role: 'USER',
        verified: true,
        profilePicture: profile.photos ? profile.photos[0].value.replace('_normal', '') : null,
      },
    });

    return newUser;
  },
};