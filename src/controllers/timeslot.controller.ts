import { Request, Response, NextFunction } from 'express';
import { ITimeslot } from '../interfaces';
import { executeQuery } from '../config/mysql';
import logging from '../config/logging';

const NAMESPACE = 'timeslots namespace';

export const getAllTimeslots = (req: Request, res: Response, next: NextFunction) => {
    const sqlQuery = 'SELECT * FROM Timeslot';
    logging.info(NAMESPACE, `Getting all timeslots.`);
    executeQuery(sqlQuery, res, NAMESPACE);
};

export const createTimeslot = async (req: Request, res: Response, next: NextFunction) => {
    const newTimeslot: ITimeslot = req.body;
    const sqlQuery = `
        INSERT INTO 
        Timeslot (duration) 
        VALUES("${newTimeslot.duration}") `;

    logging.info(NAMESPACE, 'Create a timeslot');
    executeQuery(sqlQuery, res, NAMESPACE);
};

export const getTimeslot = (req: Request, res: Response, next: NextFunction) => {
    const timeslotId: number = +req.params.id; // convert string to number
    const sqlQuery = `SELECT * FROM Timeslot Where id=${timeslotId}`;
    logging.info(NAMESPACE, 'get a timeslot by id');
    executeQuery(sqlQuery, res, NAMESPACE);
};

export const updateTimeslot = (req: Request, res: Response, next: NextFunction) => {
    const updatedTimeslot: ITimeslot = req.body;
    const timeslotId: number = +req.params.id;
    const sqlQuery = `
        UPDATE Timeslot
        SET duration="${updatedTimeslot.duration}"
        WHERE id=${timeslotId}
    `;
    logging.info(NAMESPACE, 'Update a timeslot');
    executeQuery(sqlQuery, res, NAMESPACE);
};

export const deleteTimeslot = (req: Request, res: Response, next: NextFunction) => {
    const timeslotId: number = +req.params.id;
    const sqlQuery = `DELETE FROM Timeslot WHERE id=${timeslotId}`;
    logging.info(NAMESPACE, 'Delete a timeslot');
    executeQuery(sqlQuery, res, NAMESPACE);
};
