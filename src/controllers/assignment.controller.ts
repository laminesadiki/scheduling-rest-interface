import { Request, Response, NextFunction } from 'express';
import { IAssignment } from '../interfaces';
import { executeQuery } from '../config/mysql';
import logging from '../config/logging';

const NAMESPACE = 'assignments namespace';

export const getAllAssignments = (req: Request, res: Response, next: NextFunction) => {
    const sqlQuery = 'SELECT * FROM Assignment';
    logging.info(NAMESPACE, `Getting all assignment.`);
    executeQuery(sqlQuery, res, NAMESPACE);
};

export const assignEmployeeToTimeslot = async (req: Request, res: Response, next: NextFunction) => {
    const newAssignment: IAssignment = req.body;
    const sqlQuery = `
        INSERT INTO 
        Assignment (employee_id, timeslot_id) 
        VALUES("${newAssignment.employeeId}","${newAssignment.timeslotId}") `;

    logging.info(NAMESPACE, 'Assign an employee to a timeslot.');
    executeQuery(sqlQuery, res, NAMESPACE);
};
