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

router.put('/books/:id', (req, res, next) => {
    let id = req.params.id;
    Book.findByIdAndUpdate(id, req.body)
        .then(() => {
            Book.findById(id)
                .then((book) => res.send(book));
        })
        .catch(next)
});

router.delete('/books/:id', (req, res, next) => {
    let id = req.params.id;
    Book.findByIdAndRemove(id).then((book) => {
        res.send(book);
        console.log('Removed document from db');
    })
    .catch(next);
});

module.exports = router;