import dotenv from 'dotenv';
dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || 4000;
const MYSQL_PORT = process.env.MYSQL_PORT || 3306;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';

const MYSQL_HOST = process.env.MYSQL_HOST || 'localhost';
const MYSQL_DATABASE = process.env.MYSQL_DATABASE;
const MYSQL_USER = process.env.MYSQL_USER || 'root';
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;

console.log({ MYSQL_PASSWORD, SERVER_PORT });

export const MYSQL = {
    host: MYSQL_HOST,
    database: MYSQL_DATABASE,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD
    // port: MYSQL_PORT
};

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    server: SERVER,
    mysql: MYSQL
};

export default config;
