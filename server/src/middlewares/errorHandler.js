// eslint-disable-next-line no-unused-vars
async function errorHandler(error, request, response, next) {
  response.status(error.status || 500).send({
    status: 'error',
    message: error.message,
  });
}

module.exports = { errorHandler };
