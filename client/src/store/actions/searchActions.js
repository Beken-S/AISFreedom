const SEARCH_ANALOGS = 'SOFT::SEARCH_ANALOGS';
const RESET_SEARCH = 'SOFT::RESET_SEARCH';
const FILTER_SEARCH = 'SOFT::FILTER_SEARCH';
const SET_IS_GRAPHIC = 'SOFT::SET_IS_GRAPHIC';
const SET_IS_ARCHIVER = 'SOFT::SET_IS_ARCHIVER';
const SET_IS_TEXT = 'SOFT::SET_IS_TEXT';
const SET_IS_LINUX = 'SOFT::SET_IS_LINUX';
const SET_IS_WINDOWS = 'SOFT::SET_IS_WINDOWS';

const searchAnalogs = (type) => ({
  type: SEARCH_ANALOGS,
  payload: type,
});

const resetSearch = () => ({
  type: RESET_SEARCH,
});

const onFilter = (filtersOfType, filtersOfOs) => ({
  type: FILTER_SEARCH,
  filtersOfType,
  filtersOfOs,
});

const setIsGraphic = (check) => ({
  type: SET_IS_GRAPHIC,
  check,
});

const setIsArchiver = (check) => ({
  type: SET_IS_ARCHIVER,
  check,
});

const setIsText = (check) => ({
  type: SET_IS_TEXT,
  check,
});
const setIsLinux = (check) => ({
  type: SET_IS_LINUX,
  check,
});

const setIsWindows = (check) => ({
  type: SET_IS_WINDOWS,
  check,
});

export {
  SEARCH_ANALOGS,
  RESET_SEARCH,
  FILTER_SEARCH,
  SET_IS_GRAPHIC,
  SET_IS_ARCHIVER,
  SET_IS_TEXT,
  SET_IS_LINUX,
  SET_IS_WINDOWS,
  searchAnalogs,
  resetSearch,
  onFilter,
  setIsGraphic,
  setIsArchiver,
  setIsText,
  setIsLinux,
  setIsWindows,
};
