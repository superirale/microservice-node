import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import multer from 'multer';
import {} from 'dotenv/config'
import router from './router';


//add multer for multipart/form-data
const upload = multer();
mongoose.connect(process.env.MONGO_URL);
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));

const app = express();
//don't show the log when it is test
if(process.env.NODE_ENV !== 'test') {
    //use morgan to log at command line
    app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(upload.array());
app.use('/api', router);


app.listen(process.env.APP_PORT);

export default app; // for testing