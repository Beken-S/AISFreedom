import path = require('path');

import dotenv = require('dotenv');
import { Dialect } from 'sequelize';
import { prettify } from 'sql-log-prettifier';

import { Config } from './types';

dotenv.config({ path: path.resolve(__dirname, './envs/.env') });
dotenv.config({ path: path.resolve(__dirname, './secrets/.env') });

const {
  NODE_ENV,
  URL,
  PORT,
  WRITE_LOG,
  REQUESTS_LOG_FILE_NAME,
  ERRORS_LOG_FILE_NAME,
  DATABASE_NAME,
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_DIALECT,
  DATABASE_USER,
  DATABASE_PASSWORD,
  JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET,
} = process.env;

const ROOT_DIR = path.resolve(__dirname, '../');
console.log(ROOT_DIR);
const LOGS_DIR = path.resolve(ROOT_DIR, 'logs');
const TEMP_DIR = path.resolve(ROOT_DIR, 'temp');
const CLIENT_DIR = path.resolve(ROOT_DIR, 'client');
const MODELS_DIR = path.resolve(ROOT_DIR, 'models');
const DATABASE_DIR = path.resolve(ROOT_DIR, 'database');
const DATABASE_ASSETS_DIR = path.resolve(DATABASE_DIR, 'assets');
const DATABASE_IMAGES_DIR = path.resolve(DATABASE_ASSETS_DIR, 'images');
const DATABASE_LOGOS_DIR = path.resolve(DATABASE_ASSETS_DIR, 'logos');
const DATABASE_FILES_DIR = path.resolve(DATABASE_ASSETS_DIR, 'files');

function isDevMode(nodeEnv: string | undefined): boolean {
  return nodeEnv === 'development';
}

const config: Config = {
  server: {
    isDevelopmentMode: isDevMode(NODE_ENV),
    url: URL || 'http://localhost',
    port: Number(PORT) || 3000,
    logs: {
      write: WRITE_LOG === 'true' ? true : false,
      path: LOGS_DIR,
      fileName: {
        requests: REQUESTS_LOG_FILE_NAME || 'requests.log',
        errors: ERRORS_LOG_FILE_NAME || 'errors.log',
      },
    },
    jwt: {
      secrets: {
        access: JWT_ACCESS_SECRET || 'access',
        refresh: JWT_REFRESH_SECRET || 'refresh',
      },
    },
    temp: TEMP_DIR,
    client: CLIENT_DIR,
  },
  database: {
    path: DATABASE_DIR,
    name: DATABASE_NAME || '',
    user: DATABASE_USER || '',
    password: DATABASE_PASSWORD || '',
    assets: {
      files: DATABASE_FILES_DIR,
      images: DATABASE_IMAGES_DIR,
      logos: DATABASE_LOGOS_DIR,
    },
    options: {
      dialect: (DATABASE_DIALECT as Dialect) || 'mysql',
      host: DATABASE_HOST || '',
      port: Number(DATABASE_PORT) || 6033,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      logging: isDevMode(NODE_ENV)
        ? (msg) => console.log(prettify(msg, prettifySettings), '\n')
        : false,
      define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
      models: [MODELS_DIR + '/*.model.*'],
    },
  },
};

const prettifySettings = {
  format: true,
  noColors: false,
  settings: {
    functions: {
      color: '#b23733',
    },
    keywords: {
      color: '#b23733',
    },
    operators: {
      color: '#91B859',
    },
    strings: {
      color: '#202c69',
    },
    numbers: {
      color: '#50fa7b',
    },
  },
};

export default config;
