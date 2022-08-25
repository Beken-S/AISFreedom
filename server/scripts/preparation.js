const fs = require('fs');
const path = require('path');

const configDir = path.resolve(__dirname, '../build/config');
const logsDir = path.resolve(__dirname, '../logs');
const secretsDir = path.resolve(__dirname, '../secrets');

const isConfigDir = fs.existsSync(configDir);
const isLogsDir = fs.existsSync(logsDir);
const isSecretsDir = fs.existsSync(secretsDir);

if (!isConfigDir) {
  fs.mkdirSync(configDir, { recursive: true });
}

if (!isLogsDir) {
  fs.mkdirSync(logsDir, { recursive: true });
}

if (!isSecretsDir) {
  fs.mkdirSync(secretsDir, { recursive: true });
}

fs.copyFileSync(
  path.resolve(__dirname, '../src/config/.env'),
  path.resolve(__dirname, '../build/config/.env')
);
