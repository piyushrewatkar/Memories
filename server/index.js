import express from "express";
import cors from "cors"; 
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import postRouter from './routes/postsRouter.js';

const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: true })); 
app.use(express.json({ limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts',postRouter); 

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, ()=> console.log('server running at port '+PORT )))
    .catch((error) => console.log(error.message));


 

    