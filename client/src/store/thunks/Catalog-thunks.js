import {
  isLoading,
  reset,
  searchPrograms,
  setItem,
  setProgram,
  setSearchText,
  setError,
  filterPrograms,
  setCurrentPage,
} from '../actions/Catalog-actions';
import { PromramsAPI } from '../api/programs-api';
import { SearchAPI } from '../api/search-api';

export const getPrograms = (page) => async (dispatch, getState) => {
  dispatch(isLoading(true));
  const itemsOnPage = getState().catalog.itemsOnPage;
  const data = await PromramsAPI.getPrograms(itemsOnPage, page);
  dispatch(setProgram(data.items, data.page_count, 1));
  dispatch(isLoading(false));
};

export const getProgram = (id) => async (dispatch) => {
  dispatch(isLoading(true));
  const data = await PromramsAPI.getProgram(id);
  dispatch(setItem(data));
  dispatch(isLoading(false));
};

export const search =
  (page = 1) =>
  async (dispatch, getState) => {
    dispatch(isLoading(true));
    const text = getState().catalog.searchText;
    const data = await SearchAPI.search(text, page);
    dispatch(setSearchText(text));
    dispatch(searchPrograms(data.items, data.page_count, 1));
    dispatch(isLoading(false));
  };

export const resetSearch = () => async (dispatch, getState) => {
  dispatch(isLoading(true));
  dispatch(reset());
  const itemsOnPage = getState().catalog.itemsOnPage;
  const data = await PromramsAPI.getPrograms(itemsOnPage);
  dispatch(setCurrentPage(1));
  dispatch(setProgram(data.items, data.page_count, 1));
  dispatch(isLoading(false));
};
export const filterProgramsThunk =
  (page = 1) =>
  async (dispatch, getState) => {
    dispatch(isLoading(true));
    const itemsOnPage = getState().catalog.itemsOnPage;
    const formData = getState().catalog.filterData;
    debugger;
    const data = await SearchAPI.filter(
      formData.text,
      formData.Analog,
      formData.PO,
      formData.class,
      formData.os,
      itemsOnPage,
      page
    );
    debugger;
    if (typeof data === 'string') {
      dispatch(setError(data));
    } else {
      debugger;
      dispatch(filterPrograms(data.items, data.page_count, page));
    }
    dispatch(isLoading(false));
  };

export const setCurrentPageThunk = (page) => async (dispatch) => {
  debugger;
  dispatch(setCurrentPage(page));
  console.log(page);
};
