import minimist = require('minimist');

import { Mods } from '../config';

function isDevMode(): boolean {
  const argv = minimist(process.argv.slice(2));
  return argv._.includes(Mods.Dev);
}

export default isDevMode;
