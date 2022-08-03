import * as employeeControllers from '../controllers/employee.controller';
import { Router } from 'express';

const employeeRouter = Router();

employeeRouter.get('/read/', employeeControllers.getAllEmployees);
employeeRouter.get('/read/:id', employeeControllers.getEmployee);
employeeRouter.post('/create/', employeeControllers.createEmployee);
employeeRouter.put('/update/:id', employeeControllers.updateEmployee);
employeeRouter.delete('/delete/:id', employeeControllers.deleteEmployee);

export default employeeRouter;
