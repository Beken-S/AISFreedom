const dotenv = require('dotenv');

const { Mods } = require('../constants');
const { isDevMode } = require('../utils/isDevMode.js');

dotenv.config({ path: './src/config/.env' });
dotenv.config({ path: './src/secrets/db.env' });

module.exports = {
  mode: isDevMode() ? Mods.DEV : Mods.PROD,
  port: process.env.PORT || 3001,
  logs: {
    write: Boolean(process.env.WRITE_LOG) || false,
    path: process.env.LOGS_PATH || '',
    requestsLogFileName: process.env.REQUESTS_LOG_FILE_NAME || 'access.log',
    errorsLogFileName: process.env.ERRORS_LOG_FILE_NAME || 'errors.log',
  },
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
  },
};
