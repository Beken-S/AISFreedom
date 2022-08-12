const fs = require('fs');
const path = require('path');

const { logs } = require('../config');
const { errorLogger } = require('../utils/errorLogger');

function logErrors(toFile = false) {
  const stream = toFile
    ? fs.createWriteStream(
        path.resolve(process.cwd(), logs.path, logs.errorsLogFileName),
        { flags: 'a' }
      )
    : null;
  return errorLogger(stream);
}

module.exports = { logErrors };
