import { Response } from 'express';
import { AuthRequest } from '../middleware/auth.middleware';
import { RoomAvailabilityService } from '../services/roomAvailability.service';

export const RoomAvailabilityController = {
  update: async (req: AuthRequest, res: Response) => {
    try {
      const tenantId = req.user?.tenant?.id;
      if (!tenantId) {
        return res.status(403).json({ message: 'Akses ditolak.' });
      }
      const { propertyId, roomId } = req.params;
      await RoomAvailabilityService.updateAvailability(tenantId, Number(propertyId), Number(roomId), req.body);
      res.status(200).json({ message: 'Ketersediaan dan harga kamar berhasil diperbarui.' });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },
};