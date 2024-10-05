import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../Components/RelatedProducts";
function Product() {
  const { productId } = useParams();
  const { products, currancy, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 opacity-100 transition-opacity duration-500 ease-in">
      <div className="flex flex-col gap-12 sm:flex-row sm:gap-12">
        {/* Product Images */}
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex justify-between overflow-x-auto sm:w-[11.9%] sm:flex-col sm:justify-normal sm:overflow-y-auto">
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                alt=""
                onClick={() => setImage(item)}
                className={`w-[24%] flex-shrink-0 cursor-pointer sm:mb-3 sm:w-full`}
              />
            ))}
          </div>

          <div className="w-full sm:w-[50%] md:pr-6">
            <img className="h-auto w-full" src={image} alt="" />
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <h1 className="mt-2 text-2xl font-medium">{productData.name}</h1>
            <div className="mt-2 flex items-center gap-1">
              <img src={assets.star_icon} alt="" className="5 w-3" />
              <img src={assets.star_icon} alt="" className="5 w-3" />
              <img src={assets.star_icon} alt="" className="5 w-3" />
              <img src={assets.star_icon} alt="" className="5 w-3" />
              <img src={assets.star_dull_icon} alt="" className="5 w-3" />
              <p className="pl-2">(122)</p>
            </div>
            <p className="mt-5 text-3xl font-medium">
              {currancy}
              {productData.price}
            </p>
            <p className="mt-5 text-gray-500 md:w-full">
              {productData.description}
            </p>
            <div className="my-8 flex flex-col gap-4">
              <p>Select Size</p>
              <div className="flex gap-2">
                {productData.sizes.map((item, index) => {
                  return (
                    <button
                      className={`border bg-gray-100 px-4 py-2 ${item === size ? "border-orange-500" : ""}`}
                      key={index}
                      onClick={() => setSize(item)}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
            <button
              className="bg-black px-8 py-3 text-sm text-white active:bg-gray-700"
              onClick={() => addToCart(productData._id, size)}
            >
              ADD TO CART
            </button>
            <hr className="mt-8 sm:w-4/5" />
            <div className="mt-5 flex flex-col gap-1 text-sm text-gray-500">
              <p>100% Orginal product.</p>
              <p>Cach on delivery ia availabe on this product.</p>
              <p>Easy returned exchange policy within 7 days.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm"> Revious (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            An e-commerce website is an online platform that focilitates the
            buying and seling of products or services over the internet. It
            serves as a virtuel marketplose where businesses and individuals can
            showcase their products, interoct with customers, and conduct
            transactions without the need for a physicel presence. E-commerce
            websites have gained immense popularity due to tiseir convenience,
            eccessibrity, and the globel reach they offer.
          </p>
          <p>
            E-commerce websites typically dispicy products or services clong
            with detated descriptions, imoges, prices, end cry available
            variations (0,., sizes, colors). Each product usuelly has its own
            dedicated poge with relevent information.
          </p>
        </div>
        {/* Display Related Products */}
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Product;
