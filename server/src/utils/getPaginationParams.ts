import { Request } from 'express';

import { BadRequestError } from '../modules/error';

interface IPaginationParams {
  limit: number;
  offset: number;
}

function getPaginationParams(request: Request): IPaginationParams {
  const query = request.query;

  const limit = Number(query['limit']);
  const page = Number(query['page']);

  if (isNaN(limit) || isNaN(page)) {
    throw new BadRequestError('Неверные параметры limit и page.');
  }

  return {
    limit,
    offset: limit * (page - 1),
  };
}

export { getPaginationParams };
