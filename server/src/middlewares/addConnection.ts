import { Handler, NextFunction, Request, Response } from 'express';
import { Pool } from 'mysql2';

interface IDatabaseRequest extends Request {
  database?: Pool;
}

function addConnection(connection: Pool): Handler {
  return async (
    request: IDatabaseRequest,
    response: Response,
    next: NextFunction
  ) => {
    request.database = connection;
    next();
  };
}

export { IDatabaseRequest, addConnection };
