import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as product } from "../../pages/product/redux";

export const reducer = combineReducers({
  product,
});

const store = configureStore({
  reducer,
});

export default store;
