import { prisma } from '../config/prisma';
import { Room, RoomCategory, BedOption } from '@prisma/client';

interface RoomData {
  name: string;
  category: RoomCategory;
  description: string;
  bedOption: BedOption;
  capacity: number;
  basePrice: number;
}

export const RoomRepository = {
  create: async (propertyId: number, data: RoomData): Promise<Room> => {
    return await prisma.room.create({
      data: {
        propertyId: propertyId,
        name: data.name,
        category: data.category,
        description: data.description,
        bedOption: data.bedOption,
        capacity: data.capacity,
        basePrice: data.basePrice,
      },
    });
  },

  findAllByPropertyId: async (propertyId: number): Promise<Room[]> => {
    return await prisma.room.findMany({
      where: { propertyId: propertyId },
    });
  },

  findById: async (roomId: number): Promise<Room | null> => {
    return await prisma.room.findUnique({
      where: { id: roomId },
    });
  },

  update: async (roomId: number, data: Partial<RoomData>): Promise<Room> => {
    return await prisma.room.update({
      where: { id: roomId },
      data: data,
    });
  },

  delete: async (roomId: number): Promise<Room> => {
    return await prisma.room.delete({
      where: { id: roomId },
    });
  },
};