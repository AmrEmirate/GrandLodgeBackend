import { RoomRepository } from '../repositories/room.repository';
import { PropertyRepository } from '../repositories/property.repository';
import { Room } from '../generated/prisma';
import { uploadToCloudinary } from '../utils/cloudinary';

export const RoomService = {
  createRoom: async (tenantId: string, propertyId: string, data: any): Promise<Room> => {
    const property = await PropertyRepository.findByIdAndTenantId(propertyId, tenantId);
    if (!property) {
      throw new Error('Properti tidak ditemukan atau Anda tidak memiliki akses.');
    }
    return await RoomRepository.create(propertyId, data);
  },

  getRoomsByProperty: async (tenantId: string, propertyId: string): Promise<Room[]> => {
    const property = await PropertyRepository.findByIdAndTenantId(propertyId, tenantId);
    if (!property) {
      throw new Error('Properti tidak ditemukan atau Anda tidak memiliki akses.');
    }
    return await RoomRepository.findAllByPropertyId(propertyId);
  },

  updateRoom: async (tenantId: string, propertyId: string, roomId: string, data: any): Promise<Room> => {
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

  deleteRoom: async (tenantId: string, propertyId: string, roomId: string): Promise<Room> => {
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

  uploadRoomGallery: async (tenantId: string, propertyId: string, roomId: string, files: Express.Multer.File[]) => {
    // 1. Validasi kepemilikan
    const property = await PropertyRepository.findByIdAndTenantId(propertyId, tenantId);
    if (!property) {
      throw new Error('Properti tidak ditemukan atau Anda tidak memiliki akses.');
    }

    const room = await RoomRepository.findById(roomId);
    if (!room || room.propertyId !== propertyId) {
      throw new Error('Kamar tidak ditemukan di properti ini.');
    }

    // 2. Proses upload ke Cloudinary
    const uploadPromises = files.map(file => 
        uploadToCloudinary(file.buffer, 'room_gallery')
    );
    const uploadResults = await Promise.all(uploadPromises);
    const imageUrls = uploadResults.map(result => result.secure_url);

    // 3. Panggil repository untuk menyimpan URL
    return await RoomRepository.addGalleryImages(roomId, imageUrls);
  },
};