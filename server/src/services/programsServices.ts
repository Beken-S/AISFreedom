import { Pool, RowDataPacket } from 'mysql2';

import { IParams } from '../modules/params';
import { getPaginationOptions } from '../utils/getPaginationOptions';
import { getSearchCountSQLString } from '../utils/getSearchCountSQLString';
import {
  getSearchSQLString,
  COLUMN_MAP,
  ISearchParams,
} from '../utils/getSearchSQLString';

async function getAll(database: Pool) {
  return database.promise().query('SELECT * FROM Programs_Info');
}

async function getCount(database: Pool) {
  return database
    .promise()
    .query<RowDataPacket[]>('SELECT COUNT(id) FROM Programs_Info');
}

async function get(database: Pool, params: IParams) {
  const { offset, limit } = getPaginationOptions(params);

  return database.promise().query<RowDataPacket[]>(
    `SELECT * FROM Programs_Info
       INNER JOIN( SELECT id FROM Programs_Info ORDER BY id LIMIT ?, ?)
     AS tmp USING(id) ORDER BY id`,
    [offset, limit]
  );
}

async function search(database: Pool, params: ISearchParams) {
  const sqlString = getSearchSQLString(params, COLUMN_MAP);

  return database.promise().query<RowDataPacket[]>(sqlString);
}

async function getSearchCount(database: Pool, params: ISearchParams) {
  const sqlString = getSearchCountSQLString(params, COLUMN_MAP);

  return database.promise().query<RowDataPacket[]>(sqlString);
}

export { getAll, getCount, get, search, getSearchCount };
