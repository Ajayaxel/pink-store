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
        <nav className="hidden md:flex space-x-6 text-black text-sm font-medium relative z-50">
          
          {/* SHOP */}
          <div className="relative group">
            <Link to="/shop" className="text-black">SHOP</Link>
            <div className="absolute top-full left-0 w-[600px] bg-white rounded-[10px] shadow-lg py-4 px-6 flex opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
              {/* Left Image */}
              <div className="w-[200px] pr-4">
                <img
                  src="https://assets.ajio.com/medias/sys_master/root/20230718/DElg/64b6be4aeebac147fc7726fb/-1117Wx1400H-466368522-black-MODEL.jpg"
                  alt="Shop Preview"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Right Links */}
              <div className="flex-1 grid grid-cols-2 p-4 gap-x-6 text-sm text-black">
                <div className="space-y-2">
                  <Link to="/Rectangle 11.png" className=" text-black block hover:text-[#c49a6c] font-medium">
                    Eid Collection 2025 <span className="text-pink-400 font-bold text-xs ml-1">New</span>
                  </Link>
                  <Link to="/shop/girls" className="text-black block hover:text-[#c49a6c]">Girls</Link>
                  <Link to="/shop/baba" className="text-black block hover:text-[#c49a6c]">Baba & Me</Link>
                </div>
                <div className="space-y-2">
                  <Link to="/shop/boys" className="text-black block hover:text-[#c49a6c]">Boys</Link>
                  <Link to="/shop/mommy" className="text-black block hover:text-[#c49a6c]">Mommy & Me</Link>
                  <Link to="/shop/all" className="text-black block hover:text-[#c49a6c]">View All</Link>
                </div>
              </div>
            </div>
          </div>

          {/* BESTSELLERS */}
          <div className="relative group">
            <Link to="/best-seller" className="text-black">BESTSELLERS</Link>
            <div className="absolute top-full left-0 w-[600px] bg-white rounded-[10px] shadow-lg py-4 px-6 flex opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
              <div className="w-[200px] pr-4">
                <img
                  src="/Rectangle 14.png"
                  alt="Bestseller Preview"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex-1 grid grid-cols-2 p-4 gap-x-6 text-sm text-black">
                <div className="space-y-2">
                  <Link to="/best-seller/top" className="text-black block hover:text-[#c49a6c]">Top Picks</Link>
                  <Link to="/best-seller/women" className="text-black block hover:text-[#c49a6c]">Women</Link>
                </div>
                <div className="space-y-2">
                  <Link to="/best-seller/men" className="text-black block hover:text-[#c49a6c]">Men</Link>
                  <Link to="/best-seller/all" className="text-black block hover:text-[#c49a6c]">View All</Link>
                </div>
              </div>
            </div>
          </div>

          {/* EXCLUSIVE COLLECTIONS */}
          <div className="relative group">
            <Link to="/exclusive-collection" className="text-black">EXCLUSIVE COLLECTIONS</Link>
            <div className="absolute top-full left-0 w-[600px] bg-white rounded-[10px] shadow-lg py-4 px-6 flex opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
              <div className="w-[200px] pr-4">
                <img
                  src="/Rectangle 4 (2).png"
                  alt="Exclusive Preview"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex-1 grid grid-cols-2 p-4 gap-x-6 text-sm text-black">
                <div className="space-y-2">
                  <Link to="/exclusive-collection/bridal" className="text-black block hover:text-[#c49a6c]">Bridal</Link>
                  <Link to="/exclusive-collection/luxury" className="text-black block hover:text-[#c49a6c]">Luxury</Link>
                </div>
                <div className="space-y-2">
                  <Link to="/exclusive-collection/limited" className="text-black block hover:text-[#c49a6c]">Limited Edition</Link>
                  <Link to="/exclusive-collection/all" className="text-black block hover:text-[#c49a6c]">View All</Link>
                </div>
              </div>
            </div>
          </div>
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
          <button onClick={() => setIsMenuOpen(false)} className="text-black text-2xl self-end">
            <HiX />
          </button>
          <nav className="mt-5 flex flex-col space-y-4 text-black text-sm font-medium">
            <Link to="/shop" className="text-black" onClick={() => setIsMenuOpen(false)}>SHOP</Link>
            <Link to="/best-seller" className="text-black" onClick={() => setIsMenuOpen(false)}>BESTSELLERS</Link>
            <Link to="/exclusivecollections" className="text-black" onClick={() => setIsMenuOpen(false)}>EXCLUSIVE COLLECTIONS</Link>
          </nav>
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














