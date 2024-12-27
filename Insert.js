import express from 'express';
import { connection } from './app.js';

const insert = express.Router();

insert.post("/insert", (req, res) => {
    
    const { id, name, contact } = req.body;
    connection.query("insert into emp values(?,?,?)", [id, name, contact], (err, result) => {
        if (err) {
            res.status(500);
            res.send("error occured...")
            res.end();
        }
        res.send("Data Inserted succesfully");
    })
    
})

export default insert;