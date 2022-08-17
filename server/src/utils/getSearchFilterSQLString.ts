import { escape } from 'mysql2';

import { ISearchParams, SearchIn } from '../modules/params';

import { SearchColumnMap } from './getSearchSQLString';

function getSearchInSQLString(
  query: string,
  searchIn: SearchIn | SearchIn[],
  columnMap: SearchColumnMap
): string {
  const q = escape(`%${query}%`);

  if (Array.isArray(searchIn)) {
    return searchIn
      .map((key) => {
        const column = columnMap.get(key);

        return `${column} LIKE ${q}`;
      })
      .join(' OR ');
  }

  const column = columnMap.get(searchIn);

  return `${column} LIKE ${q}`;
}

function getSearchFilterSQLString(
  params: ISearchParams,
  columnMap: SearchColumnMap
) {
  const { q, _in, os, type } = params;
  let searchByOs = '';
  let searchByIn = '';
  let searchByType = '';

  if (os != null) {
    searchByOs = `
      INNER JOIN
        Programs_info__Operation_systems
      ON Programs_Info.id = Programs_info__Operation_systems.id_programs
      WHERE
        Programs_info__Operation_systems.${columnMap.get('os')} = ${escape(
      os
    )}`;
  }
  if (_in != null) {
    searchByIn = `
      ${os != null ? ' AND ' : ' WHERE '}
        (${getSearchInSQLString(q, _in, columnMap)})`;
  }
  if (type != null) {
    searchByType = `
      ${os != null || _in != null ? ' AND ' : ' WHERE '}
        ${columnMap.get('type')} = ${escape(type)}`;
  }

  return `${searchByOs} ${searchByIn} ${searchByType}`;
}

export { getSearchFilterSQLString };
