const Book = require('../models/Book');

const insert = async (data) => {
  let book;
  try {
    book = await Book.create(data);
  } catch (error) {
    return new Error('Buku gagal ditambahkan');
  }

  return book;
};

module.exports = { insert };
