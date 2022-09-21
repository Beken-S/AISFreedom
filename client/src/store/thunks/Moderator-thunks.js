import {
  isLoading,
  setApplications,
  setRow,
  setStatus,
} from '../actions/Moderator-actions';
import { ModeratorAPI } from '../api/moderator-api';

export const getApplications =
  (page = 1) =>
  async (dispatch, getState) => {
    dispatch(isLoading(true));
    const itemsOnPage = getState().moderator.itemsOnPage;
    const data = await ModeratorAPI.getApplicationsAPI(page, itemsOnPage);
    dispatch(setApplications(data.items));
    dispatch(setRow());
    dispatch(setStatus('all'));
    dispatch(isLoading(false));
  };

export const filterApplications =
  (
    status = 'current',
    created_from = '',
    created_to = '',
    processed_from = '',
    processed_to = '',
    page = 1
  ) =>
  async (dispatch, getState) => {
    dispatch(isLoading(true));
    const itemsOnPage = getState().moderator.itemsOnPage;
    const data = await ModeratorAPI.filter(
      status,
      created_from,
      created_to,
      processed_from,
      processed_to,
      page,
      itemsOnPage
    );
    dispatch(setStatus(status));
    dispatch(setApplications(data.items));
    dispatch(setRow());
    dispatch(isLoading(false));
  };
export const reportApplications = () => async (dispatch, getState) => {
  dispatch(isLoading(true));
  const status = getState().moderator.status;
  if (status !== 'all') {
    const data = await ModeratorAPI.report(status);
    console.log(data);
  }
  dispatch(isLoading(false));
};
