const { nanoid } = require('nanoid');
const BookRepository = require('../repositories/BookRepository');

const createBook = async (payload) => {
  const currentDate = new Date();
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
    insertedAt: currentDate,
    updatedAt: currentDate,
  };
  return BookRepository.insert(newBook);
};

const readAll = async (query) => BookRepository.readAll(query);

const readById = async (bookId) => BookRepository.readById(bookId);

const update = async (payload, bookId) => {
  const book = await BookRepository.readById(bookId);
  if (book instanceof Error || !book) {
    return new Error('Gagal memperbarui buku. Id tidak ditemukan');
  }

  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = payload;
  const currentDate = new Date();
  const updateBook = {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    finished: readPage === pageCount,
    updatedAt: currentDate,
  };
  return BookRepository.update(updateBook, bookId);
};

const deleteBook = async (bookId) => BookRepository.deleteBook(bookId);

module.exports = {
  createBook, readAll, readById, update, deleteBook,
};
