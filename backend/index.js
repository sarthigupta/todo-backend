import express from 'express'
// import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './db/db.js';
import userRouter from './routes/user.routes.js';
import todoRouter from './routes/todo.routes.js';
dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 3000;

// app.use(cors());
app.use(express.json());

app.use('/',userRouter);
app.use('/todos',todoRouter);

app.listen(port,()=>{
    console.log(`server running at ${port}`);
    
})