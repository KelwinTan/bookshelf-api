const { nanoid } = require('nanoid');
const BookRepository = require('../repositories/BookRepository');

const handleInsert = async (payload) => {
  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = payload;
  const newBook = {
    id: nanoid(16),
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    finished: readPage === pageCount,
  };
  return BookRepository.insert(newBook);
};

module.exports = { handleInsert };
