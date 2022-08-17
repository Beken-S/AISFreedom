import { NextFunction, Response } from 'express';

import { IDatabaseRequest } from '../middlewares/addConnection';
import { BadRequestError } from '../modules/error';
import { isParams, isSearchParams } from '../modules/params';
import * as programsServices from '../services/programsServices';
import { getConnection } from '../utils/getConnection';
import { getPageCount } from '../utils/getPageCount';

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
    const connection = getConnection(request, 'programsController.get');
    const params: unknown = request.query;

    if (!isParams(params)) {
      throw new BadRequestError('Неверные параметры.');
    }

    const [[count_rows], [result_rows]] = await Promise.all([
      programsServices.getCount(connection),
      programsServices.get(connection, params),
    ]);

    const page_count = getPageCount(Number(params.items_on_page), count_rows);

    response.send({
      items: result_rows,
      page_count,
    });
  } catch (error) {
    next(error);
  }
}

async function search(
  request: IDatabaseRequest,
  response: Response,
  next: NextFunction
) {
  try {
    const connection = getConnection(request, 'programsController.search');
    const params: unknown = request.query;

    if (!isSearchParams(params)) {
      throw new BadRequestError('Неверные параметры поиска');
    }

    if (params.page != null && params.items_on_page != null) {
      const [[count_rows], [result_rows]] = await Promise.all([
        programsServices.getSearchCount(connection, params),
        programsServices.search(connection, params),
      ]);

      const page_count = getPageCount(Number(params.items_on_page), count_rows);

      response.send({
        items: result_rows,
        page_count,
      });
    } else {
      const [result_rows] = await programsServices.search(connection, params);

      response.send(result_rows);
    }
  } catch (error) {
    next(error);
  }
}

export { getAll, get, search };
