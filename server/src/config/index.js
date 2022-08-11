const { Mods } = require('../constants');
const { isDevMode } = require('../utils/isDevMode.js');

require('dotenv').config({ path: './src/config/.env' });

module.exports = {
  MODE: isDevMode() ? Mods.DEV : Mods.PROD,
  PORT: process.env.PORT || 3001,
  WRITE_LOG: Boolean(process.env.WRITE_LOG) || false,
  LOGS_PATH: process.env.LOGS_PATH || '',
  ACCESS_LOG_FILE_NAME: process.env.ACCESS_LOG_FILE_NAME || 'access.log',
};
