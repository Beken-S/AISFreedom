function addConnection(connection) {
  return async (request, response, next) => {
    request.connection = connection;
    next();
  };
}

module.exports = {
  addConnection,
};
