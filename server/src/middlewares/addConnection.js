function addConnection(connection) {
  return (request, response, next) => {
    request.connection = connection;
    next();
  };
}

module.exports = {
  addConnection,
};
