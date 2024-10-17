import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
function Navbar() {
  const [visable, setVisable] = useState(false);
  const { setShowSearch, getCartCount , navigate } = useContext(ShopContext);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to={`/`}>
        <img src={assets.logo} className="w-36" alt="" />
      </Link>
      <ul className="hidden gap-5 text-sm text-gray-700 sm:flex">
        <li>
          <NavLink className="flex flex-col items-center gap-1" to="/">
            <p>HOME</p>
            <hr className="hidden h-[1.5px] w-2/4 border-none bg-gray-700" />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex flex-col items-center gap-1"
            to="/collection"
          >
            <p>COLLECTION</p>
            <hr className="hidden h-[1.5px] w-2/4 border-none bg-gray-700" />
          </NavLink>
        </li>
        <li>
          <NavLink className="flex flex-col items-center gap-1" to="/about">
            <p>ABOUT</p>
            <hr className="hidden h-[1.5px] w-2/4 border-none bg-gray-700" />
          </NavLink>
        </li>
        <li>
          <NavLink className="flex flex-col items-center gap-1" to="/contact">
            <p>CONTACT</p>
            <hr className="hidden h-[1.5px] w-2/4 border-none bg-gray-700" />
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt=""
        />
        <div className="group relative">
          <Link to={`/login`}>
            <img
              src={assets.profile_icon}
              className="w-5 cursor-pointer"
              alt=""
            />
          </Link>
          <div className="dropdown-menu absolute right-0 hidden pt-4 group-hover:block">
            <div className="flex w-36 flex-col gap-2 bg-slate-100 px-5 py-3 text-gray-500">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black" onClick={()=>navigate("/orders")}>Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute bottom-[-5px] right-[-5px] aspect-square w-4 rounded-full bg-black text-center text-[8px] leading-4 text-white">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisable(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>
      {/* Sidebar menu for small screen */}
      <div
        className={`absolute right-0 top-0 overflow-hidden bg-white transition-all ${
          visable ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisable(false)}
            className="flex cursor-pointer items-center gap-4 p-4"
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisable(false)}
            className="border py-2 pl-6 hover:bg-gray-200"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisable(false)}
            className="border py-2 pl-6 hover:bg-gray-200"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisable(false)}
            className="border py-2 pl-6 hover:bg-gray-200"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisable(false)}
            className="border py-2 pl-6 hover:bg-gray-200"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
