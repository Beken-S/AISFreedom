import { readdir, stat, rm } from 'node:fs/promises';
import path = require('path');

import { CronJob } from 'cron';

import config from '../config';

const clearTemp = new CronJob(
  '*/30 * * * *',
  async function () {
    const currentDate = Date.now();
    const maxFileLifetime = 18e5;
    const files = await readdir(config.server.temp);

    files.forEach(async (file) => {
      const filePath = path.resolve(config.server.temp, file);
      const fileStat = await stat(filePath);

      const fileLifetime = currentDate - fileStat.ctimeMs;
      if (fileLifetime > maxFileLifetime) {
        rm(filePath);
      }
    });
  },
  null
);

export default clearTemp;
