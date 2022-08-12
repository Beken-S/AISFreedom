async function ping(request, response, next) {
  try {
    return response.send('pong');
  } catch (error) {
    next(error);
  }
}

module.exports = {
  ping,
};
