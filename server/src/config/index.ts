import path = require('path');

import dotenv = require('dotenv');
import { Dialect } from 'sequelize';
import { SequelizeOptions } from 'sequelize-typescript';
import { prettify } from 'sql-log-prettifier';

import { isDevMode } from '../utils';

enum Mods {
  Dev = 'development',
  Prod = 'production',
}

enum Envs {
  API_URL = 'API_URL',
  PORT = 'PORT',
  WRITE_LOG = 'WRITE_LOG',
  LOGS_PATH = 'LOGS_PATH',
  REQUESTS_LOG_FILE_NAME = 'REQUESTS_LOG_FILE_NAME',
  ERRORS_LOG_FILE_NAME = 'ERRORS_LOG_FILE_NAME',
  DB = 'DB',
  DB_HOST = 'DB_HOST',
  DB_PORT = 'DB_PORT',
  DB_USER = 'DB_USER',
  DB_PASSWORD = 'DB_PASSWORD',
  DB_DIALECT = 'DB_DIALECT',
  JWT_ACCESS_SECRET = 'JWT_ACCESS_SECRET',
  JWT_REFRESH_SECRET = 'JWT_REFRESH_SECRET',
}

type ErrorsFileName = 'errors.log' | string;
type RequestsFileName = 'requests.log' | string;

interface IServerConfig {
  mode: Mods;
  url: string;
  port: number;
  logs: ILogsConfig;
  temp: string;
  jwtSecret: {
    access: string;
    refresh: string;
  };
}

interface ILogsConfig {
  write: boolean;
  path: string;
  fileName: {
    requests: RequestsFileName;
    errors: ErrorsFileName;
  };
}

interface IDataBaseConfig {
  name: string;
  user: string;
  password: string;
  options: SequelizeOptions;
  filesPath: {
    images: string;
    logos: string;
  };
}

interface IConfig {
  server: IServerConfig;
  database: IDataBaseConfig;
}

dotenv.config({ path: path.resolve(__dirname, '.env') });
dotenv.config({ path: path.resolve(__dirname, '../../secrets/.env') });

const serverLogsConfig: ILogsConfig = {
  write: process.env[Envs.WRITE_LOG] === 'true' ? true : false,
  path: process.env[Envs.LOGS_PATH] || '',
  fileName: {
    requests: process.env[Envs.REQUESTS_LOG_FILE_NAME] || 'requests.log',
    errors: process.env[Envs.ERRORS_LOG_FILE_NAME] || 'errors.log',
  },
};

const serverConfig: IServerConfig = {
  mode: isDevMode() ? Mods.Dev : Mods.Prod,
  url: process.env[Envs.API_URL] || 'http://localhost:3001',
  port: Number(process.env[Envs.PORT]) || 3001,
  logs: serverLogsConfig,
  temp: path.resolve(__dirname, '../../temp'),
  jwtSecret: {
    access: process.env[Envs.JWT_ACCESS_SECRET] || 'access',
    refresh: process.env[Envs.JWT_REFRESH_SECRET] || 'refresh',
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
const databaseConfig: IDataBaseConfig = {
  name: process.env[Envs.DB] || '',
  user: process.env[Envs.DB_USER] || '',
  password: process.env[Envs.DB_PASSWORD] || '',
  options: {
    dialect: (process.env[Envs.DB_DIALECT] as Dialect) || 'mysql',
    host: process.env[Envs.DB_HOST] || '',
    port: Number(process.env[Envs.DB_PORT]) || 3306,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    logging:
      serverConfig.mode === Mods.Dev
        ? (msg) => console.log(prettify(msg, prettifySettings), '\n')
        : false,
    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
    models: [path.resolve(__dirname, '../models') + '/*.model.js'],
  },
  filesPath: {
    images: path.resolve(__dirname, '../../db/images'),
    logos: path.resolve(__dirname, '../../db/logos'),
  },
};

const config: IConfig = {
  server: serverConfig,
  database: databaseConfig,
};

export default config;
export { Mods, IConfig, IDataBaseConfig, ILogsConfig, IServerConfig };
