import {
  isLoading,
  setItem,
  setLicenses,
  setNormative,
  setArticles,
} from '../actions/Reference-actions';
import { ArticleAPI } from '../api/article-api';
import { LicensesAPI } from '../api/licenses-api';
import { NormativeAPI, NormativeDocumetsAPI } from '../api/normative-api';

export const getLicenses = () => async (dispatch) => {
  dispatch(isLoading(true));
  const data = await LicensesAPI.getLicenses();
  dispatch(setLicenses(data));
  dispatch(isLoading(false));
};

export const getArticles = () => async (dispatch) => {
  dispatch(isLoading(true));
  const data = await ArticleAPI.getArticle();
  dispatch(setArticles(data.items));
  //console.log('art', data.items);
  dispatch(isLoading(false));
};

export const getNormative =
  (page = 1) =>
  async (dispatch, getState) => {
    dispatch(isLoading(true));
    const itemsOnPage = getState().reference.itemsOnPage;
    const data = await NormativeDocumetsAPI.getNormative(itemsOnPage, page);
    dispatch(setNormative(data.items, data.page_count));
    //console.log('data', data.items)
    dispatch(isLoading(false));
  };

export const getNormativedoc = () => async (dispatch, getState) => {
  dispatch(isLoading(true));

  const data = await NormativeAPI.getNormativeDoc();
  dispatch(setNormative(data.items, data.page_count));
  //console.log('data', data.items)
  dispatch(isLoading(false));
};

export const getLicense = (id) => async (dispatch) => {
  dispatch(isLoading(true));
  const license = await LicensesAPI.getLicense(id);
  dispatch(setItem(license));
  dispatch(isLoading(false));
};
