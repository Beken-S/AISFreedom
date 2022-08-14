import fs = require('fs');
import path = require('path');

import { ErrorRequestHandler } from 'express';

import { config } from '../config';
import { errorLogger } from '../utils/errorLogger';

function logErrors(toFile = false): ErrorRequestHandler {
  const stream = toFile
    ? fs.createWriteStream(
        path.resolve(
          process.cwd(),
          config.logs.path,
          config.logs.fileName.errors
        ),
        { flags: 'a' }
      )
    : null;
  return errorLogger(stream);
}

export { logErrors };
