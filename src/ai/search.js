const socket = require('../socket/server');

module.exports = (parameters) => {
  socket.emit('recipe-event', { action: "SEARCH_RECIPE", searchTerm: parameters.searchTerm });
};