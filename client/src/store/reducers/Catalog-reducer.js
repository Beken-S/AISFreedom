import {
  RESET_SEARCH,
  SET_PROGRAM,
  SET_ITEM,
  IS_LOADING,
  SET_ERROR,
  FILTER_PROGRAM,
  SET_CURRENT_PAGE,
  SET_FILTER_DATA,
  SET_TYPES_PROGRAMS,
  SET_OS_PROGRAMS,
} from '../actions/Catalog-actions';

const initialState = {
  filtered: [],
  programs: [],
  item: {},
  isLoading: false,
  isFilter: false,
  filterData: {},
  itemsOnPage: 4,
  error: '',
  currentPage: 1,
  portionPage: 5,
  license: null,
  classProgram: null,
  typeOs: null,
  typesPrograms: null,
  allOs: null,
};
const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_SEARCH:
      return {
        ...state,
        filtered: [],
        isFilter: false,
        filterData: {},
        error: '',
        currentPage: 1,
        typeOs: null,
      };

    case SET_PROGRAM:
      return {
        ...state,
        programs: action.programs,
        typeOs: action.typeOs,
        totalCountPages: action.totalCountPages,
        error: '',
      };
    case SET_ITEM:
      return {
        ...state,
        item: action.item,
        license: action.license,
        classProgram: action.classProgram,
        typeOs: action.typeOs,
      };
    case FILTER_PROGRAM:
      return {
        ...state,
        filtered: action.programs,
        totalCountPages: action.totalCountPages,
        isFilter: true,
        error: '',
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case SET_ERROR: {
      return { ...state, error: action.error };
    }
    case SET_FILTER_DATA: {
      return { ...state, filterData: action.data };
    }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TYPES_PROGRAMS:
      return {
        ...state,
        typesPrograms: action.typesPrograms,
      };
    case SET_OS_PROGRAMS:
      return {
        ...state,
        allOs: action.os,
      };
    default:
      return state;
  }
};

export default catalogReducer;
