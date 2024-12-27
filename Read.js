import express from 'express';
import { connection } from './app.js';

const read = express.Router();

read.get("/read",(req,res,next)=>{
    connection.query("Select * from emp;",(error,data)=>{
        if(error!=null){
            console.log(error);
        }
        res.send(data);
    })
})

export default read;