import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';
const NAMESPACE = 'Server';

const errorHanlingMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const error = new Error('not found');
    res.on('error', () => {
        logging.error(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
        return res.status(404).json({
            message: error.message
        });
    });

    next();
};

export default errorHanlingMiddleware;
