const fs = require('fs');
const path = require('path');

const morgan = require('morgan');

const { logsPath, accessLogFileName } = require('../config');

function logRequests(toFile = false) {
  const stream = toFile
    ? fs.createWriteStream(
        path.resolve(process.cwd(), logsPath, accessLogFileName),
        { flags: 'a' }
      )
    : null;

  return morgan(':method - :status - :url - :response-time ms - :date[iso]', {
    stream,
  });
}

module.exports = { logRequests };
