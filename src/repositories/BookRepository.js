const Sequelize = require('sequelize');
const db = require('../models/index');

const { Op } = Sequelize;

const insert = async (data) => {
  let book;
  try {
    book = await db.Book.create(data);
  } catch (error) {
    return new Error('Buku gagal ditambahkan');
  }

  return book;
};

const readAll = async (query) => {
  const { name, reading, finished } = query;
  const filters = {};
  if (name) {
    filters.name = {
      [Op.like]: `%${query.name}%`,
    };
  }
  if (reading) {
    filters.reading = {
      [Op.is]: reading === '1',
    };
  }
  if (finished) {
    filters.finished = {
      [Op.is]: finished === '1',
    };
  }
  const books = await db.Book.findAll({
    attributes: ['id', 'name', 'publisher'],
    where: filters,
  });
  return books;
};

const readById = async (bookId) => {
  let book;
  try {
    book = await db.Book.findOne({
      where: {
        id: bookId,
      },
    });
  } catch (error) {
    return new Error('Buku gagal ditemukan');
  }
  return book;
};

const update = async (updateData, bookId) => {
  let updateBook;
  try {
    updateBook = await db.Book.update(updateData, {
      where: {
        id: bookId,
      },
    });
  } catch (error) {
    return new Error('Gagal memperbarui buku. Id tidak ditemukan');
  }
  return updateBook;
};

const deleteBook = async (bookId) => {
  let deletedBook;
  try {
    deletedBook = await db.Book.destroy({
      where: {
        id: bookId,
      },
    });
  } catch (error) {
    return new Error('Buku gagal dihapus. Id tidak ditemukan');
  }
  return deletedBook;
};

module.exports = {
  insert, readAll, readById, update, deleteBook,
};
