import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Tittle from "../Components/Tittle";
import { assets } from "../assets/assets";
import CartTotal from "../Components/CartTotal";

const Cart = () => {
  const { products, currancy, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);
  return (
    <div className="border-t pt-14">
      <div className="mb-3 text-2xl">
        <Tittle text1={`YOUR`} text2={`CART`} />

        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id,
          );
          return (
            <div
              key={index}
              className="grid grid-cols-[4fr_0.5fr_0.5fr] items-center gap-4 border-t py-4 text-gray-700 sm:grid-cols-[4fr_2fr_0.5fr]"
            >
              <div className="flex gap-6">
                <img
                  src={productData.image[0]}
                  className="w-16 sm:w-20"
                  alt=""
                />
                <div>
                  <p className="text-sm font-medium sm:text-lg">
                    {productData.name}
                  </p>
                  <div className="mt-2 flex items-center gap-5">
                    <p>
                      {currancy}
                      {productData.price}
                    </p>
                    <p className="border bg-slate-50 px-2 sm:px-3 sm:py-1">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <input
                  className="max-w-10 border px-1 py-1 sm:max-w-20 sm:px-2"
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(
                          item._id,
                          item.size,
                          Number(e.target.value),
                        )
                  }
                />
              </div>
              <img
                className="mr-4 w-4 cursor-pointer sm:w-5"
                src={assets.bin_icon}
                alt=""
                onClick={() => updateQuantity(item._id, item.size, 0)}
              />
            </div>
          );
        })}
      </div>
      <div className="my-20 flex justify-end">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="my-8 bg-black px-8 py-3 text-sm text-white transition ease-in-out hover:opacity-80"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
