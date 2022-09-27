import fs = require('fs');
import path = require('path');

import { Response, Request, Express } from 'express';
import morgan = require('morgan');

import config from '../config';

function logRequests(app: Express): void {
  const formatString =
    ':method - :status - :url - :response-time ms - :date[iso]';

  if (config.server.logs.write) {
    const morganOptions: morgan.Options<Request, Response> = {
      stream: fs.createWriteStream(
        path.resolve(
          process.cwd(),
          config.server.logs.path,
          config.server.logs.fileName.requests
        ),
        { flags: 'a' }
      ),
    };

    app.use(morgan(formatString, morganOptions));
  }
  app.use(morgan(formatString));
}

export default logRequests;
