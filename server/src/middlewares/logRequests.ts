import fs = require('fs');
import path = require('path');

import { Response, Request, Handler } from 'express';
import morgan = require('morgan');

import { config } from '../config';

function logRequests(toFile = false): Handler {
  const formatString =
    ':method - :status - :url - :response-time ms - :date[iso]';
  const morganOptions: morgan.Options<Request, Response> = {
    stream: toFile
      ? fs.createWriteStream(
          path.resolve(
            process.cwd(),
            config.logs.path,
            config.logs.fileName.requests
          ),
          { flags: 'a' }
        )
      : undefined,
  };

  return morgan(formatString, morganOptions);
}

export { logRequests };
