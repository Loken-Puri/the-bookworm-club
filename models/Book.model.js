const { Schema, model } = require("mongoose");
const User = require('./User.model')

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  bookCover: {
    type: String,
  },
  plot: {
    type: String,
    required: true,
  },
  isbn: {
    type: Number,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId, ref: 'User'
  }
});

const Book = model("Book", bookSchema);

module.exports = Book;