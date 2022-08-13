import mysql = require('mysql2');

import { IDataBaseConfig } from 'config';

function createConnection(databaseConfig: IDataBaseConfig): mysql.Pool {
  const pool = mysql.createPool(databaseConfig);
  return pool;
}

export { createConnection };
