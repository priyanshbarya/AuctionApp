import React from "react";
import { Link } from "react-router-dom";

const ContentSection = ({ operator }) => {
  return (
    <div className="mt-[50px] pt-[6px] flex flex-col items-center">
      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-4/5 h-[5px] my-8 bg-gray-800 border-0 " />
        <span class="absolute px-3 font-extrabold md:text-3xl text-gray-800 -translate-x-1/2 bg-white left-1/2 ">
          {operator.toUpperCase() + " "} ITEMS
        </span>
      </div>
      <div class="font-[sans-serif] bg-gray-100">
        <div class="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
          <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-xl:gap-4 gap-6">
            <div class="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
              <div class="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                <img
                  src="https://readymadeui.com/images/product9.webp"
                  alt="Product 1"
                  class="h-full w-full object-contain"
                />
              </div>

              <div>
                <h3 class="text-lg font-extrabold text-gray-800">
                  Sole Elegance
                </h3>
                <p class="text-gray-600 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4 class="text-lg text-gray-800 font-bold mt-4">$10</h4>
              </div>
            </div>
            <div class="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
              <div class="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                <img
                  src="https://readymadeui.com/images/product9.webp"
                  alt="Product 1"
                  class="h-full w-full object-contain"
                />
              </div>

              <div>
                <h3 class="text-lg font-extrabold text-gray-800">
                  Sole Elegance
                </h3>
                <p class="text-gray-600 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4 class="text-lg text-gray-800 font-bold mt-4">$10</h4>
              </div>
            </div>
            <div class="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
              <div class="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                <img
                  src="https://readymadeui.com/images/product9.webp"
                  alt="Product 1"
                  class="h-full w-full object-contain"
                />
              </div>

              <div>
                <h3 class="text-lg font-extrabold text-gray-800">
                  Sole Elegance
                </h3>
                <p class="text-gray-600 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4 class="text-lg text-gray-800 font-bold mt-4">$10</h4>
              </div>
            </div>
            <div class="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
              <div class="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                <img
                  src="https://readymadeui.com/images/product9.webp"
                  alt="Product 1"
                  class="h-full w-full object-contain"
                />
              </div>

              <div>
                <h3 class="text-lg font-extrabold text-gray-800">
                  Sole Elegance
                </h3>
                <p class="text-gray-600 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4 class="text-lg text-gray-800 font-bold mt-4">$10</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to={"/" + operator}>
        <button class="mt-4 ease-in-out duration-300 bg-transparent text-black border border-black rounded-full  py-2 px-4 hover:bg-black hover:text-white">
          See all
          {" " +
            operator.charAt(0).toUpperCase() +
            operator.slice(1) +
            " "}
          Items
        </button>
      </Link>
    </div>
  );
};

export default ContentSection;
