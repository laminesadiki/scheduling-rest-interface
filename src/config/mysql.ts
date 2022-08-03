import mysql from 'mysql';
import config from './config';
import { Request, Response } from 'express';
import logging from './logging';

const params = {
    host: config.mysql.host,
    user: config.mysql.user,
    database: config.mysql.database,
    password: config.mysql.password
};

export const Connect = async () =>
    new Promise<mysql.Connection>((resolve, reject) => {
        const connection = mysql.createConnection(params);

        connection.connect((error) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(connection);
        });
    });

export const Query = async (connection: mysql.Connection, query: string) =>
    new Promise((resolve, reject) => {
        connection.query(query, connection, (error, result) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(result);
        });
    });

export const executeQuery = (query: string, res: Response, namespace: string) => {
    Connect()
        .then((connecion) => {
            Query(connecion, query)
                .then((results) => {
                    return res.status(200).json({
                        results
                    });
                })
                .catch((error) => {
                    logging.error(namespace, error.message, error);
                    return res.status(500).json({
                        message: error.message,
                        error
                    });
                })
                .finally(() => {
                    connecion.end();
                });
        })
        .catch((error) => {
            logging.error(namespace, error.message, error);
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};
