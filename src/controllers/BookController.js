const BookHandler = require('../handlers/BookHandler');

const store = async (request, h) => {
  const newBook = await BookHandler.handleInsert(request.payload);
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

module.exports = { store };
