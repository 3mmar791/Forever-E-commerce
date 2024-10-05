import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Tittle from "./Tittle";
import ProductItem from "./ProductItem";

function BestSeller() {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  useEffect(() => {
    const bestProducts = products.filter((item) => item.bestseller);
    setBestSeller(bestProducts.slice(0, 5));
  }, []);

  return (
    <div className="my-10">
      <div className="py-8 text-center text-3xl">
        <Tittle text1={`BEST`} text2={`SELLER`} />
        <p className="m-auto w-3/4 text-xs text-gray-600 sm:text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, a?
        </p>
      </div>
      {/* Rendering Products */}
      <div className="sm-grid-cols-3 grid grid-cols-2 gap-4 gap-y-6 md:grid-cols-4 lg:grid-cols-5">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
