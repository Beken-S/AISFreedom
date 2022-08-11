const dotenv = require('dotenv');

const { Mods } = require('../constants');
const { isDevMode } = require('../utils/isDevMode.js');

dotenv.config({ path: './src/config/.env' });
dotenv.config({ path: './src/secrets/db.env' });

module.exports = {
  mode: isDevMode() ? Mods.DEV : Mods.PROD,
  port: process.env.PORT || 3001,
  isWriteLogs: Boolean(process.env.WRITE_LOG) || false,
  logsPath: process.env.LOGS_PATH || '',
  accessLogFileName: process.env.ACCESS_LOG_FILE_NAME || 'access.log',
  dbConfig: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
  },
};
