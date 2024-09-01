import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="sticky top-0 z-20 block w-full max-w-full px-4 py-2 text-white bg-slate-950 border rounded-none shadow-md h-max border-black/80  backdrop-blur-2xl backdrop-saturate-200 md:px-8 md:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link
          to={"/"}
          className="mr-4 block cursor-pointer font-sans font-bold text-2xl leading-relaxed text-inherit antialiased"
        >
          Auction Hub
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden mr-4 md:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6">
              <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <Link to={"/live"} className="flex items-center">
                  Live Items
                </Link>
              </li>
              <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <Link to={"/archived"} className="flex items-center">
                  Archived Items
                </Link>
              </li>
              <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <Link to={"/about"} className="flex items-center">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-x-1">
            <Link to={"/signin"}>
              <button
                className="hidden px-4 py-2 font-sans text-xs font-bold text-center text-white-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md:inline-block"
                type="button"
              >
                <span>LOG IN</span>
              </button>
            </Link>
            <Link to={"/signup"}>
              <button
                className="hidden select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md:inline-block"
                type="button"
              >
                <span>Join Now</span>
              </button>
            </Link>
          </div>
          <button
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md:hidden"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
