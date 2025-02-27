import React from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiBookmark } from "react-icons/fi";

const Header = ({ cart, setIsCartOpen }) => {
  return (
    <header className="w-full h-[70px] bg-white px-[50px] relative">
      <div className="flex justify-between items-center py-3">
        {/* Left Section - Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-black text-sm font-medium">
          <Link to="/shop" className="text-black">SHOP</Link>
          <Link to="" className="text-black">BESTSELLERS</Link>
          <Link to="/exclusivecollections" className="text-black">EXCLUSIVE COLLECTIONS</Link>
        </nav>

        {/* Center Section - Logo */}
        <div className="text-center">
          <a href="/home" className="text-xl font-bold text-[#c49a6c] flex items-center">
            <img src="/New logo her pride gold black  1.png" alt="Logo" className="h-8 w-auto mr-2" />
          </a>
        </div>

        {/* Right Section - Icons */}
        <div className="flex items-center space-x-5 text-black text-lg">
          <FiSearch className="cursor-pointer" />
          <FiBookmark className="cursor-pointer hidden md:block" />
          <h2 className="cursor-pointer text-sm font-medium text-black">ACCOUNT</h2>

          {/* ✅ Click here to open Cart Drawer */}
          <h3 onClick={() => setIsCartOpen(true)} className="cursor-pointer text-sm font-medium text-black">
            CART ({cart.length})
          </h3>
    
          <h3 className="cursor-pointer text-sm font-medium text-black">
            <Link to="/login" className="text-black">LOGIN</Link>
          </h3>
         


        </div>
      </div>
    </header>
  );
};

export default Header;









