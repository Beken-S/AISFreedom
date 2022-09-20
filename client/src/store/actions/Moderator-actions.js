export const SET_APPLICATIONS = 'MODERATOR::SET_APPLICATIONS';
export const SET_ROW = 'MODERATOR::SET_ROW';

export const setApplications = (applications) => ({
  type: SET_APPLICATIONS,
  applications,
});
export const setRow = () => ({
  type: SET_ROW,
});
