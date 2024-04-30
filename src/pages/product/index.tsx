import { useDispatch } from "react-redux";
import { useMount } from "react-use";
import { loadProductInfo } from "./redux/thunks";

const Product = () => {
  const dispatch = useDispatch();

  useMount(() => {
    dispatch(loadProductInfo());
  });

  return(
    <div></div>
  );
};

export default Product;
