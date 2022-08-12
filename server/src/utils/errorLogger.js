function errorLogger(stream = null) {
  return async (error, request, response, next) => {
    const errorTime = new Date().toISOString();

    if (stream != null) stream.write(`${errorTime} - ${error.stack}\n`);
    else console.error(`${errorTime} -`, error);

    next(error);
  };
}

module.exports = { errorLogger };
