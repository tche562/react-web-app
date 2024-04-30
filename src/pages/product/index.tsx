import { useDispatch } from "react-redux";
import { useMount } from "react-use";
import { loadProductInfo } from "./redux/thunks";
import { AppDispatch } from "../../utils/types";
import { log } from "console";

const Product = () => {
  const dispatch = useDispatch<AppDispatch>();
 
  useMount(() => {
    dispatch(loadProductInfo());
  });

  return <div>successful</div>;
};

export default Product;
