const fs = require("fs");
const { resolve } = require("path");

const isConfigDir = fs.existsSync(CONFIG_DIR);
const isSecretsDir = fs.existsSync(SECRETS_DIR);
const isLogsDir = fs.existsSync(LOGS_DIR);
const isTempDir = fs.existsSync(TEMP_DIR);
const isClientDir = fs.existsSync(CLIENT_DIR);
const isDbImagesDir = fs.existsSync(DATABASE_IMAGES_DIR);
const isDbFilesDir = fs.existsSync(DATABASE_FILES_DIR);

if (!isConfigDir) {
  fs.mkdirSync(CONFIG_DIR, { recursive: true });
}

if (!isLogsDir) {
  fs.mkdirSync(LOGS_DIR, { recursive: true });
}

if (!isSecretsDir) {
  fs.mkdirSync(SECRETS_DIR, { recursive: true });
}

if (!isTempDir) {
  fs.mkdirSync(TEMP_DIR, { recursive: true });
}

if (!isClientDir) {
  fs.mkdirSync(CLIENT_DIR, { recursive: true });
}

if (!isDbImagesDir) {
  fs.mkdirSync(DATABASE_IMAGES_DIR, { recursive: true });
}

if (!isDbFilesDir) {
  fs.mkdirSync(DATABASE_FILES_DIR, { recursive: true });
}

fs.copyFileSync(
  path.resolve(__dirname, "../src/config/.env"),
  path.resolve(D, "../build/config/.env")
);
