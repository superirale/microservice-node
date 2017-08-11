import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import multer from 'multer';
import {} from 'dotenv/config'
import router from './router';

//add multer for multipart/form-data
const upload = multer();
const db = mongoose.connect(process.env.MONGO_URL);
const app = express();

// Logger that outputs all requests into the console
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(upload.array());
app.use('/api', router);


app.listen(process.env.APP_PORT);