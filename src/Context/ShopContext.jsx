import { createContext, useCallback, useMemo, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currancy = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setcartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = useCallback(
    async (itemId, size) => {
      if (!size) {
        toast.error("Select Product Size");
        return;
      }
      let cartData = structuredClone(cartItems);
      if (cartItems[itemId]) {
        if (cartData[itemId][size]) {
          cartData[itemId][size] += 1;
        } else {
          cartData[itemId][size] = 1;
        }
      } else {
        cartData[itemId] = { [size]: 1 };
      }
      setcartItems(cartData);
    },
    [cartItems],
  );

  const getCartCount = useCallback(() => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
    return totalCount;
  }, [cartItems]);

  const updateQuantity = useCallback(
    async (itemId, size, quantity) => {
      let cartData = structuredClone(cartItems);
      cartData[itemId][size] = quantity;
      setcartItems(cartData);
    },
    [cartItems],
  );

  const getCartAmount = useCallback(() => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = null;
      products.forEach((product) => {
        if (product._id === items) {
          itemInfo = product;
        }
      });
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          console.error(error);
        }
      }
    }

    return totalAmount;
  }, [cartItems]);

  const value = useMemo(
    () => ({
      products,
      currancy,
      delivery_fee,
      search,
      setSearch,
      showSearch,
      setShowSearch,
      cartItems,
      addToCart,
      getCartCount,
      updateQuantity,
      getCartAmount,
      navigate,
    }),
    [
      delivery_fee,
      search,
      setSearch,
      showSearch,
      setShowSearch,
      cartItems,
      addToCart,
      getCartCount,
      updateQuantity,
      getCartAmount,
      navigate,
    ],
  );

  return (
    // eslint-disable-next-line react/prop-types
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
