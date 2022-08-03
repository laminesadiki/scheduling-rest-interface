import * as timeslotController from '../controllers/timeslot.controller';
import { Router } from 'express';

const timeslotRouter = Router();

timeslotRouter.get('/read/', timeslotController.getAllTimeslots);
timeslotRouter.get('/read/:id', timeslotController.getTimeslot);
timeslotRouter.post('/create/', timeslotController.createTimeslot);
timeslotRouter.put('/update/:id', timeslotController.updateTimeslot);
timeslotRouter.delete('/delete/:id', timeslotController.deleteTimeslot);

export default timeslotRouter;
