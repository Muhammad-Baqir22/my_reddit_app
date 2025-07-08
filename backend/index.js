//const express = require('express');
//require('dotenv').config();
import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();

// app.use(cors({
//     origin: 'http://localhost:3000',
//     credentials: true
// }));


app.get('/',(req,res)=>{
    res.send("Reddit App")
})
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Surver is running on port: ${PORT}`);
})