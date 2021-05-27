const Sequelize = require('sequelize');

const db = require('../config/database');

const { DataTypes } = Sequelize;

const Book = db.define('books', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  year: {
    type: DataTypes.INTEGER,
  },
  author: {
    type: DataTypes.STRING,
  },
  summary: {
    type: DataTypes.STRING,
  },
  publisher: {
    type: DataTypes.STRING,
  },
  pageCount: {
    type: DataTypes.INTEGER,
  },
  readPage: {
    type: DataTypes.INTEGER,
  },
  finished: {
    type: DataTypes.BOOLEAN,
  },
  reading: {
    type: DataTypes.BOOLEAN,
  },
  insertedAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
}, {
  freezeTableName: true,
});

module.exports = { Book };
