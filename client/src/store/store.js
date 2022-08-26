import { combineReducers, legacy_createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import searchReducer from '@store/reducers/searchReducer';

const reducers = combineReducers({ soft: searchReducer });
export const store = legacy_createStore(reducers, applyMiddleware(thunk));
