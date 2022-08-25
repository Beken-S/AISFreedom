const fs = require('fs');
const path = require('path');

fs.mkdirSync(path.resolve(__dirname, '../build/config'), { recursive: true });

fs.copyFileSync(
  path.resolve(__dirname, '../src/config/.env'),
  path.resolve(__dirname, '../build/config/.env')
);
