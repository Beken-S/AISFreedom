const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  alias({
    '@src': 'src/',
    '@components': 'src/components',
    '@ui': 'src/components/UI',
    '@containers': 'src/containers',
    '@constants': 'src/constants',
    '@services': 'src/services',
    '@utils': 'src/utils',
    '@static': 'src/static',
    '@styles': 'src/styles',
    '@routes': 'src/routes',
    '@hooks': 'src/hooks',
    '@store': 'src/store',
    '@context': 'src/context',
    '@assets': 'src/assets',
    '@scss': 'src/scss',
    '@pages': 'src/pages',
    '@modules': 'src/modules',
  })(config);

  return config;
};
