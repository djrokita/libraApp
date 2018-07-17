const express = require('express');

const app = express();

const localPort = 4000;

app.get('/', function(req, res) {
    console.log('Paszoł GET request');
    res.send({name: "Kasia", type: "GET"});
});

app.listen(process.env.port || localPort, () => console.log('Server is listening'));