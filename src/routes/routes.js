const BookController = require('../controllers/BookController');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: BookController.create,
  },
  {
    method: 'GET',
    path: '/books',
    handler: BookController.readAll,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: BookController.readById,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: BookController.update,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: BookController.deleteBook,
  },
];

module.exports = routes;
