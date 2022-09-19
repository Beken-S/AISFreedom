import { combineReducers, legacy_createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import catalogReducer from './reducers/Catalog-reducer';
import moderatorReducer from './reducers/Moderator-reducer';

const rootReducer = combineReducers({
  catalog: catalogReducer,
  moderator: moderatorReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
