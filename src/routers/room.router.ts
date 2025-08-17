import { Router } from 'express';
import { RoomController } from '../controllers/room.controller';
import roomAvailabilityRouter from './roomAvailability.router';

const router = Router({ mergeParams: true });

router.post('/', RoomController.create);
router.get('/', RoomController.getAllByProperty);
router.patch('/:roomId', RoomController.update);
router.delete('/:roomId', RoomController.delete);

router.use('/:roomId/availability', roomAvailabilityRouter);

export default router;