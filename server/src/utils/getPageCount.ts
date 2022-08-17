import { RowDataPacket } from 'mysql2';

function getPageCount(itemsOnPage: number, countRows: RowDataPacket[]): number {
  const count_row = countRows[0];

  if (count_row == null) throw new Error('count = null');

  const key = Object.keys(count_row)[0];

  if (key == null) throw new Error('count = null');

  const itemsCount = count_row[key];

  return Math.ceil(itemsCount / itemsOnPage);
}

export { getPageCount };
