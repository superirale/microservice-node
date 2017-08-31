"use strict";
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const multer = require('multer');
const dotenv = require('dotenv').config();
let router = require('./router');



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

// export default app; // for testing