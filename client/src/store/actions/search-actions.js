export const SEARCH_ANALOGS = 'SOFT::SEARCH_ANALOGS';
export const RESET_SEARCH = 'SOFT::RESET_SEARCH';

export const searchAnalogs = (type) => ({
  type: SEARCH_ANALOGS,
  payload: type,
});

export const resetSearch = () => ({
  type: RESET_SEARCH,
});
