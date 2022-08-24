import fs = require('fs');
import path = require('path');

import { Express } from 'express';

import config from '../config';
import { errorLogger } from '../utils';

function logErrors(app: Express): void {
  if (config.server.logs.write) {
    const stream = fs.createWriteStream(
      path.resolve(
        process.cwd(),
        config.server.logs.path,
        config.server.logs.fileName.errors
      ),
      { flags: 'a' }
    );

    app.use(errorLogger(stream));
  }

  app.use(errorLogger());
}

export default logErrors;
