import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Tittle from "./Tittle";
import ProductItem from "./ProductItem";

function LatestCollectiom() {
  const { products } = useContext(ShopContext);
  const [latestProduct, setLatestProduct] = useState([]);
  useEffect(() => {
    setLatestProduct(products.slice(0, 10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="my-10">
      <div className="py-8 text-center text-3xl">
        <Tittle text1={`LATEST`} text2={`COLLECTION`} />
        <p className="m-auto w-3/4 text-sm text-gray-600 md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, a?
        </p>
      </div>
      {/* Rendering Products */}
      <div className="sm-grid-cols-3 grid grid-cols-2 gap-4 gap-y-6 md:grid-cols-4 lg:grid-cols-5">
        {latestProduct.map((item, index) => {
          return (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default LatestCollectiom;
