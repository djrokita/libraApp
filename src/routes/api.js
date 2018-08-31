const express = require('express');
const router = express.Router();
const Book = require('./../models/book');

// GET handler
router.get('/books', (req, res, next) => {
    let offset = parseInt(req.query.offset);
    let limit = parseInt(req.query.limit);
    Book.find({}).skip(offset).limit(limit).then((books) => {
        Book.count().then((number) => {
            res.send({data: books, count: number})
        })
    })
    .catch(next);
});
/*
router.get('/books', (req, res, next) => {
    // let query = req.params.query
    Book.find({}).then((books) => {
        res.send(books);
    })
    .catch(next);
});
*/
router.get('/books/:id', (req, res, next) => {
    let id = req.params.id;
    Book.findById(id).then((book) => {
        res.send(book);
    })
    .catch(next);
});

router.post('/books', (req, res, next) => {
    Book.create(req.body).then((item) => {
        // res.sendStatus(200); // TODO
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