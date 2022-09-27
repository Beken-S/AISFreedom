export const RESET_SEARCH = 'CATALOG::RESET_SEARCH';
export const SET_PROGRAM = 'CATALOG::SET_PROGRAM';
export const SET_ITEM = 'CATALOG::SET_ITEM';
export const IS_LOADING = 'CATALOG::IS_LOADING';
export const SEARCH_PROGRAM = 'CATALOG::SEARCH_PROGRAM';
export const SET_ERROR = 'CATALOG::SET_ERROR';
export const FILTER_PROGRAM = 'CATALOG::FILTER_PROGRAM';
export const SET_CURRENT_PAGE = 'CATALOG::SET_CURRENT_PAGE';
export const SET_FILTER_DATA = 'CATALOG::SET_FILTER_DATA';
export const SET_TYPES_PROGRAMS = 'CATALOG::SET_TYPES_PROGRAMS';
export const SET_OS_PROGRAMS = 'CATALOG::SET_OS_PROGRAMS';

export const reset = () => ({
  type: RESET_SEARCH,
});

export const setFilterData = (data) => ({
  type: SET_FILTER_DATA,
  data,
});

export const setProgram = (programs, typeOs, totalCountPages) => ({
  type: SET_PROGRAM,
  programs,
  typeOs,
  totalCountPages,
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setItem = (item, license, classProgram, typeOs) => ({
  type: SET_ITEM,
  item,
  license,
  classProgram,
  typeOs,
});

export const isLoading = (isLoading) => ({
  type: IS_LOADING,
  isLoading,
});

export const filterPrograms = (programs, totalCountPages, currentPage) => ({
  type: FILTER_PROGRAM,
  programs,
  totalCountPages,
  currentPage,
});

export const setError = (error) => ({
  type: SET_ERROR,
  error,
});

export const setTypesPrograms = (typesPrograms) => ({
  type: SET_TYPES_PROGRAMS,
  typesPrograms,
});

export const setAllOsPrograms = (os) => ({
  type: SET_OS_PROGRAMS,
  os,
});
