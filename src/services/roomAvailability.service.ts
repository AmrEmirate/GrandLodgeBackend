import { RoomRepository } from '../repositories/room.repository';
import { PropertyRepository } from '../repositories/property.repository';
import { RoomAvailabilityRepository } from '../repositories/roomAvailability.repository';
import { eachDayOfInterval } from 'date-fns';

export const RoomAvailabilityService = {
  updateAvailability: async (tenantId: number, propertyId: number, roomId: number, data: any): Promise<void> => {
    const property = await PropertyRepository.findByIdAndTenantId(propertyId, tenantId);
    if (!property) {
      throw new Error('Properti tidak ditemukan atau Anda tidak memiliki akses.');
    }

    const room = await RoomRepository.findById(roomId);
    if (!room || room.propertyId !== propertyId) {
      throw new Error('Kamar tidak ditemukan di properti ini.');
    }

    const { startDate, endDate, price, isAvailable } = data;
    const dateInterval = eachDayOfInterval({
      start: new Date(startDate),
      end: new Date(endDate),
    });

    const availabilityData = dateInterval.map(date => ({
      roomId: roomId,
      date: date,
      price: price !== undefined ? price : room.basePrice,
      isAvailable: isAvailable !== undefined ? isAvailable : true,
    }));

    await RoomAvailabilityRepository.upsertMany(availabilityData);
  },
};