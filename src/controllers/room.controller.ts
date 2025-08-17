import { Response } from 'express';
import { AuthRequest } from '../middleware/auth.middleware';
import { RoomService } from '../services/room.service';

export const RoomController = {
  create: async (req: AuthRequest, res: Response) => {
    try {
      const tenantId = req.user?.tenant?.id;
      if (!tenantId) {
        return res.status(403).json({ message: 'Akses ditolak.' });
      }
      const { propertyId } = req.params;
      const room = await RoomService.createRoom(tenantId, Number(propertyId), req.body);
      res.status(201).json({ message: 'Kamar berhasil dibuat.', data: room });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },

  getAllByProperty: async (req: AuthRequest, res: Response) => {
    try {
      const tenantId = req.user?.tenant?.id;
      if (!tenantId) {
        return res.status(403).json({ message: 'Akses ditolak.' });
      }
      const { propertyId } = req.params;
      const rooms = await RoomService.getRoomsByProperty(tenantId, Number(propertyId));
      res.status(200).json({ data: rooms });
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  },

  update: async (req: AuthRequest, res: Response) => {
    try {
        const tenantId = req.user?.tenant?.id;
        if (!tenantId) {
            return res.status(403).json({ message: 'Akses ditolak.' });
        }
        const { propertyId, roomId } = req.params;
        const room = await RoomService.updateRoom(tenantId, Number(propertyId), Number(roomId), req.body);
        res.status(200).json({ message: 'Kamar berhasil diperbarui.', data: room });
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
  },

  delete: async (req: AuthRequest, res: Response) => {
    try {
        const tenantId = req.user?.tenant?.id;
        if (!tenantId) {
            return res.status(403).json({ message: 'Akses ditolak.' });
        }
        const { propertyId, roomId } = req.params;
        await RoomService.deleteRoom(tenantId, Number(propertyId), Number(roomId));
        res.status(200).json({ message: 'Kamar berhasil dihapus.' });
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
  }
};