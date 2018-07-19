const express = require('express');
const router = express.Router();
const Book = require('./../models/book');

router.get('/books', (req, res) => {
    res.send({ type: 'GET'});
});

router.post('/books', (req, res) => {
    Book.create(req.body).then((item) => {
        res.send(item);
        console.log('Saved document into db');
    })
});

router.put('/books:id', (req, res) => {
    res.send({ type: 'PUT'});
});

router.delete('/books:id', (req, res) => {
    res.send({ type: 'DELETE'});
});

module.exports = router;