import { Pool, RowDataPacket } from 'mysql2';

async function getAll(database: Pool) {
  return database.promise().query('SELECT * FROM Programs_Info');
}

async function getCount(database: Pool) {
  return database
    .promise()
    .query<RowDataPacket[]>('SELECT COUNT(id) FROM Programs_Info');
}

async function get(database: Pool, offset: number, limit: number) {
  return database.promise().query<RowDataPacket[]>(
    `SELECT * FROM Programs_Info
       INNER JOIN(SELECT id FROM Programs_Info ORDER BY id LIMIT ?, ?)
     AS tmp USING(id) ORDER BY id`,
    [offset, limit]
  );
}

export { getAll, getCount, get };
