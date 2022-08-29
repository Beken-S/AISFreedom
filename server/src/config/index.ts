import path = require('path');

import dotenv = require('dotenv');
import { Dialect, Options } from 'sequelize';
import { prettify } from 'sql-log-prettifier';

import { isDevMode } from '../utils';

enum Mods {
  Dev = 'development',
  Prod = 'production',
}

enum Envs {
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
}

type ErrorsFileName = 'errors.log' | string;
type RequestsFileName = 'requests.log' | string;

interface IServerConfig {
  mode: Mods;
  port: number;
  logs: ILogsConfig;
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
  options: Options;
  filesPath: {
    temp: string;
    images: string;
    logos: string;
  };
}

interface IConfig {
  server: IServerConfig;
  database: IDataBaseConfig;
}

dotenv.config({ path: path.resolve(__dirname, '.env') });
dotenv.config({ path: path.resolve(__dirname, '../../secrets/db.env') });

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
  port: Number(process.env[Envs.PORT]) || 3001,
  logs: serverLogsConfig,
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
  },
  filesPath: {
    temp: path.resolve(__dirname, '../../db/temp'),
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
