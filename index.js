const express = require('express');
const routes = require('./src/routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const localPort = 4000;

mongoose.connect('mongodb://localhost/library');
mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.json());
app.use('/api', routes);

app.listen(process.env.port || localPort, () => console.log('Server is listening'));