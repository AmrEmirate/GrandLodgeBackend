import { Router } from 'express';
import { RoomAvailabilityController } from '../controllers/roomAvailability.controller';

const router = Router({ mergeParams: true });

router.post('/', RoomAvailabilityController.update);

export default router;