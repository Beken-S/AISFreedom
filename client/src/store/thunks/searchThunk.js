import { setItem, setProgram } from '../actions/searchActions';

export const getProgram = () => async (dispatch, getState) => {
  const response = await fetch('/api/programs/?page=1&items_on_page=4');
  const result = await response.json();
  console.log(result);
  dispatch(setProgram(result.items, result.page_count, 1));
};

export const getItem = (id) => async (dispatch, getState) => {
  const response = await fetch(`/api/programs/${id}`);
  const result = await response.json();
  dispatch(setItem(result));
};

export const getCurrentPage = (page) => async (dispatch, getState) => {
  const response = await fetch(`/api/programs/?page=${page}&items_on_page=4`);
  const result = await response.json();
  dispatch(setProgram(result.items, result.page_count, page));
};
