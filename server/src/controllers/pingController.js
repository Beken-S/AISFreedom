function pingController(request, response) {
  return response.send('pong');
}

module.exports = {
  pingController,
};
