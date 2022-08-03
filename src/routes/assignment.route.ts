import * as assignmentController from '../controllers/assignment.controller';
import { Router } from 'express';

const assignmentRouter = Router();

assignmentRouter.get('/read/', assignmentController.getAllAssignments);
assignmentRouter.post('/assign/', assignmentController.assignEmployeeToTimeslot);

export default assignmentRouter;
