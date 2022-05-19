const express =require('express');
const errorHandler = require('./middleware/errorMiddleware');
const colors=require('colors');
const connectDb = require('./config/db');

require('dotenv').config()
const PORT=process.env.PORT||8000;
connectDb();
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/api/goals',require('./routes/goalRoutes'))
app.use('/api/users',require('./routes/userRoutes'))
app.use(errorHandler)//overrides default error error handler
app.listen(PORT,()=>console.log(`Server Started At PORT ${PORT}`));