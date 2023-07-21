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
    <header className="text-gray-600 body-font">
      <nav className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <NavLink to="/" className="text-2xl font-bold text-gray-800 lg:text-3xl hover:text-gray-700">
            Online Store
          </NavLink>
          <ul className="lg:flex lg:flex-row lg:space-x-8">
            <li className="text-gray-700 font-medium text-base hover:text-gray-600">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-gray-700 font-medium text-base hover:text-gray-600">
              <NavLink to="/search">
                Search
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <NavLink to="/cart">
            <span className="relative inline-block">
              <AiOutlineShoppingCart className="text-xl" />
              {items.length > 0 && (
                <sup className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-xs">{items.length}</sup>
              )}
            </span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
