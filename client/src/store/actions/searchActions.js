const SEARCH_ANALOGS = 'SOFT::SEARCH_ANALOGS';
const RESET_SEARCH = 'SOFT::RESET_SEARCH';
const FILTER_SEARCH = 'SOFT::FILTER_SEARCH';

const searchAnalogs = (type) => ({
  type: SEARCH_ANALOGS,
  payload: type,
});

const resetSearch = () => ({
  type: RESET_SEARCH,
});

const onFilter = (payload) => ({
  type: FILTER_SEARCH,
  payload
});

export {
  SEARCH_ANALOGS,
  RESET_SEARCH,
  FILTER_SEARCH,
  searchAnalogs,
  resetSearch,
  onFilter,
};
