import { SearchIn, ISearchParams } from '../modules/params';

import { getPaginationOptions } from './getPaginationOptions';
import { getSearchFilterSQLString } from './getSearchFilterSQLString';

class SearchColumnMap extends Map<SearchIn | 'type' | 'os', string> {}

const COLUMN_MAP = new SearchColumnMap([
  ['name', 'title'],
  ['description', 'programs_info'],
  ['counterparts', 'proprietary_software'],
  ['type', 'id_program_class'],
  ['os', 'id_os'],
]);

function getSearchSQLString(
  params: ISearchParams,
  columnMap: SearchColumnMap
): string {
  const { page, items_on_page } = params;

  let searchLimit = '';

  if (page != null && items_on_page != null) {
    const { offset, limit } = getPaginationOptions(params);

    searchLimit = `LIMIT ${offset}, ${limit}`;
  }

  return `
    SELECT * FROM Programs_Info
      INNER JOIN (
        SELECT id FROM Programs_Info
          ${getSearchFilterSQLString(params, columnMap)}
        ORDER BY id
        ${searchLimit}
      )
      AS tmp USING(id) ORDER BY id
  `;
}

export {
  getSearchSQLString,
  SearchColumnMap,
  ISearchParams,
  SearchIn,
  COLUMN_MAP,
};
