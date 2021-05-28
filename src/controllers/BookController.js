const BookService = require('../services/BookService');
const BookValidator = require('../validators/BookValidator');

const create = async (request, h) => {
  if (!BookValidator.requireKey(request.payload, 'name')) {
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    }).code(400);
  }

  if (!BookValidator.validatePage(request.payload)) {
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    }).code(400);
  }

  const newBook = await BookService.createBook(request.payload);
  if (newBook instanceof Error) {
    return h.response({
      status: 'error',
      message: newBook.message,
    }).code(500);
  }

  return h.response({
    status: 'success',
    message: 'Buku berhasil ditambahkan',
    data: {
      bookId: newBook.id,
    },
  }).code(201);
};

const readAll = async (request, h) => {
  const books = await BookService.readAll(request.query);
  if (books instanceof Error) {
    return h.response({
      status: 'error',
      message: books.message,
    }).code(500);
  }

  return h.response({
    status: 'success',
    data: {
      books,
    },
  }).code(200);
};

const readById = async (request, h) => {
  const book = await BookService.readById(request.params.bookId);
  if (book instanceof Error) {
    return h.response({
      status: 'fail',
      message: book.message,
    }).code(404);
  }

  if (!book) {
    return h.response({
      status: 'fail',
      message: 'Buku tidak ditemukan',
    }).code(404);
  }

  return h.response({
    status: 'success',
    data: {
      book,
    },
  }).code(200);
};

const update = async (request, h) => {
  if (!BookValidator.requireKey(request.payload, 'name')) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    }).code(400);
  }

  if (!BookValidator.validatePage(request.payload)) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    }).code(400);
  }
  const updatedBook = await BookService.update(request.payload, request.params.bookId);
  if (updatedBook instanceof Error) {
    return h.response({
      status: 'fail',
      message: updatedBook.message,
    }).code(404);
  }
  if (!updatedBook) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    }).code(404);
  }
  return h.response({
    status: 'success',
    message: 'Buku berhasil diperbarui',
  }).code(200);
};

const deleteBook = async (request, h) => {
  const deletedBook = await BookService.deleteBook(request.params.bookId);
  if (deletedBook instanceof Error) {
    return h.response({
      status: 'fail',
      message: deletedBook.message,
    }).code(404);
  }
  if (!deletedBook) {
    return h.response({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan',
    }).code(404);
  }
  return h.response({
    status: 'success',
    message: 'Buku berhasil dihapus',
  }).code(200);
};

module.exports = {
  create, readAll, readById, update, deleteBook,
};
