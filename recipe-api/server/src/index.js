import express from "express";
import cors from 'cors' ;
import mongoose from 'mongoose';

import {userRouter } from './routes/users.js'
const app= express();

app.use(express.json());
app.use(cors());

app.use("/auth",userRouter);

mongoose.connect("mongodb+srv://rithanyas22cse:7k0QQoUp1IuAweHG@cluster0.zruylww.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0");
app.listen(3001,()=>{
    console.log(`Listening at http://localhost:3001`);
});
