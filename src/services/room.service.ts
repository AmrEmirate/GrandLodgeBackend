import { RoomRepository } from '../repositories/room.repository';
import { PropertyRepository } from '../repositories/property.repository';
import { Room } from '../generated/prisma';

export const RoomService = {
  createRoom: async (tenantId: number, propertyId: number, data: any): Promise<Room> => {
    const property = await PropertyRepository.findByIdAndTenantId(propertyId, tenantId);
    if (!property) {
      throw new Error('Properti tidak ditemukan atau Anda tidak memiliki akses.');
    }
    return await RoomRepository.create(propertyId, data);
  },

  getRoomsByProperty: async (tenantId: number, propertyId: number): Promise<Room[]> => {
    const property = await PropertyRepository.findByIdAndTenantId(propertyId, tenantId);
    if (!property) {
      throw new Error('Properti tidak ditemukan atau Anda tidak memiliki akses.');
    }
    return await RoomRepository.findAllByPropertyId(propertyId);
  },

  updateRoom: async (tenantId: number, propertyId: number, roomId: number, data: any): Promise<Room> => {
    const property = await PropertyRepository.findByIdAndTenantId(propertyId, tenantId);
    if (!property) {
      throw new Error('Properti tidak ditemukan atau Anda tidak memiliki akses.');
    }

    const room = await RoomRepository.findById(roomId);
    if (!room || room.propertyId !== propertyId) {
        throw new Error('Kamar tidak ditemukan di properti ini.');
    }

    return await RoomRepository.update(roomId, data);
  },

  deleteRoom: async (tenantId: number, propertyId: number, roomId: number): Promise<Room> => {
    const property = await PropertyRepository.findByIdAndTenantId(propertyId, tenantId);
    if (!property) {
        throw new Error('Properti tidak ditemukan atau Anda tidak memiliki akses.');
    }

    const room = await RoomRepository.findById(roomId);
    if (!room || room.propertyId !== propertyId) {
        throw new Error('Kamar tidak ditemukan di properti ini.');
    }
    
    return await RoomRepository.delete(roomId);
  },
};