import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

const ProductList = ({ CoffeeDatas, filter }) => {
  const productsFiltered =
    filter === "available"
      ? CoffeeDatas.filter((item) => item.available)
      : CoffeeDatas;
  return (
    <div className="mt-7 px-5  grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
      {productsFiltered.map((coffee) => {
        return (
          <div key={coffee.id} className=" flex flex-col gap-3 ">
            <div className="relative">
              <img src={coffee.image} alt="" className="rounded-lg object-cover w-full" />
              {coffee.popular && (
                <p className="absolute left-2 top-2 text-xs rounded-full bg-Btn-Yellow p-2 py-0.5 font-semibold shadow-md">
                  Popular
                </p>
              )}
            </div>
            <div className="flex items-center justify-between sm:gap-2">
              <p className="text-White font-bold text-lg max-w-[150px] truncate">{coffee.name}</p>
              <p className="bg-Btn-Price px-2 py-0.5 text-sm font-bold rounded-md">
                {coffee.price}
              </p>
            </div>
            <div className="flex items-center justify-between -mt-2">
              <div className="flex items-center gap-3">
                {coffee.votes === 0 ? (
                  <FaRegStar className="text-Gray-100 font-bold " />
                ) : (
                  <FaStar className="text-Btn-Yellow " />
                )}
                <p className="text-White font-bold truncate sm:text-sm ">
                  {coffee.rating}{" "}
                  {coffee.votes === 0 ? (
                    <span className="text-Gray-100 text-sm">No ratings</span>
                  ) : (
                    <span className="text-Gray-100 ">
                      ({coffee.votes} votes)
                    </span>
                  )}
                </p>
              </div>
              {!coffee.available && (
                <p className="text-Orange font-semibold text-sm truncate sm:ml-2 ">Sold out</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
