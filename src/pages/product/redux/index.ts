import { createSlice } from "@reduxjs/toolkit";
import { loadProductInfo } from "./thunks";
import { API_REQUEST_STATUS } from "../../../utils/constants";

const initialState = {
  title: "default",
  description: "Here should be the description for product",
  price: 0,
  imageURL: null,
  sizeOptions: [],
};

export const { reducer, actions } = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadProductInfo.pending.type, (state: any) => {
      state.loadProductInfoStatus = API_REQUEST_STATUS.PENDING;
    });
    builder.addCase(
      loadProductInfo.fulfilled.type,
      (state: any, { payload }) => {
        state.loadProductInfoStatus = API_REQUEST_STATUS.FULFILLED;
        const data = payload.data;
        console.log(data, "data");
      }
    );
    builder.addCase(loadProductInfo.rejected.type, (state: any) => {
      state.loadProductInfoStatus = API_REQUEST_STATUS.REJECTED;
    });
  },
});

export default reducer;
