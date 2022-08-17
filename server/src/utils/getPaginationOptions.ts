import { IParams } from '../modules/params';

interface IPaginationParams {
  limit: number;
  offset: number;
}

function getPaginationOptions(params: IParams): IPaginationParams {
  const pageNumber = Number(params.page);
  const itemsOnPageNumber = Number(params.items_on_page);

  return {
    limit: itemsOnPageNumber,
    offset: itemsOnPageNumber * (pageNumber - 1),
  };
}

export { getPaginationOptions };
