import React from "react";
import Logo from "../../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
const Menu = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#Services",
  },
  {
    id: 3,
    name: "Kids wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Mens wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/#",
  },
];
const DropDownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({handleOrderPopup}) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative-z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2 ">
        <div className="container flex justify-between items-center">
          <div>
            <a
              href="#"
              className="text-bold text-2xl sm:text-3xl md:text-4xl flex gap-2"
            >
              <img src={Logo} alt="" className="w-14 uppercase" />
              Shopsy
            </a>
          </div>
          {/* Search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400"
              />
              <CiSearch
                size={18}
                className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-2"
              ></CiSearch>
            </div>
          </div>
          {/* Order button */}
          <button
            onClick={() => handleOrderPopup()}
            className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
          >
            <span className="group-hover:block hidden transition-all duration-200">
              Order
            </span>
            <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer"></FaShoppingCart>
          </button>
          {/* Dark Mode Section */}
          <div>
            <DarkMode />
          </div>
        </div>
      </div>
      {/* Lower Navbar */}
      <div  className="flex items-center justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => {
            return (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="inline-block px-4 hover:text-primary duration-200"
                >
                  {data.name}
                </a>
              </li>
            );
          })}
          {/* Simple dropdown and links */}
          <li className="relative group">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"></FaCaretDown>
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropDownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
