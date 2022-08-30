export const SEARCH_ANALOGS = 'SOFT::SEARCH_ANALOGS';
export const RESET_SEARCH = 'SOFT::RESET_SEARCH';
export const FILTER_SEARCH = 'SOFT::FILTER_SEARCH';
export const SET_IS_GRAPHIC = 'SOFT::SET_IS_GRAPHIC';
export const SET_IS_ARCHIVER = 'SOFT::SET_IS_ARCHIVER';
export const SET_IS_TEXT = 'SOFT::SET_IS_TEXT';
export const SET_IS_LINUX = 'SOFT::SET_IS_LINUX';
export const SET_IS_WINDOWS = 'SOFT::SET_IS_WINDOWS';
export const SET_PROGRAM = 'SOFT::SET_PROGRAM';
export const SET_ITEM = 'SOFT::SET_ITEM';

export const searchAnalogs = (type) => ({
  type: SEARCH_ANALOGS,
  payload: type,
});

export const resetSearch = () => ({
  type: RESET_SEARCH,
});

export const onFilter = (filtersOfType, filtersOfOs) => ({
  type: FILTER_SEARCH,
  filtersOfType,
  filtersOfOs,
});

export const setIsGraphic = (check) => ({
  type: SET_IS_GRAPHIC,
  check,
});

export const setIsArchiver = (check) => ({
  type: SET_IS_ARCHIVER,
  check,
});

export const setIsText = (check) => ({
  type: SET_IS_TEXT,
  check,
});
export const setIsLinux = (check) => ({
  type: SET_IS_LINUX,
  check,
});

export const setIsWindows = (check) => ({
  type: SET_IS_WINDOWS,
  check,
});

export const setProgram = (programs, totalCountPages, currentPage) => ({
  type: SET_PROGRAM,
  programs,
  totalCountPages,
  currentPage,
});

export const setItem = (item, img) => ({
  type: SET_ITEM,
  item,
  img,
});
