const { Mods } = require('../constants');
const { isDevMode } = require('../utils/isDevMode.js');

require('dotenv').config({ path: './config/.env' });

const { PORT } = process.env;

module.exports = {
  MODE: isDevMode() ? Mods.DEV : Mods.PROD,
  PORT: PORT != null ? PORT : 3001,
};
