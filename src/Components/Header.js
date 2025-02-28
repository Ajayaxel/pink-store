import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiBookmark } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";

const Header = ({ cart, setIsCartOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <header className="w-full h-[70px] bg-white px-[20px] md:px-[50px] relative">
      <div className="flex justify-between items-center py-3">
        {/* Left Section - Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-6 text-black text-sm font-medium">
          <Link to="/shop" className="text-black">SHOP</Link>
          <Link to="" className="text-black">BESTSELLERS</Link>
          <Link to="/exclusivecollections" className="text-black">EXCLUSIVE COLLECTIONS</Link>
        </nav>

        {/* Center Section - Logo */}
        <div className="flex-1 flex justify-center">
      <button onClick={() => navigate("/")} className="text-xl font-bold text-[#c49a6c] flex items-center">
        <img src="/New logo her pride gold black  1.png" alt="Logo" className="h-8 w-auto" />
      </button>
    </div>

        {/* Right Section - Icons (Hidden on Small Screens) */}
        <div className="hidden md:flex items-center space-x-5 text-black text-lg">
          <FiSearch className="cursor-pointer" />
          <FiBookmark className="cursor-pointer" />
          <h2 className="cursor-pointer text-sm font-medium text-black">ACCOUNT</h2>
          <h3 onClick={() => setIsCartOpen(true)} className="cursor-pointer text-sm font-medium text-black">
            CART ({cart.length})
          </h3>
          <h3 className="cursor-pointer text-sm font-medium text-black">
            <Link to="/login" className="text-black">LOGIN</Link>
          </h3>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden absolute left-4 text-black text-2xl"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Side Menu */}
      <div className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-md transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50 md:hidden`}>
        <div className="p-5 flex flex-col h-full">
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-black text-2xl self-end"
          >
            <HiX />
          </button>

          {/* Navigation Links */}
          <nav className="mt-5 flex flex-col space-y-4 text-black text-sm font-medium">
            <Link to="/shop" className="text-black" onClick={() => setIsMenuOpen(false)}>SHOP</Link>
            <Link to="" className="text-black" onClick={() => setIsMenuOpen(false)}>BESTSELLERS</Link>
            <Link to="/exclusivecollections" className="text-black" onClick={() => setIsMenuOpen(false)}>EXCLUSIVE COLLECTIONS</Link>
          </nav>

         

          {/* ACCOUNT, CART, and LOGIN inside Mobile Menu */}
          <div className="pt-2">
          <h2 className="cursor-pointer text-sm font-medium text-black" onClick={() => setIsMenuOpen(false)}>ACCOUNT</h2>
          <h3
            onClick={() => { setIsCartOpen(true); setIsMenuOpen(false); }}
            className="cursor-pointer text-sm pt-1 font-medium text-black"
          >
            CART ({cart.length})
          </h3>
          <h3 className="cursor-pointer text-sm pt-1 font-medium text-black">
            <Link to="/login" className="text-black" onClick={() => setIsMenuOpen(false)}>LOGIN</Link>
          </h3>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;












