// [Same imports]
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FooterSection from "./FotterSection";
import { FaChevronDown } from "react-icons/fa";
import { useProductStore } from "../store/product";

const ShopPage = ({ heading = "Shop" }) => {
  const navigate = useNavigate();
  const { fetchProducts, products } = useProductStore();

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Relevance");
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState(""); // New state for filter

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      await fetchProducts();
      setLoading(false);
    };
    loadProducts();
  }, [fetchProducts]);

  const getSortedProducts = () => {
    const sorted = [...products];

    // ✅ Filtering before sorting
    let filtered = sorted;
    if (selectedCategory) {
      filtered = sorted.filter(
        (item) =>
          item.category &&
          item.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (sortOption === "Price: Low to High") {
      filtered.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
    } else if (sortOption === "Price: High to Low") {
      filtered.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    } else if (sortOption === "Newest First") {
      filtered.sort(
        (a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
      );
    }

    return filtered;
  };

  const handleSortSelection = (option) => {
    setSortOption(option);
    setIsSortOpen(false);
  };

  const sortedProducts = getSortedProducts();

  const getImageUrl = (path) => {
    if (!path) return "/fallback-image.png";
    const relativePath = path.split("/uploads/")[1];
    return `http://localhost:7000/uploads/${relativePath}`;
  };

  // ✅ Unique categories from products
  const categories = [...new Set(products.map((p) => p.category).filter(Boolean))];

  return (
    <div>
      {/* Overlay */}
      {isFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsFilterOpen(false)}
          ></div>

          {/* ✅ Filter Modal */}
          <div className="fixed top-20 left-4 md:left-20 bg-white p-6 rounded-md shadow-lg z-50 w-72">
            <h3 className="text-lg font-semibold mb-3">Filter by Category</h3>
            <div className="flex flex-col gap-2">
              <button
                className={`text-left ${selectedCategory === "" ? "font-bold text-blue-600" : ""}`}
                onClick={() => setSelectedCategory("")}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`text-left ${
                    selectedCategory === cat ? "font-bold text-blue-600" : ""
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Header */}
      <div className="px-4 md:px-10 lg:px-12 py-6 md:py-8 lg:py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setIsFilterOpen(true)}
          >
            <img src="/Filter.png" alt="Filter" className="w-5 h-5" />
            <span className="text-md text-black font-medium">FILTER</span>
          </div>

          <h1 className="text-2xl md:text-3xl text-black font-semibold">{heading}</h1>

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
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border z-50">
                {["Relevance", "Price: Low to High", "Price: High to Low", "Newest First"].map(
                  (option) => (
                    <div
                      key={option}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSortSelection(option)}
                    >
                      {option}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
        <div className="w-full h-[1px] bg-black mt-4"></div>
      </div>

      {/* Products Grid */}
      <div className="px-[50px] py-[50px] min-h-[300px]">
        {loading ? (
          <div className="text-center text-black text-lg">🔄 Loading products...</div>
        ) : sortedProducts.length === 0 ? (
          <div className="text-center text-gray-600 text-lg">🚫 No products found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[20px] py-[50px] px-[50px]">
            {sortedProducts.map((item) => (
              <div
                key={item._id}
                className="cursor-pointer"
                onClick={() => navigate(`/shop-details/${item._id}`)}
              >
                <img
                  src={
                    item.images && item.images.length > 0
                      ? getImageUrl(item.images[0])
                      : "/fallback-image.png"
                  }
                  alt={item.productName}
                  className="w-[338px] h-[460px] rounded-[2px] transition-transform duration-300 ease-in-out hover:scale-105"
                />
                <p className="text-[12px] pt-[5px]">{item.shortDescription}</p>
                <p className="font-medium">AED {item.price ?? "N/A"}</p>
                <div className="mt-4 flex gap-2">
                  {item.colorVariants &&
                    JSON.parse(item.colorVariants[0] ?? "[]").map((color) => (
                      <div
                        key={color}
                        className="w-5 h-5 border border-gray-300"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <FooterSection />
    </div>
  );
};

export default ShopPage;










