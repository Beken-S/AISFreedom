const fs = require('fs');
const path = require('path');

const morgan = require('morgan');

const { LOGS_PATH, ACCESS_LOG_FILE_NAME } = require('../config');

function requestsLogs(toFile = false) {
  const stream = toFile
    ? fs.createWriteStream(
        path.resolve(process.cwd(), LOGS_PATH, ACCESS_LOG_FILE_NAME),
        { flags: 'a' }
      )
    : null;

  return morgan(':method - :status - :url - :response-time ms - :date[iso]', {
    stream,
  });
}

module.exports = { requestsLogs };
