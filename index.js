const express=require('express');
const app=express();
const Port=8000;
const {connectMongo}=require('./connection');
const userRouter=require('./router/user');

connectMongo("mongodb://127.0.0.1:27017/prac_s")
    .then(()=>console.log("connected"));

app.use(express.json());

app.use('/user',userRouter);

app.listen(Port,()=>console.log(`connected on ${Port}`));
