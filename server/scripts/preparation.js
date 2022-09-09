const fs = require('fs');
const path = require('path');

const configDir = path.resolve(__dirname, '../build/config');
const logsDir = path.resolve(__dirname, '../logs');
const secretsDir = path.resolve(__dirname, '../secrets');
const dbImagesDir = path.resolve(__dirname, '../db/images');
const dbLogosDir = path.resolve(__dirname, '../db/logos');
const dbTempDir = path.resolve(__dirname, '../db/temp');
const dbFilesDir = path.resolve(__dirname, '../db/files');

const isConfigDir = fs.existsSync(configDir);
const isLogsDir = fs.existsSync(logsDir);
const isSecretsDir = fs.existsSync(secretsDir);
const isDbImagesDir = fs.existsSync(dbImagesDir);
const isDbLogosDir = fs.existsSync(dbLogosDir);
const isDbTempDir = fs.existsSync(dbTempDir);
const isDbFilesDir = fs.existsSync(dbFilesDir);

if (!isConfigDir) {
  fs.mkdirSync(configDir, { recursive: true });
}

if (!isLogsDir) {
  fs.mkdirSync(logsDir, { recursive: true });
}

if (!isSecretsDir) {
  fs.mkdirSync(secretsDir, { recursive: true });
}

if (!isDbImagesDir) {
  fs.mkdirSync(dbImagesDir, { recursive: true });
}

if (!isDbLogosDir) {
  fs.mkdirSync(dbLogosDir, { recursive: true });
}

if (!isDbTempDir) {
  fs.mkdirSync(dbTempDir, { recursive: true });
}
if (!isDbFilesDir) {
  fs.mkdirSync(dbFilesDir, { recursive: true });
}

fs.copyFileSync(
  path.resolve(__dirname, '../src/config/.env'),
  path.resolve(__dirname, '../build/config/.env')
);
