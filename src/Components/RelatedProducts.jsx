import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Tittle from "../Components/Tittle";
import ProductItem from "../Components/ProductItem";

// eslint-disable-next-line react/prop-types
function RelatedProducts({ category, subCategory }) {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter(
        (item) =>
          item.category === category && item.subCategory === subCategory,
      );
      setRelated(productsCopy.slice(0, 5));
    }
  }, [category, products, subCategory]);
  return (
    <div className="my-24">
      <div className="py-2 text-center text-3xl">
        <Tittle text1={`RELATED`} text2={`PRODUCTS`} />
      </div>
      <div className="grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {related.map((item, index) => {
          return (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RelatedProducts;
