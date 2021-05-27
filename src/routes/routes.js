const BookController = require('../controllers/BookController');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: BookController.store,
  },
];

module.exports = routes;
