import { prisma } from '../config/prisma';
import { Room, RoomCategory, BedOption } from '../generated/prisma';

interface RoomData {
  name: string;
  category: RoomCategory;
  description: string;
  bedOption: BedOption;
  capacity: number;
  basePrice: number;
}

export const RoomRepository = {
  create: async (propertyId: string, data: RoomData): Promise<Room> => {
    return await prisma.room.create({
      data: {
        propertyId: propertyId,
        ...data,
      },
    });
  },

  findAllByPropertyId: async (propertyId: string): Promise<Room[]> => {
    return await prisma.room.findMany({
      where: { propertyId: propertyId, deletedAt: null }, // Filter data aktif
    });
  },

  findById: async (roomId: string): Promise<Room | null> => {
    return await prisma.room.findFirst({
      where: { id: roomId, deletedAt: null }, // Filter data aktif
    });
  },

  update: async (roomId: string, data: Partial<RoomData>): Promise<Room> => {
    return await prisma.room.update({
      where: { id: roomId },
      data: data,
    });
  },

  // Mengubah delete menjadi softDelete
  delete: async (roomId: string): Promise<Room> => {
    return await prisma.room.update({
      where: { id: roomId },
      data: { deletedAt: new Date() },
    });
  },

  addGalleryImages: async (roomId: string, imageUrls: string[]) => {
    const imageData = imageUrls.map(url => ({
      roomId: roomId,
      imageUrl: url,
    }));
    await prisma.roomImage.createMany({ data: imageData });
    return prisma.room.findUnique({
      where: { id: roomId },
      include: { images: true },
    });
  },
};