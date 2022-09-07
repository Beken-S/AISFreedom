const path = require('path');

const src = path.resolve(__dirname, './src');

module.exports = {
  root: true,
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['import'],
  rules: {
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
      alias: {
        map: [
          ['@src', src],
          ['@components', src + '/components'],
          ['@ui', src + '/components/UI'],
          ['@containers', src + '/containers'],
          ['@constants', src + '/constants'],
          ['@services', src + '/services'],
          ['@utils', src + '/utils'],
          ['@static', src + '/static'],
          ['@styles', src + '/styles'],
          ['@routes', src + '/routes'],
          ['@hooks', src + '/hooks'],
          ['@store', src + '/store'],
          ['@context', src + '/context'],
          ['@assets', src + '/assets'],
          ['@scss', src + '/scss'],
          ['@pages', src + '/pages'],
          ['@modules', src + '/modules'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
