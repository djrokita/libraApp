const express = require('express');
const router = express.Router();

router.get('/books', (req, res) => {
    res.send({ type: 'GET'});
});

router.post('/books', (req, res) => {
    console.log('req-body', req.body);
    res.send({
        type: 'POST',
        body: req.body
    });
});

router.put('/books:id', (req, res) => {
    res.send({ type: 'PUT'});
});

router.delete('/books:id', (req, res) => {
    res.send({ type: 'DELETE'});
});

module.exports = router;