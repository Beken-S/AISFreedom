import searchReducer from '@store/reducers/searchReducer';
import { combineReducers, legacy_createStore } from 'redux';

const reducers = combineReducers({ soft: searchReducer });
export const store = legacy_createStore(reducers);
