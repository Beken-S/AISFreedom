import { Pool } from 'mysql2';

async function getAll(database: Pool) {
  return database.promise().query('SELECT * FROM Programs_Info');
}

export { getAll };
