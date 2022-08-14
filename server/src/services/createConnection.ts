import mysql = require('mysql2');

import { IDataBaseConfig } from 'config';

function createConnection(databaseConfig: IDataBaseConfig): mysql.Pool {
  return mysql.createPool(databaseConfig);
}

export { createConnection };
