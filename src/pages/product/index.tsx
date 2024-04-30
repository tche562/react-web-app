import { useDispatch, useSelector } from "react-redux";
import { useMount } from "react-use";
import { loadProductInfo } from "./redux/thunks";
import { AppDispatch } from "../../utils/types";
import { log } from "console";
import { getProductData } from "./redux/selector";

const Product = () => {
  const dispatch = useDispatch<AppDispatch>();
  const productData = useSelector(getProductData);
 console.log(productData);
 
  useMount(() => {
    dispatch(loadProductInfo());
  });

  return <div>successful</div>;
};

export default Product;
