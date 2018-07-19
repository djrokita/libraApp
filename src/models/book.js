const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    author: String,
    isbn: String,
    rate: Number,
    readInfo: {
        dateStart: Date,
        dateEnd: {
            type: Date,
            required: true
        },
        readingTime: Number
    },
    uploadDate: {
        type: Date,
        default: Date.now
    }
});

const Book = mongoose.model('book', BookSchema);

module.exports = Book;