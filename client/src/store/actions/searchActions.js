const SEARCH_ANALOGS = 'SOFT::SEARCH_ANALOGS';
const RESET_SEARCH = 'SOFT::RESET_SEARCH';

const searchAnalogs = (type) => ({
  type: SEARCH_ANALOGS,
  payload: type,
});

const resetSearch = () => ({
  type: RESET_SEARCH,
});

export { SEARCH_ANALOGS, RESET_SEARCH, searchAnalogs, resetSearch };
