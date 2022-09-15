import {
  isLoading,
  setItem,
  setLicenses,
  setNormative,
  setArticles,
} from '../actions/Reference-actions';
import { ArticleAPI } from '../api/article-api';
import { LicensesAPI } from '../api/licenses-api';
import { NormativeAPI } from '../api/normative-api';

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

export const getNormative = () => async (dispatch) => {
  dispatch(isLoading(true));
  const data = await NormativeAPI.getNormative();
  dispatch(setNormative(data.items));
  //console.log('data', data.items)
  dispatch(isLoading(false));
};

export const getLicense = (id) => async (dispatch) => {
  dispatch(isLoading(true));
  const license = await LicensesAPI.getLicense(id);
  dispatch(setItem(license));
  dispatch(isLoading(false));
};
