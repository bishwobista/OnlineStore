import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useSelector } from "react-redux";


const Navbar = () => {
  //responsive menu using react-icons

  const items = useSelector((state: any) => {
    return state.cart;
  });

  return (

    <>
    <header
    className="i py-4 px-8 bg-white shadow-md"
    >
      <nav 
      className="flex justify-between items-center"
      >
        <a href="/"
        className="text-2xl font-bold text-gray-800 lg:text-3xl hover:text-gray-700"
        >
          Online Store
        </a>
        <ul
        className=" lg:flex lg:flex-row lg:space-x-8"
        >
          <li
          className="text-gray-700 font-medium text-base hover:text-gray-600"
          >
            <NavLink
              to="/"
            
            >
              Home
            </NavLink>
          </li>
          <li
          className="text-gray-700 font-medium text-base hover:text-gray-600"
          >
            <NavLink
              to="/cart"
            
            >
              <AiOutlineShoppingCart className="text-xl mr-2" />
              
            </NavLink>
          </li>
          <li
          className="text-gray-700 font-medium text-base hover:text-gray-600"
          >
            <span
            className="flex items-center"
            >{items.length} </span>
          </li>
          <li
          className="text-gray-700 font-medium text-base hover:text-gray-600"
          >
            <NavLink
              to="/search"
              >
                <input 
            className="border border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search" placeholder="Search..." />
              </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    
    </>
  );
};

export default Navbar;
