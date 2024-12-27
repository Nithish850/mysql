import express from 'express';
import { connection } from './app.js';

const update = express.Router();

update.post("/update", (req, res) => {
    const { id, new_name, new_contact } = req.body;
    connection.query("update emp set name = ? , contact = ? where id = ?", [new_name, new_contact, id], (err, result) => {
        if (err) {
            console.log(err)
            res.status = 500;
            res.send("error occured....")
        }
        else if (result.affectedRows > 0) {
            res.send("data updated sucessfully");
        }
        else{
            res.send("Something went wrong in the id");
        }
    })
})

export default update;