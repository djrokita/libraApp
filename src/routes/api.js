const express = require('express');
const router = express.Router();
const Book = require('./../models/book');

router.get('/books', (req, res, next) => {
    res.send({ type: 'GET'});
});

router.post('/books', (req, res, next) => {
    Book.create(req.body).then((item) => {
        res.send(item);
        console.log('Saved document into db');
    })
    .catch(next);
});

router.put('/books:id', (req, res, next) => {
    res.send({ type: 'PUT'});
});

router.delete('/books:id', (req, res, next) => {
    res.send({ type: 'DELETE'});
});

module.exports = router;