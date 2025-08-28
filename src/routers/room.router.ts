import { Router } from 'express';
import { RoomController } from '../controllers/room.controller';
import upload from '../middleware/upload.middleware';
import roomAvailabilityRouter from './roomAvailability.router'; // Impor middleware upload

const router = Router({ mergeParams: true });

router.post('/', RoomController.create);
router.get('/', RoomController.getAllByProperty);
router.patch('/:roomId', RoomController.update);
router.delete('/:roomId', RoomController.delete);
router.use('/:roomId/availability', roomAvailabilityRouter); 

// Tambahkan route baru ini
router.post(
    '/:roomId/gallery',
    upload.array('roomGalleryImages', 5), // Menerima hingga 5 file
    RoomController.uploadGallery
);

export default router;