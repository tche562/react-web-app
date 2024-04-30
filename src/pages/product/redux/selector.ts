import { RootState } from "../../../utils/types";

export const getProductData = (state: RootState) => state.product;
export const getItemsInCart = (state: RootState) => state.product.itemsInCart;
