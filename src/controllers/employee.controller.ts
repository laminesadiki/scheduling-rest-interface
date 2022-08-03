import { Request, Response, NextFunction } from 'express';
import { IEmployee } from '../interfaces';
import { executeQuery } from '../config/mysql';
import logging from '../config/logging';

const NAMESPACE = 'employees namespace';

export const getAllEmployees = (req: Request, res: Response, next: NextFunction) => {
    const sqlQuery = 'SELECT * FROM Employee';
    logging.info(NAMESPACE, `Getting all employees.`);
    executeQuery(sqlQuery, res, NAMESPACE);
};

export const createEmployee = async (req: Request, res: Response, next: NextFunction) => {
    const newEmployee: IEmployee = req.body;
    const sqlQuery = `
        INSERT INTO 
        Employee(name, email, password) 
        VALUES("${newEmployee.name}", "${newEmployee.email}", "${newEmployee.password}") `;

    logging.info(NAMESPACE, 'Create an employee.');
    executeQuery(sqlQuery, res, NAMESPACE);
};

export const getEmployee = (req: Request, res: Response, next: NextFunction) => {
    const employeeId: number = +req.params.id; // convert string to number
    const sqlQuery = `SELECT * FROM Employee Where id=${employeeId}`;
    logging.info(NAMESPACE, 'get an employee by id');
    executeQuery(sqlQuery, res, NAMESPACE);
};

export const updateEmployee = (req: Request, res: Response, next: NextFunction) => {
    const updatedEmployee: IEmployee = req.body;
    const employeeId: number = +req.params.id;
    const sqlQuery = `
        UPDATE Employee
        SET name="${updatedEmployee.name}", email="${updatedEmployee.email}", password="${updatedEmployee.password}"
        WHERE id=${employeeId}
    `;
    logging.info(NAMESPACE, 'Update an employee');
    executeQuery(sqlQuery, res, NAMESPACE);
};

export const deleteEmployee = (req: Request, res: Response, next: NextFunction) => {
    const employeeId: number = +req.params.id;
    const sqlQuery = `DELETE FROM Employee WHERE id=${employeeId}`;
    logging.info(NAMESPACE, 'Delete an employee');
    executeQuery(sqlQuery, res, NAMESPACE);
};
