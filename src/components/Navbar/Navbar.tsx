import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useSelector } from "react-redux";
import { FaStore } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'
import { useState, useEffect } from "react";

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    });
  }
    , []);
  //responsive menu using react-icons

  const items = useSelector((state: any) => {
    return state.cart;
  });

  return (
      <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>

        <div className="container mx-auto flex items-center justify-between h-full ">
          <NavLink to="/">
            <div className="flex flex-row items-center justify-center">
              <FaStore className="w-[40px] mw-auto text-5xl mx-3  " />
              <h1 className="font-bold text-3xl font-serif">Online Store</h1>
            </div>
          </NavLink>
          <NavLink to="/search">
            <div className="flex flex-row items-center text-xl">
            <BsSearch/>
            <span className="ml-2 font-bold border-b-2 border-black"
            >Search</span>
            </div>
          </NavLink>
          <NavLink to="/cart">
          <div className="cursor-pointer flex relative ">
            <AiOutlineShoppingCart className="text-2xl" />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {items.length}
            </div>
          </div>
          </NavLink>
          
        </div>
      </header>
  );
};

export default Navbar;
