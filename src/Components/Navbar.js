import React from "react";

const Navbar = () => {
    return (
        <div className="w-full h-[50px] text-black flex justify-center items-center bg-[#FCDEE1]  
                        hidden sm:flex">  
            <nav className="flex space-x-4 md:space-x-6 text-black text-sm font-medium overflow-x-auto px-4">
                <a href="/party-wears" className="text-black font-medium text-[14px] md:text-[16px] whitespace-nowrap">Partttty Wears</a>
                <a href="/semi-party-wears" className="text-black font-medium text-[14px] md:text-[16px] whitespace-nowrap">Semi-Party Wears</a>
                <a href="#" className="text-black font-medium text-[14px] md:text-[16px] whitespace-nowrap">Co-ord Sets</a>
                <a href="#" className="text-black font-medium text-[14px] md:text-[16px] whitespace-nowrap">Indo-Western Outfits</a>
                <a href="#" className="text-black font-medium text-[14px] md:text-[16px] whitespace-nowrap">Designer Wears</a>
            </nav>
        </div>
    );
};

export default Navbar;

