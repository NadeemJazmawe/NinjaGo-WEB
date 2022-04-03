require('dotenv').config();

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mongoose = require('mongoose');

//connect to mongoDB
mongoose.connect(process.env.DB_URL);
mongoose.Promise = global.Promise;

app.use(express.static('client'));

const routers = require('./routes/api');
app.use('/api', routers);

port = process.env.port || 3001;
app.listen(port, () => {
    console.log("now listing for request");
})