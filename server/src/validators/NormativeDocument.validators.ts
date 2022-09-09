import { PaginationParams } from '../types';

import checkValidKey from './checkValidKey';
import validatePaginationQuery from './validatePaginationQuery';

type GetAllQueryParams = keyof PaginationParams;

const GET_ALL_QUERY_PARAMS: GetAllQueryParams[] = ['page', 'items_on_page'];

function getAllRequest() {
  return [
    checkValidKey(GET_ALL_QUERY_PARAMS, 'query', 'Недопустимый параметр'),
    validatePaginationQuery(),
  ];
}

export { getAllRequest };
