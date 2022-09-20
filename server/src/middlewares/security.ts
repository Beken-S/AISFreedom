import cors = require('cors');
import { Express } from 'express';
import helmet = require('helmet');

import config, { Mods } from '../config';

function security(app: Express): void {
  app.use(
    cors({
      origin: config.server.url,
      credentials: true,
    })
  );
  app.use(helmet.hidePoweredBy());
  app.use(helmet.default());
}

export default security;
