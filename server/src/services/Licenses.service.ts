import { License, LicenseCreationAttributes } from '../models';
import { NotFoundError } from '../modules/error';
import { PaginateOutput, PaginationParams } from '../types';
import { getPageCount } from '../utils';

async function create(attributes: LicenseCreationAttributes): Promise<License> {
  return License.create(attributes);
}

async function getAll({
  page,
  items_on_page,
}: PaginationParams): Promise<License[] | PaginateOutput<License>> {
  if (page != null && items_on_page != null) {
    const licenses = await License.scope([
      'orderById',
      { method: ['paginate', page, items_on_page] },
    ]).findAndCountAll();

    return {
      items: licenses.rows,
      page_count: getPageCount(items_on_page, licenses.count),
    };
  }
  return License.scope('orderById').findAll();
}

async function getById(id: number): Promise<License> {
  const license = await License.findByPk(id);

  if (license == null) {
    throw new NotFoundError(`Лицензия с id=${id} не найдена.`);
  }

  return license;
}

async function update(
  id: number,
  attributes: LicenseCreationAttributes
): Promise<License> {
  const license = await getById(id);

  license.set(attributes);

  return license.save();
}

async function destroy(id: number): Promise<void> {
  const license = await getById(id);

  return license.destroy();
}

export { create, getAll, getById, update, destroy };
