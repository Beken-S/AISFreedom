import { isLoading, setItem, setProgram } from '../actions/searchActions';

export const getProgram = () => async (dispatch, getState) => {
  dispatch(isLoading(true));
  const response = await fetch('/api/programs/?page=1&items_on_page=4');
  const result = await response.json();
  dispatch(setProgram(result.items, result.page_count, 1));
  dispatch(isLoading(false));
};

export const getItem = (id) => async (dispatch, getState) => {
  dispatch(isLoading(true));
  const response = await fetch(`/api/programs/${id}`);
  const result = await response.json();
  dispatch(setItem(result));
  dispatch(isLoading(false));
};

export const getCurrentPage = (page) => async (dispatch, getState) => {
  dispatch(isLoading(true));
  const response = await fetch(`/api/programs/?page=${page}&items_on_page=4`);
  const result = await response.json();
  dispatch(setProgram(result.items, result.page_count, page));
  dispatch(isLoading(false));
};
