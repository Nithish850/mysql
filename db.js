import mysql from 'mysql2';
import dotenv from 'dotenv'

dotenv.config();

const db = () => {
    const connection = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER_NAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
    })

    connection.connect((err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("database connected successfully.....");
        }
    })

    return connection;
}

export default db;