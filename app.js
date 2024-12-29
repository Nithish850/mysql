import express, { urlencoded } from 'express';
import db from './db.js';
import home from './Home.js';
import insert from './Insert.js';
import update from './Update.js';
import dlete from './Delete.js';
import dotenv from 'dotenv';
import read from './Read.js';
import deleteAll from './DeleteAll.js';
import signup from './Signup.js';
import { connectDb } from './dataBaseConnection/db.js';
import {usermodel} from './dbmodel/userdetails.js';

//database connection
export const connection = db();
const sequelize = connectDb();
//model
usermodel()

const app = express();

//dependencies
app.use(express.json())
dotenv.config();
app.use(urlencoded({ extended: false }))

//home page
app.get("/", (req, res, next) => {
    res.send("Helloworld");
})

//routing
app.use(home);
app.use(read);
app.use(insert);
app.use(update);
app.use(dlete);
app.use(deleteAll);
app.use(signup);

//sever creating
app.listen(process.env.PORT, () => {
    console.log("server runs..." + process.env.PORT);
});