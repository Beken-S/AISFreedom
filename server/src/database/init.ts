import fs = require('fs/promises');
import path = require('path');

import { Sequelize } from 'sequelize-typescript';

import config from '../config';

async function initDatabase(db: Sequelize): Promise<void> {
  await db.sync({ alter: config.server.isDevelopmentMode });
}

export default initDatabase;
