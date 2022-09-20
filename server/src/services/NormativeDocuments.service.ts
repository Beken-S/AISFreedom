import { NormativeDocument } from '../models';
import { PaginateOutput, PaginationParams } from '../types';
import { getPageCount } from '../utils';

async function getAll({
  page,
  items_on_page,
}: PaginationParams): Promise<
  NormativeDocument[] | PaginateOutput<NormativeDocument>
> {
  if (page != null && items_on_page != null) {
    const normativeDocuments = await NormativeDocument.scope([
      'orderById',
      { method: ['paginate', page, items_on_page] },
    ]).findAndCountAll();

    return {
      items: normativeDocuments.rows,
      page_count: getPageCount(items_on_page, normativeDocuments.count),
    };
  }
  return NormativeDocument.scope('orderById').findAll();
}

export { getAll };
