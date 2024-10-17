import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function ProductItem({ id, image, name, price }) {
  const { currancy } = useContext(ShopContext);
  return (
    <div>
      <Link className="cursor-pointer text-gray-700" to={`/product/${id}`}>
        <div className="overflow-hidden">
          <img
            src={image[0]}
            className="ease-in-out hover:scale-110 hover:transition"
            alt=""
          />
        </div>
        <p className="pb-1 pt-3 text-sm">{name}</p>
        <p className="text-sm font-medium">
          {currancy} {price}
        </p>
      </Link>
    </div>
  );
}

export default ProductItem;
