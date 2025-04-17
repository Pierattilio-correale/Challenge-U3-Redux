import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../Reducers";
import fetchArrayReducer from "../Reducers/fetchArray";

const uniqueReducer = combineReducers({
  company: mainReducer,
  fetch: fetchArrayReducer,
});

const store = configureStore({
  reducer: uniqueReducer,
});

export default store;
