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

  return (
    <div className="product">
      <div className="flex flex-col">
        <div className=" bg-slate-200 mx-20 my-4">
          <div className="flex flex-row-reverse mx-60 my-1">
            <button className="text-slate-500 text-xs">{"My Cart"}</button>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-10 mx-80">
            <div className=" basis-1/2">
              <div className="mx-20"><img src={productData?.imageURL || undefined}></img></div>
              
            </div>
            <div className="basis-1/2 flex flex-col">
              <div className="my-6 text-xl">{productData.title}</div>
              <div className="border-y-2  border-lightGrey py-2">
                ${productData.price}
              </div>
              <div className="my-3 text-paragraph text-xs">
                {productData.description}
              </div>
              <div className="flex flex-col my-3">
                <label className="text-slate-500">
                  SIZE<span className="text-red-600">*</span>
                </label>
                <div className="flex flex-row gap-2 text-xs">
                  {productData.sizeOptions.map(
                    (size:any) => (
                      <button className="w-10 h-10 border-2 border-slate-500 text-slate-500">{size.label}</button>
                    )
                  ) }
                </div>
              </div>
              <div>
                <button className="border-2 border-black text-black px-4 py-2 font-bold hover:text-white hover:bg-black">
                  {"ADD TO CART"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
