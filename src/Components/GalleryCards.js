import React from "react";
import { FiBookmark } from "react-icons/fi";

const GalleryCards = () => {
  const newArrivals = [
  "Rectangle 4 (2).png",
    "Rectangle 5 (2).png",
    "Rectangle 6.png",
    
  ];
  const handcraftedKurtas = [
  "Rectangle 7.png",
    "Rectangle 8.png",
    "Rectangle 9.png",
  ];

  return (
    <div className="w-full px-[50px] py-[80px]">
      {/* New Arrivals Section */}
      <div className="flex justify-between items-center pb-6">
        <h2 className="text-3xl font-semibold text-black">NEW ARRIVALS</h2>
        <h3 className="text-lg font-medium text-black cursor-pointer">VIEW ALL</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {newArrivals.map((img, index) => (
          <div key={index} className="relative">
            <img
              src={img}
              alt={`New Arrival ${index + 1}`}
              className="w-full h-auto object-cover rounded-md"
            />
            <div className="mt-3 flex justify-between items-center">
              <p className="text-black text-sm">Lorem ipsum dolor sit amet consectetur.</p>
              <FiBookmark className="text-black cursor-pointer" />
            </div>
            <p className="text-black font-semibold text-lg mt-1">₹5000</p>
          </div>
        ))}
      </div>

      {/* Hand Crafted Kurtas Section */}
      <div className="flex justify-between items-center py-10">
        <h2 className="text-3xl font-semibold text-black">HAND CRAFTED KURTAS</h2>
        <h3 className="text-lg font-medium text-black cursor-pointer">VIEW ALL</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {handcraftedKurtas.map((img, index) => (
          <div key={index} className="relative">
            <img
              src={img}
              alt={`Kurta ${index + 1}`}
              className="w-full h-auto object-cover rounded-md"
            />
            <div className="mt-3 flex justify-between items-center">
              <p className="text-black text-sm">Lorem ipsum dolor sit amet consectetur.</p>
              <FiBookmark className="text-black cursor-pointer" />
            </div>
            <p className="text-black font-semibold text-lg mt-1">₹5000</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryCards;



