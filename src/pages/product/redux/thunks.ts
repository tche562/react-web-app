import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductInfo } from "./api-request";

export const loadProductInfo: any = createAsyncThunk(
  "merchandise/loadProductInfo",
  async () => {
    try {
      const result: any = await getProductInfo();

      return result;
    } catch (error) {}
  }
);
