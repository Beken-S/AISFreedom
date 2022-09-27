import { Article } from '../models';
import { PaginateOutput, PaginationParams } from '../types';
import { getPageCount } from '../utils';

async function getAll({
  page,
  items_on_page,
}: PaginationParams): Promise<Article[] | PaginateOutput<Article>> {
  if (page != null && items_on_page != null) {
    const articles = await Article.scope([
      'orderById',
      { method: ['paginate', page, items_on_page] },
    ]).findAndCountAll();

    return {
      items: articles.rows,
      page_count: getPageCount(items_on_page, articles.count),
    };
  }
  return Article.scope('orderById').findAll();
}

export { getAll };
