import {
  isLoading,
  setLicenses,
  setNormative,
  setArticles,
  setNormativeDoc,
  setArticlesADoc,
  setDepartments,
} from '../actions/Reference-actions';
import { ArticleAPI } from '../api/article-api';
import { DepartmentsAPI } from '../api/departments-api';
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
  dispatch(setArticles(data));
  //console.log('art', data.items);
  dispatch(isLoading(false));
};

export const getDepartments = () => async (dispatch) => {
  dispatch(isLoading(true));
  const data = await DepartmentsAPI.getDepartments();
  dispatch(setDepartments(data));
  dispatch(isLoading(false));
};

export const getNormative =
  (page = 1) =>
  async (dispatch, getState) => {
    dispatch(isLoading(true));
    const itemsOnPage = getState().reference.itemsOnPage;
    const data = await NormativeAPI.getNormative(itemsOnPage, page);
    dispatch(setNormative(data.items, data.page_count));
    //console.log('data', data.items)
    dispatch(isLoading(false));
  };

export const getNormativedoc = (file_name) => async (dispatch) => {
  dispatch(isLoading(true));
  const data = await NormativeAPI.getNormativeDoc(file_name);
  dispatch(setNormativeDoc(data));
  dispatch(isLoading(false));
};

export const getArticlesdoc = (file_name) => async (dispatch) => {
  dispatch(isLoading(true));
  const data = await ArticleAPI.getArticleDoc(file_name);
  dispatch(setArticlesADoc(data));
  dispatch(isLoading(false));
};

// export const getLicense = (id) => async (dispatch) => {
//   dispatch(isLoading(true));
//   const license = await LicensesAPI.getLicense(id);
//   dispatch(setItem(license));
//   dispatch(isLoading(false));
// };
