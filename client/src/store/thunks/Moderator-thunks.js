import { isLoading } from '../actions/Catalog-actions';
import { setApplications, setRow } from '../actions/Moderator-actions';
import { ModeratorAPI } from '../api/moderator-api';

export const getApplications =
  (page = 1) =>
  async (dispatch, getState) => {
    dispatch(isLoading(true));
    const itemsOnPage = getState().moderator.itemsOnPage;
    const data = await ModeratorAPI.getApplicationsAPI(page, itemsOnPage);
    console.log(data);
    dispatch(setApplications(data.items));
    dispatch(setRow());
    dispatch(isLoading(false));
  };
