import { useDispatch, useSelector } from "react-redux";
import { useMount } from "react-use";
import { loadProductInfo } from "./redux/thunks";
import { AppDispatch } from "../../utils/types";
import { log } from "console";
import { getItemsInCart, getProductData } from "./redux/selector";

const Product = () => {
  const dispatch = useDispatch<AppDispatch>();
  const productData = useSelector(getProductData);
  const itemsInCart = useSelector(getItemsInCart);

  useMount(() => {
    dispatch(loadProductInfo());
  });

  return (
    <div className="product">
      <div className="flex flex-col">
        <div className=" bg-HeaderBackground lg:mx-20 my-4">
          <div className="flex flex-row-reverse mx-10 lg:mx-40 my-1">
            <button className="text-slate-500 text-xs">My Cart ( {itemsInCart.length} )</button>
          </div>
        </div>
        <div>
          <div className=" sm:flex flex-col mx-10 md:flex-row gap-10 lg:mx-60">
            <div className=" basis-1/2">
              <div className="sm:mx-5 xl:mx-10 2xl:mx-20"><img src={productData?.imageURL || undefined}></img></div>
              
            </div>
            <div className="basis-1/2 flex flex-col">
              <div className="my-6 text-PrimaryFont text-xl font-sans">{productData.title}</div>
              <div className="border-y py-2 border-BorderLightGrey text-PrimaryFont text-sm font-bold">
                ${productData.price}.00
              </div>
              <div className="my-3 text-SecondaryFont text-xs lg:my-6">
                {productData.description}
              </div>
              <div className="flex flex-col my-6">
                <label className="text-SecondaryFont text-xs mb-2">
                  SIZE<span className="text-RequiredSstar">*</span>
                </label>
                <div className="flex flex-row gap-1 text-xs">
                  {productData.sizeOptions.map(
                    (size:any) => (
                      <button className="w-10 h-10 border border-BorderLightGrey text-SecondaryFont hover:text-white hover:bg-BorderLightGrey">{size.label}</button>
                    )
                  ) }
                </div>
              </div>
              <div>
                <button className="border-2 border-BorderDarkGrey text-PrimaryFont px-4 py-2 font-bold hover:text-white hover:bg-BorderDarkGrey"
                onClick={}>
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
