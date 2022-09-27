import { PaginationOptions } from '../types';

function getPaginationOptions(
  page: number,
  items_on_page: number
): PaginationOptions {
  return {
    limit: items_on_page,
    offset: items_on_page * (page - 1),
  };
}

export default getPaginationOptions;
