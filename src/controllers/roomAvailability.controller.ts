import { Response } from 'express';
import { AuthRequest } from '../middleware/auth.middleware';
import { RoomAvailabilityService } from '../services/roomAvailability.service';

export const RoomAvailabilityController = {
  /**
   * Menangani permintaan untuk memperbarui ketersediaan dan harga kamar
   * dalam rentang tanggal tertentu.
   */
  update: async (req: AuthRequest, res: Response) => {
    try {
      // 1. Validasi bahwa pengguna adalah tenant
      const tenantId = req.user?.tenant?.id;
      if (!tenantId) {
        return res.status(403).json({ message: 'Akses ditolak.' });
      }

      // 2. Ambil ID properti dan kamar dari parameter URL (sekarang berupa string/UUID)
      const { propertyId, roomId } = req.params;

      // 3. Panggil service tanpa mengubah ID menjadi Number
      await RoomAvailabilityService.updateAvailability(
        tenantId,
        propertyId, // Langsung diteruskan sebagai string
        roomId,     // Langsung diteruskan sebagai string
        req.body
      );

      res.status(200).json({ message: 'Ketersediaan dan harga kamar berhasil diperbarui.' });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },
};