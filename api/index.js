import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

import propertiesRouter from './routes/properties.route.js'
import authRouter from './routes/auth.route.js'




const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDB');
    
}).catch((err)=>{
    console.log(err);
    
})

app.listen(3000,()=>{
    console.log('server je aktivan na portu 3000!');
    
})

app.use('/api/properties', propertiesRouter);
app.use('/api/auth', authRouter);

