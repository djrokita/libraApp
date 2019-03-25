const express = require('express');
const routes = require('./src/routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const path = require('path');

const localPort = 80;

mongoose.connect('mongodb://db:27017/library');
mongoose.connection.once('open', () => console.log('DB is connected'))
    .on('error', (error) => console.log('Connection error:', error));

mongoose.Promise = global.Promise;

const app = express();

app.use(express.static('static'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', routes);

//Error handler
app.use((err, req, res, next) => {
    res.status(400).send({error: err.message});
})

app.listen(process.env.port || localPort, () => console.log(`Server is listening on port ${localPort}`));