const { Mods } = require('../constants');
const { isDevMode } = require('../utils/isDevMode.js');

require('dotenv').config({ path: './src/config/.env' });

module.exports = {
  MODE: isDevMode() ? Mods.DEV : Mods.PROD,
  PORT: process.env.PORT || 3001,
};
