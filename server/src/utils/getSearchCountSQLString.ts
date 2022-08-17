import { ISearchParams } from '../modules/params';

import { getSearchFilterSQLString } from './getSearchFilterSQLString';
import { SearchColumnMap } from './getSearchSQLString';

function getSearchCountSQLString(
  params: ISearchParams,
  columnMap: SearchColumnMap
) {
  return `
    SELECT COUNT(id) FROM Programs_Info
      ${getSearchFilterSQLString(params, columnMap)}
  `;
}

export { getSearchCountSQLString };
