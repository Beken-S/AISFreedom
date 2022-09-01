import { combineReducers, legacy_createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import catalogReducer from './reducers/Catalog-reducer';

const rootReducer = combineReducers({ catalog: catalogReducer });
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
