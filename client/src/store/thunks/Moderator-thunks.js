import {
  isLoading,
  setApplications,
  setDepartments,
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
    const data_departments = await ModeratorAPI.getDepartments();
    dispatch(setDepartments(data_departments));
    dispatch(setApplications(data.items, data_departments));
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
    const departments = getState().moderator.departments;
    const created_from = getState().moderator.created_from;
    const created_to = getState().moderator.created_to;
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
    dispatch(setApplications(data.items, departments));
    dispatch(setRow());
    dispatch(isLoading(false));
  };
export const resetApplication = () => async (dispatch, getState) => {
  dispatch(isLoading(true));
  const id = getState().moderator.id;
  const data = await ModeratorAPI.reset(id);
  dispatch(getApplications());
  dispatch(isLoading(false));
};
export const completeApplication = () => async (dispatch, getState) => {
  dispatch(isLoading(true));
  const id = getState().moderator.id;
  const data = await ModeratorAPI.complete(id);
  dispatch(getApplications());
  dispatch(isLoading(false));
};
export const rejectApplication = () => async (dispatch, getState) => {
  dispatch(isLoading(true));
  const id = getState().moderator.id;
  const data = await ModeratorAPI.reject(id);
  dispatch(getApplications());
  dispatch(isLoading(false));
};
