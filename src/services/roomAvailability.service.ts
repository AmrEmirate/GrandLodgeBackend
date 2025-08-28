import { RoomRepository } from '../repositories/room.repository';
import { PropertyRepository } from '../repositories/property.repository';
import { RoomAvailabilityRepository } from '../repositories/roomAvailability.repository';
import { eachDayOfInterval } from 'date-fns';

export const RoomAvailabilityService = {
  /**
   * Memperbarui ketersediaan dan harga untuk sebuah kamar dalam rentang tanggal tertentu.
   * Semua ID sekarang menggunakan tipe data string untuk UUID.
   */
  updateAvailability: async (
    tenantId: string, 
    propertyId: string, 
    roomId: string, 
    data: any
  ): Promise<void> => {
    // 1. Validasi bahwa properti ini milik tenant yang sedang login
    const property = await PropertyRepository.findByIdAndTenantId(propertyId, tenantId);
    if (!property) {
      throw new Error('Properti tidak ditemukan atau Anda tidak memiliki akses.');
    }

    // 2. Validasi bahwa kamar ini ada di dalam properti yang benar
    const room = await RoomRepository.findById(roomId);
    if (!room || room.propertyId !== propertyId) {
      throw new Error('Kamar tidak ditemukan di properti ini.');
    }

    const { startDate, endDate, price, isAvailable } = data;

    // 3. Buat array tanggal dari rentang yang diberikan
    const dateInterval = eachDayOfInterval({
      start: new Date(startDate),
      end: new Date(endDate),
    });

    // 4. Siapkan data untuk dimasukkan atau diperbarui di database
    const availabilityData = dateInterval.map(date => ({
      roomId: roomId,
      date: date,
      // Gunakan harga baru jika ada, jika tidak, gunakan harga dasar kamar
      price: price !== undefined ? price : room.basePrice,
      // Atur ketersediaan jika ada, jika tidak, default-nya adalah 'true' (tersedia)
      isAvailable: isAvailable !== undefined ? isAvailable : true,
    }));

    // 5. Panggil repository untuk melakukan operasi upsert (update or insert)
    await RoomAvailabilityRepository.upsertMany(availabilityData);
  },
};