import cors = require('cors');
import { Express } from 'express';
import helmet = require('helmet');

import { config, Mods } from '../config';

function security(app: Express): void {
  if (config.server.mode === Mods.Dev) app.use(cors());

  app.use(cors());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.default());
}

export { security };
