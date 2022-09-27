export const SET_APPLICATIONS = 'MODERATOR::SET_APPLICATIONS';
export const SET_ROW = 'MODERATOR::SET_ROW';
export const IS_LOADING = 'MODERATOR::IS_LOADING';
export const SET_STATUS = 'MODERATOR::SET_STATUS';
export const SET_CREATED_FROM = 'MODERATOR::SET_CREATED_FROM';
export const SET_CREATED_TO = 'MODERATOR::SET_CREATED_TO';
export const SET_ID = 'MODERATOR::SET_ID';
export const SET_DEPARTMENTS = 'MODERATOR::SET_DEPARTMENTS';

export const setApplications = (applications, departments) => ({
  type: SET_APPLICATIONS,
  applications,
  departments,
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
export const setCreatedFrom = (date) => ({
  type: SET_CREATED_FROM,
  date,
});
export const setCreatedTo = (date) => ({
  type: SET_CREATED_TO,
  date,
});
export const setId = (id) => ({
  type: SET_ID,
  id,
});
export const setDepartments = (departments) => ({
  type: SET_DEPARTMENTS,
  departments,
});
