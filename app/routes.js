const {
    postBookNew,
    showBookAll,
    getBookId,
    editBookId,
    deleteBookId,
    } = require('./handler');
    
  const routes = [
    {
      method: 'POST',
      path: '/books',
      handler: postBookNew,
    },
    {
      method: 'GET',
      path: '/books',
      handler: showBookAll,
    },
    {
      method: 'GET',
      path: '/books/{id}',
      handler: getBookId,
    },
    {
      method: 'PUT',
      path: '/books/{id}',
      handler: editBookId,
    },
    {
      method: 'DELETE',
      path: '/books/{id}',
      handler: deleteBookId,
    },
  ];
  
  module.exports = routes;