const cors = require('cors');
const helmet = require('helmet');

const { mode } = require('../config');
const { Mods } = require('../constants');

function security(app) {
  if (mode === Mods.DEV) app.use(cors());

  app.use(helmet());
}

module.exports = { security };
