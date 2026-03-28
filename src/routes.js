const express = require('express');
const {
  addBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
} = require('./bookHandlers');

const router = express.Router();

router.post('/books', addBook);
router.get('/books', getAllBooks);
router.get('/books/:bookId', getBookById);
router.put('/books/:bookId', updateBookById);
router.delete('/books/:bookId', deleteBookById);

module.exports = router;
