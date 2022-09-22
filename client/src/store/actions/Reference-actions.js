export const SET_LICENSES = 'REFERENCE::SET_LICENSES';
export const SET_DEPARTMENTS = 'REFERENCE::SET_DEPARTMENTS';
export const SET_NORMATIVE = 'REFERENCE::SET_NORMATIVE';
export const SET_NORMATIVE_DOC = 'REFERENCE::SET_NORMATIVE_DOC';
export const SET_ARTICLES = 'REFERENCE::SET_ARTICLES';
export const SET_ARTICLES_DOC = 'REFERENCE::SET_ARTICLES_DOC';
export const SET_ITEM = 'REFERENCE::SET_ITEM';
export const IS_LOADING = 'REFERENCE::IS_LOADING';
export const SET_ERROR = 'REFERENCE::SET_ERROR';

export const setLicenses = (licenses) => ({
  type: SET_LICENSES,
  licenses,
});

export const setDepartments = (departments) => ({
  type: SET_DEPARTMENTS,
  departments,
});

export const setNormative = (
  normative
  //  totalCountPages,
  //  currentPage
) => ({
  type: SET_NORMATIVE,
  normative,
  // totalCountPages,
  // currentPage,
});

export const setNormativeDoc = (normativedoc) => ({
  type: SET_NORMATIVE_DOC,
  normativedoc,
});

export const setArticles = (articles) => ({
  type: SET_ARTICLES,
  articles,
});

export const setArticlesADoc = (articles) => ({
  type: SET_ARTICLES_DOC,
  articles,
});

export const setItem = (item) => ({
  type: SET_ITEM,
  item,
});

export const isLoading = (isLoading) => ({
  type: IS_LOADING,
  isLoading,
});

export const setError = (error) => ({
  type: SET_ERROR,
  error,
});
