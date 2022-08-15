import { NextFunction, Response } from 'express';

import { IDatabaseRequest } from '../middlewares/addConnection';
import * as programsServices from '../services/programsServices';
import { getConnection } from '../utils/getConnection';
import { getPageCount } from '../utils/getPageCount';
import { getPaginationParams } from '../utils/getPaginationParams';

async function getAll(
  request: IDatabaseRequest,
  response: Response,
  next: NextFunction
) {
  try {
    if (Object.keys(request.query).length == 0) {
      const connection = getConnection(request, 'programsController.getAll');
      const [result_rows] = await programsServices.getAll(connection);

      response.send(result_rows);
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}

async function get(
  request: IDatabaseRequest,
  response: Response,
  next: NextFunction
) {
  try {
    const params = getPaginationParams(request);
    const connection = getConnection(request, 'programsController.get');

    const [[count_rows], [result_rows]] = await Promise.all([
      programsServices.getCount(connection),
      programsServices.get(connection, params.offset, params.limit),
    ]);

    const page_count = getPageCount(params.limit, count_rows);

    response.send({
      items: result_rows,
      page_count,
    });
  } catch (error) {
    next(error);
  }
}

export { getAll, get };
