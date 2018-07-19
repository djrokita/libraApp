const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    author: String,
    read: {
        type: Boolean,
        default: true
    },
    isbn: Number
});

const Book = mongoose.model('book', BookSchema);

module.exports = Book;