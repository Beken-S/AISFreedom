import path = require('path');

import dotenv = require('dotenv');

import { isDevMode } from '../utils/isDevMode';

enum Mods {
  Dev = 'dev',
  Prod = 'prod',
}

enum Envs {
  PORT = 'PORT',
  WRITE_LOG = 'WRITE_LOG',
  LOGS_PATH = 'LOGS_PATH',
  REQUESTS_LOG_FILE_NAME = 'REQUESTS_LOG_FILE_NAME',
  ERRORS_LOG_FILE_NAME = 'ERRORS_LOG_FILE_NAME',
  DB = 'DB',
  DB_HOST = 'DB_HOST',
  DB_USER = 'DB_USER',
  DB_PASSWORD = 'DB_PASSWORD',
}

interface IServerConfig {
  mode: Mods;
  port: number;
}

type ErrorsFileName = 'errors.log' | string;
type RequestsFileName = 'requests.log' | string;

interface ILogsConfig {
  write: boolean;
  path: string;
  fileName: {
    requests: RequestsFileName;
    errors: ErrorsFileName;
  };
}

interface IDataBaseConfig {
  host: string;
  user: string;
  password: string;
  database: string;
}

interface IConfig {
  server: IServerConfig;
  logs: ILogsConfig;
  database: IDataBaseConfig;
}

dotenv.config({ path: path.resolve(__dirname, '.env') });
dotenv.config({ path: path.resolve(__dirname, '../../secrets/db.env') });

const serverConfig: IServerConfig = {
  mode: isDevMode() ? Mods.Dev : Mods.Prod,
  port: Number(process.env[Envs.PORT]) || 3001,
};

const serverLogsConfig: ILogsConfig = {
  write: Boolean(process.env[Envs.WRITE_LOG]),
  path: process.env[Envs.LOGS_PATH] || '',
  fileName: {
    requests: process.env[Envs.REQUESTS_LOG_FILE_NAME] || 'requests.log',
    errors: process.env[Envs.ERRORS_LOG_FILE_NAME] || 'errors.log',
  },
};

const databaseConfig: IDataBaseConfig = {
  host: process.env[Envs.DB_HOST] || '',
  user: process.env[Envs.DB_USER] || '',
  password: process.env[Envs.DB_PASSWORD] || '',
  database: process.env[Envs.DB] || '',
};

const config: IConfig = {
  server: serverConfig,
  logs: serverLogsConfig,
  database: databaseConfig,
};

export { Mods, IConfig, IDataBaseConfig, ILogsConfig, IServerConfig, config };
