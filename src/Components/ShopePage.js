
import { useNavigate } from "react-router-dom";
import FooterSection from "./FotterSection";
import { FaFilter, FaSortAmountDownAlt } from "react-icons/fa";
import list from "../data";

const ShopePage = ({ item  }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="px-4 md:px-10 lg:px-12 py-6 md:py-8 lg:py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left - Filter */}
          <div className="flex items-center gap-2 cursor-pointer">
            <FaFilter className="text-lg text-black" />
            <span className="text-md text-black font-medium">FILTER</span>
          </div>

          {/* Center - Shop Title */}
          <h1 className="text-2xl md:text-3xl text-black font-semibold">SHOP</h1>

          {/* Right - Sort By */}
          <div className="flex items-center gap-2 cursor-pointer text-black">
            <FaSortAmountDownAlt className="text-lg text-black" />
            <span className="text-md font-medium">SORT BY: Relevance</span>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="w-full h-[1px] bg-black mt-4"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-[50px] px-[50px]">
        {list.map((item) => (
          <div key={item.id} className="cursor-pointer" onClick={() => navigate(`/shop-details/${item.id}`)}>
            <img src={item.image} alt={item.name} className="w-full h-auto rounded-[2px] transition-transform duration-300 ease-in-out hover:scale-105" />
            <p className="text-black mt-2">{item.name}</p>
            <p className="font-semibold">₹{item.discountedPrice}</p>
            <div className="mt-4">
            
            <div className="flex gap-2 mt-2">
              {item.colors.map((color) => (
                <div key={color} className="w-5 h-5 " style={{ backgroundColor: color }}></div>
              ))}
            </div>
          </div>
          </div>

        ))}

      </div>
      <FooterSection />
    </div>
  );
};

export default ShopePage;










