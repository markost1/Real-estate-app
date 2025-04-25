import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDB');
    
}).catch((err)=>{
    console.log(err);
    
})

app.listen(3000,()=>{
    console.log('server je aktivan na portu 3000!');
    
})

