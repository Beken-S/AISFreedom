import {
  combineReducers,
  legacy_createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducers/Auth-reducer';
import catalogReducer from './reducers/Catalog-reducer';
import moderatorReducer from './reducers/Moderator-reducer';
import referenceReducer from './reducers/Reference-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  catalog: catalogReducer,
  reference: referenceReducer,
  moderator: moderatorReducer,
});
export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
