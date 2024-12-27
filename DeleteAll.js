import express from 'express';
import { connection } from './app.js';

const deleteAll = express.Router();

deleteAll.post("/deleteAll", (req, res) => {
    connection.query("delete from emp;", (err, result) => {
        if (err) {
            res.status = 500;
            res.send("error occured.....");
        }
        else if (result.affectedRows > 0) {
            res.send("all recoreds removed form the table");
        }
        else {
            res.send("recoreds are already removed......");
        }
    })
})

export default deleteAll;