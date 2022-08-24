import { Request } from 'express';

import { BadRequestError } from '../modules/error';

interface IPaginationOptions {
  limit: number;
  offset: number;
}

function getPaginationOptions(req: Request): IPaginationOptions {
  const { query } = req;

  if (
    ('page' in query && !('items_on_page' in query)) ||
    ('items_on_page' in query && !('page' in query))
  ) {
    throw new BadRequestError('Неверные параметры пагинации.');
  }

  const page = Number(query['page']);
  const itemsOnPage = Number(query['items_on_page']);

  if (isNaN(page) || isNaN(itemsOnPage)) {
    throw new BadRequestError('Неверные параметры пагинации.');
  }

  return {
    limit: itemsOnPage,
    offset: itemsOnPage * (page - 1),
  };
}

export default getPaginationOptions;
