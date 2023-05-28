import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config()

const {
    PROSTGRES_HOST,
    PROSTGRES_DB,
    PROSTGRES_PASSWORD,
    PROSTGRES_USER,
} = process.env

const Client = new Pool({
    host: PROSTGRES_HOST,
    database: PROSTGRES_DB,
    user: PROSTGRES_USER,
    password: PROSTGRES_PASSWORD
})

export default Client