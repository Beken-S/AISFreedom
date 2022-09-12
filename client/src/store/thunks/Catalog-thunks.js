import {
  isLoading,
  reset,
  setItem,
  setProgram,
  filterPrograms,
  setCurrentPage,
  setTypesPrograms,
  setAllOsPrograms,
} from '../actions/Catalog-actions';
import { PromramsAPI } from '../api/programs-api';
import { SearchAPI } from '../api/search-api';

export const getPrograms =
  (page = 1) =>
  async (dispatch, getState) => {
    dispatch(isLoading(true));
    const itemsOnPage = getState().catalog.itemsOnPage;
    const data = await PromramsAPI.getPrograms(itemsOnPage, page);
    // получение типа os
    const os = await PromramsAPI.getAllOsProgram();
    dispatch(setProgram(data.items, os, data.page_count));
    dispatch(setAllOsPrograms(os));
    dispatch(setCurrentPage(page));
    // получение всех типов программ
    const typesPrograms = await PromramsAPI.getAllTypesProgram();
    dispatch(setTypesPrograms(typesPrograms));
    dispatch(isLoading(false));
  };

export const getProgram = (id) => async (dispatch) => {
  dispatch(isLoading(true));
  // получение программы
  const program = await PromramsAPI.getProgram(id);
  // получение лицензии
  const license = await PromramsAPI.getLicense(program.license_id);
  // получение класса программы
  const classProgram = await PromramsAPI.getClassProgram(
    program.program_type_id
  );
  // получение типа os
  const os = program.sources.map((el) =>
    PromramsAPI.getOsProgram(el.operation_system_id)
  );
  let typeOs = await Promise.all(os).then((values) => {
    return values;
  });
  dispatch(setItem(program, license, classProgram, typeOs));
  dispatch(isLoading(false));
};

export const resetSearch = () => async (dispatch, getState) => {
  dispatch(isLoading(true));
  dispatch(reset());
  const itemsOnPage = getState().catalog.itemsOnPage;
  const data = await PromramsAPI.getPrograms(itemsOnPage);
  dispatch(setCurrentPage(1));
  // получение типа os
  const os = await PromramsAPI.getAllOsProgram();
  dispatch(setProgram(data.items, os, data.page_count));
  dispatch(isLoading(false));
};
export const filterProgramsThunk =
  (page = 1) =>
  async (dispatch, getState) => {
    dispatch(isLoading(true));
    const itemsOnPage = getState().catalog.itemsOnPage;
    const formData = getState().catalog.filterData;
    const data = await SearchAPI.filter(
      formData.text,
      formData.Analog,
      formData.PO,
      formData.class,
      formData.os,
      itemsOnPage,
      page
    );
    dispatch(setCurrentPage(page));
    dispatch(filterPrograms(data.items, data.page_count, page));
    dispatch(isLoading(false));
  };

export const setCurrentPageThunk = (page) => async (dispatch) => {
  dispatch(setCurrentPage(page));
};
