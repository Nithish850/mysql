import express from 'express';
import { userdetails } from './dbmodel/userdetails.js';

const signup = express.Router();

signup.post("/signUp",async (req,res)=>{
    const {username , password} = req.body;
    await userdetails.create({username : username , password: password})
    res.send("sign up sucessfull");
})

export default signup;