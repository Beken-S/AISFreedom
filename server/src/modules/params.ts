type SearchIn = 'name' | 'description' | 'counterparts';

interface IParams {
  page?: string;
  items_on_page?: string;
}

interface ISearchParams extends IParams {
  q: string;
  _in?: SearchIn | SearchIn[];
  os?: string; // operating system
  type?: string;
}

function isSearchIn(value: unknown): value is SearchIn | SearchIn[] {
  if (Array.isArray(value)) {
    const uniqueArray = [...new Set(value)];

    if (value.length > uniqueArray.length) return false;

    for (const item of value) {
      if (
        item !== 'name' &&
        item !== 'description' &&
        item !== 'counterparts'
      ) {
        return false;
      }
    }
    return true;
  } else {
    return value == 'name' || value == 'description' || value == 'counterparts';
  }
}

function isParams(params: unknown): params is IParams {
  if (params == null || typeof params !== 'object') return false;
  if ('page' in params) {
    const page = Number((params as IParams).page);
    const items_on_page = Number((params as IParams).items_on_page);
    return !isNaN(page) && !isNaN(items_on_page);
  }
  return true;
}

function isSearchParams(params: unknown): params is ISearchParams {
  if (!isParams(params)) return false;
  if (!('q' in params)) return false;
  if ('_in' in params && !isSearchIn((params as ISearchParams)._in)) {
    return false;
  }
  return true;
}

export {
  isSearchParams,
  isSearchIn,
  isParams,
  SearchIn,
  ISearchParams,
  IParams,
};
