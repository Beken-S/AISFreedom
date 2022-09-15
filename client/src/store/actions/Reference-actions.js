export const SET_LICENSES = 'REFERENCE::SET_LICENSES';
export const SET_NORMATIVE = 'REFERENCE::SET_NORMATIVE';
export const SET_ARTICLES = 'REFERENCE::SET_ARTICLES';
export const SET_ITEM = 'REFERENCE::SET_ITEM';
export const IS_LOADING = 'REFERENCE::IS_LOADING';
export const SET_ERROR = 'REFERENCE::SET_ERROR';

export const setLicenses = (licenses) => ({
  type: SET_LICENSES,
  licenses,
});

export const setNormative = (normative) => ({
  type: SET_NORMATIVE,
  normative,
});

export const setArticles = (articles) => ({
  type: SET_ARTICLES,
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
