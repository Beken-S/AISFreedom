import { combineReducers, legacy_createStore } from 'redux';

import searchReducer from '@store/reducers/searchReducer';

const reducers = combineReducers({ soft: searchReducer });
export const store = legacy_createStore(reducers);
