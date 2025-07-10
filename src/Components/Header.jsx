import React from "react";
import vector from "../assets/Images/vector.svg";
const Header = ({ filter, setFilter }) => {
  return (
    <div className="text-center relative ">
      <img
        src={vector}
        alt=""
        className="pointer-events-none rotate-12 md:rotate-0 opacity-65 absolute top-0 -right-23 md:-right-5 w-[250px] z-0"
      />
      <div className="relative z-10">
        <p className="text-White font-bold text-2xl">Our Collection</p>
        <p className="text-Gray-100 max-w-[500px] my-5 mx-auto text-center">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly
        </p>
        <div className="font-semibold flex justify-center items-center gap-5">
          <button
            onClick={() => setFilter("all")}
            className={`text-White cursor-pointer p-2 rounded-md transition-all hover:border border-Gray ease-in-out duration-300 ${
              filter === "all" ? "bg-Gray " : ""
            }`}
          >
            All Products
          </button>
          <button
            onClick={() => setFilter("available")}
            className={`text-White cursor-pointer p-2 rounded-md hover:border border-Gray transition-all ease-in-out duration-300 ${
              filter === "available" ? "bg-Gray " : ""
            }`}
          >
            Available Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
