export const SET_APPLICATIONS = 'MODERATOR::SET_APPLICATIONS';
export const SET_ROW = 'MODERATOR::SET_ROW';
export const IS_LOADING = 'MODERATOR::IS_LOADING';
export const SET_STATUS = 'MODERATOR::SET_STATUS';

export const setApplications = (applications) => ({
  type: SET_APPLICATIONS,
  applications,
});
export const setRow = () => ({
  type: SET_ROW,
});
export const isLoading = (isLoading) => ({
  type: IS_LOADING,
  isLoading,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
