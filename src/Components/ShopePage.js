
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FooterSection from "./FotterSection";
import { FaTimes, FaChevronDown } from "react-icons/fa";
import list from "../data";

const ShopPage = () => {
  const navigate = useNavigate();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Relevance");
  const [openFilters, setOpenFilters] = useState({});
  const [sortedList, setSortedList] = useState([...list]);

  const toggleFilter = (filterName) => {
    setOpenFilters((prev) => ({ ...prev, [filterName]: !prev[filterName] }));
  };

  const handleSortSelection = (option) => {
    setSortOption(option);
    setIsSortOpen(false);
  };

  useEffect(() => {
    let sortedData = [...list];
    if (sortOption === "Price: Low to High") {
      sortedData.sort((a, b) => a.discountedPrice - b.discountedPrice);
    } else if (sortOption === "Price: High to Low") {
      sortedData.sort((a, b) => b.discountedPrice - a.discountedPrice);
    } else if (sortOption === "Newest First") {
      sortedData.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)); // Assuming `dateAdded` exists
    }
    setSortedList(sortedData);
  }, [sortOption]);

  return (
    <div>
      {/* Filter Sidebar */}
      <div
        className={`fixed top-0 left-0 w-80 h-full bg-white shadow-xl transform ${
          isFilterOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 overflow-y-auto p-5`}
      >
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-xl font-semibold text-black">Filters</h2>
          <FaTimes className="text-black cursor-pointer" onClick={() => setIsFilterOpen(false)} />
        </div>

        {/* Filter Categories */}
        <div className="mt-4">
          <h3 className="text-lg font-medium">Categories</h3>
          <ul className="mt-2 space-y-2">
            {["Clothing and Accessories", "Sarees and Saree Essentials", "Women's Sarees"].map((category) => (
              <li key={category} className="cursor-pointer text-gray-700 hover:underline">
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Dropdown Filters */}
        {[
          "Price", "Brand", "Discount", "Pattern", "Fabric", "Occasion", "Color", "Customer Ratings",
        ].map((filter) => (
          <div key={filter} className="mt-4 border-b pb-2">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFilter(filter)}>
              <h3 className="text-lg font-medium">{filter}</h3>
              <FaChevronDown className={`transition-transform ${openFilters[filter] ? "rotate-180" : ""}`} />
            </div>
            {openFilters[filter] && (
              <div className="mt-2 text-sm text-gray-600">
                Filter options here...
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Overlay */}
      {isFilterOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsFilterOpen(false)}></div>}

      {/* Main Content */}
      <div className="px-4 md:px-10 lg:px-12 py-6 md:py-8 lg:py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsFilterOpen(true)}>
            <img src="/Filter.png" alt="Filter" className="w-5 h-5" />
            <span className="text-md text-black font-medium">FILTER</span>
          </div>
          <h1 className="text-2xl md:text-3xl text-black font-semibold">SHOP</h1>

          {/* Sort Dropdown */}
          <div className="relative">
            <div
              className="flex items-center gap-2 cursor-pointer text-black"
              onClick={() => setIsSortOpen(!isSortOpen)}
            >
              <img src="/Sort.png" alt="Sort" className="w-5 h-5" />
              <span className="text-md font-medium">SORT BY: {sortOption}</span>
              <FaChevronDown className={`transition-transform ${isSortOpen ? "rotate-180" : ""}`} />
            </div>

            {isSortOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border">
                {["Relevance", "Price: Low to High", "Price: High to Low", "Newest First"].map((option) => (
                  <div
                    key={option}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSortSelection(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="w-full h-[1px] bg-black mt-4"></div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-[50px] px-[50px]">
        {sortedList.map((item) => (
          <div key={item.id} className="cursor-pointer" onClick={() => navigate(`/shop-details/${item.id}`)}>
            <img src={item.image} alt={item.name} className="w-full h-auto rounded-[2px] transition-transform duration-300 ease-in-out hover:scale-105" />
            <p className="text-black mt-2">{item.name}</p>
            <p className="font-semibold">₹{item.discountedPrice}</p>
            <div className="mt-4 flex gap-2">
              {item.colors.map((color) => (
                <div key={color} className="w-5 h-5" style={{ backgroundColor: color }}></div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <FooterSection />
    </div>
  );
};

export default ShopPage;
