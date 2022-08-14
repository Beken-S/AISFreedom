import { NextFunction, Response } from 'express';

import { BaseError } from '../modules/error';
import * as programsServices from '../services/programsServices';

import { IDatabaseRequest } from 'middlewares/addConnection';

async function getAll(
  request: IDatabaseRequest,
  response: Response,
  next: NextFunction
) {
  try {
    if (request.database == null) {
      throw new BaseError(500, 'request.database == null in getAll');
    }
    const solution = await programsServices.getAll(request.database);
    response.send(solution[0]);
  } catch (error) {
    next(error);
  }
}

export { getAll };
