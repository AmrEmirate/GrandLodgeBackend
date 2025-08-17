import { prisma } from '../config/prisma';

export const RoomAvailabilityRepository = {
  upsertMany: async (data: any[]): Promise<void> => {
    const operations = data.map(item =>
      prisma.roomAvailability.upsert({
        where: { roomId_date: { roomId: item.roomId, date: item.date } },
        update: { price: item.price, isAvailable: item.isAvailable },
        create: {
          roomId: item.roomId,
          date: item.date,
          price: item.price,
          isAvailable: item.isAvailable,
        },
      })
    );
    await prisma.$transaction(operations);
  },
};