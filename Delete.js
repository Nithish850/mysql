import express from 'express';
import { connection } from './app.js';

const dlete = express.Router();

dlete.post("/delete",(req,res)=>{
    const {id} = req.body;
    connection.query("delete from emp where id  = ?",[id],(err,result)=>{
        if(err){
            res.status = 500;
            res.send("error occured");
            res.end();
        }
        if(result.affectedRows>0){
            res.send("data deleted successfully");
        }
        else{
            res.send("no row deleted.....")
        }
    })
})

export default dlete;