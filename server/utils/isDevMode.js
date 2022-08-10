const { Mods } = require('../constants');

function isDevMode() {
  const argv = require('minimist')(process.argv.slice(2));
  return argv._.includes(Mods.DEV);
}

module.exports = {
  isDevMode,
};
