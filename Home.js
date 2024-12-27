import express from 'express';

const home = express.Router();

home.get("/home",(req,res)=>{
    res.send("home");
})

export default home;