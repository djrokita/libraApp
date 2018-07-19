const express = require('express');
const routes = require('./src/routes/api');
const bodyParser = require('body-parser');

const localPort = 4000;

const app = express();

app.use(bodyParser.json());
app.use('/api', routes);

app.listen(process.env.port || localPort, () => console.log('Server is listening'));