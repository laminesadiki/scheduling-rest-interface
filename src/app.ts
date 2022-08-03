import http from 'http';
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import logging from './config/logging';
import config from './config/config';
import { accessControlMiddleware, loggingMiddleware, errorHanlingMiddleware } from './middlewares';
import { employeeRouter, timeslotRouter, assignmentRouter } from './routes';

const NAMESPACE = 'Server';
const app: Application = express();

/***** Middlewares */

/** Parse the request */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/** Logging the request */
app.use(loggingMiddleware);
/** Rules of Our API */
app.use(accessControlMiddleware);
/** Error Handling */
// app.use(errorHanlingMiddleware);

/***** Create the server *****/

app.listen(config.server.port, () => {
    logging.info(NAMESPACE, `Server running on ${config.server.hostname}:${config.server.port}`);
});

/***** Routes *****/
app.use('/api/employees', employeeRouter);
app.use('/api/timeslots', timeslotRouter);
app.use('/api/assignments', assignmentRouter);

export default app;
