import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  const [visable, setVisable] = useState(false);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("collection") && showSearch) {
      setVisable(true);
    } else {
      setVisable(false);
    }
  }, [location, showSearch]);
  return showSearch && visable ? (
    <div className="border-b border-t bg-gray-50 text-center">
      <div className="mx-3 my-5 inline-flex w-3/4 items-center justify-center rounded-full border border-gray-400 px-5 py-2 sm:w-1/2">
        <input
          className="flex-1 bg-inherit text-sm outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
        />
        <img className="w-4" src={assets.search_icon} alt="" />
      </div>
      <img
        src={assets.cross_icon}
        className="inline w-3 cursor-pointer"
        onClick={() => setShowSearch(false)}
        alt=""
      />
    </div>
  ) : null;
}

export default SearchBar;
