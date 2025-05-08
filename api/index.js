import express from 'express';
import mongoose from 'mongoose';
import propertiesRouter from './routes/properties.route.js'
import authRouter from './routes/auth.route.js'
import adminRoutes from './routes/admin.js';
import 'dotenv/config';
import cookieParser from 'cookie-parser';



const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

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
app.use('/api/auth', adminRoutes);


