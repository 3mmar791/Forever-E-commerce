import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import CartTotal from "../Components/CartTotal";
import Tittle from "../Components/Tittle";
import { ShopContext } from "../Context/ShopContext";

const Placeholder = () => {
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(ShopContext);
  useEffect(() => {
    console.log(method);
  }, [method]);
  return (
    <div className="flex min-h-[80vh] flex-col justify-between gap-4 border-t pt-5 sm:flex-row sm:pt-14">
      {/* Left Side */}
      <div className="flex w-full flex-col gap-4 sm:max-w-[480px]">
        <div className="sm-text-2xl my-3 text-xl">
          <Tittle text1={`DELIVERY`} text2={`INFORMATION`} />
        </div>
        <div className="flex gap-3">
          <input
            placeholder="First Name"
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="text"
          />
          <input
            placeholder="Last Name"
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="text"
          />
        </div>
        <input
          placeholder="Email Address"
          className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          type="email"
        />
        <input
          placeholder="Street"
          className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          type="text"
        />
        <div className="flex gap-3">
          <input
            placeholder="City"
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="text"
          />
          <input
            placeholder="State"
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="text"
          />
        </div>
        <div className="flex gap-3">
          <input
            placeholder="Zipcode"
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="number"
          />
          <input
            placeholder="Country"
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="text"
          />
        </div>
        <input
          placeholder="Phone"
          className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          type="number"
        />
      </div>
      {/* Right Side */}
      <div className="mt-8">
        <div className="mt-8 max-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Tittle text1={`PAYMENT`} text2={`METHOD`} />
          {/* Payment Method Selection */}
          <div className="flex flex-col gap-3 lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex cursor-pointer items-center gap-3 border p-2 px-3"
            >
              <p
                className={`h-3.5 min-w-3.5 rounded-full border ${method === "stripe" ? "bg-green-400" : ""}`}
              ></p>
              <img className="mx-4 h-5" src={assets.stripe_logo} alt="" />
            </div>

            <div
              onClick={() => setMethod("razorpay")}
              className="flex cursor-pointer items-center gap-3 border p-2 px-3"
            >
              <p
                className={`h-3.5 min-w-3.5 rounded-full border ${method === "razorpay" ? "bg-green-400" : ""}`}
              ></p>
              <img className="mx-4 h-5" src={assets.razorpay_logo} alt="" />
            </div>

            <div
              onClick={() => setMethod("cod")}
              className="flex cursor-pointer items-center gap-3 border p-2 px-3"
            >
              <p
                className={`h-3.5 min-w-3.5 rounded-full border ${method === "cod" ? "bg-green-400" : ""}`}
              ></p>
              <p className="mx-4 text-sm font-medium text-gray-500">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="mt-8 w-full text-end">
            <button
              onClick={() => navigate("/orders")}
              className="bg-black px-16 py-3 text-sm text-white"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeholder;
