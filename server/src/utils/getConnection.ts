import { Pool } from 'mysql2';

import { IDatabaseRequest } from '../middlewares/addConnection';

function getConnection(
  request: IDatabaseRequest,
  controllerName: string
): Pool {
  if (request.database == null) {
    throw new Error(`request.database == null in ${controllerName}`);
  }
  return request.database;
}

export { getConnection };
