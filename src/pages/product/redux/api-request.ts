import { get } from "../../../services/api";

export const getProductInfo = async () => {
  try {
    const result: any = await get(`/live/product`, {}, {});
    return result;
  } catch (error) {
    throw new Error("get product info failed");
  }
};
