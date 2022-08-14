import { combineReducers, legacy_createStore } from "redux";
import { searchReducer } from "./reducers/search-reducer";

const reducers = combineReducers({ soft: searchReducer });
export const store = legacy_createStore(reducers);
