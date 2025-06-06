import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import FooterSection from "./FotterSection";
import { useProductStore } from "../store/product"; // Access store

const ProductDetailsPage = ({ handleClick }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { products, fetchProducts } = useProductStore();

  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // 🔁 Load item based on ID
  useEffect(() => {
    const loadProduct = async () => {
      if (!products || products.length === 0) await fetchProducts();
      const found = products.find((p) => p._id === id);
      setItem(found);
    };
    loadProduct();
  }, [id, products]);

  const startDrag = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const onDragging = (e) => {
    if (!isDragging) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select a size and color before adding to cart.");
      return;
    }
    for (let i = 0; i < quantity; i++) {
      handleClick({ ...item, selectedSize, selectedColor });
    }
  };

  const getImageUrl = (path) => {
    if (!path) return "/fallback-image.jpg";
    const relativePath = path.split("/uploads/")[1];
    return `http://localhost:7000/uploads/${relativePath}`;
  };

  if (!item) return <h1 className="text-3xl font-bold p-8">🔄 Loading product...</h1>;

  const sizes = item.sizeVariants?.length ? JSON.parse(item.sizeVariants[0] || "[]") : [];
  const colors = item.colorVariants?.length ? JSON.parse(item.colorVariants[0] || "[]") : [];
  const discountedPrice = item.price ? item.price - (item.price * item.discount) / 100 : 0;

  return (
    <div>
      <div className="px-[50px] py-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px]">
          <div>
            <img
              src={item.images?.length ? getImageUrl(item.images[0]) : "/fallback-image.jpg"}
              alt={item.productName}
              className="w-full max-w-[700px] h-auto rounded-[1px]"
            />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">{item.productName}</h1>
            <p className="text-xl text-gray-500 mt-2">
              MRP <span className="line-through">AED {item.price}</span>{" "}
              <span className="text-red-600">AED {discountedPrice}</span>
            </p>
            <p className="text-gray-600 mt-2">{item.productDescription}</p>

            {/* Size Selection */}
            <div className="mt-1">
              <h2 className="text-md font-medium">Size:</h2>
              <div className="flex gap-2 mt-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-3 py-2 border rounded-md ${
                      selectedSize === size ? "bg-gray-300" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mt-1">
              <h2 className="text-md font-medium">Color:</h2>
              <div className="flex gap-2 mt-2">
                {colors.map((color) => (
                  <div
                    key={color}
                    className={`w-5 h-5 border-2 cursor-pointer ${
                      selectedColor === color ? "border-black" : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  ></div>
                ))}
              </div>
            </div>
            <div className="mt-1">
           <p>{item.shortDescription}</p>
            </div>

            {/* Quantity Selector */}
            <div className="mt-1 flex gap-4 items-center">
              <h2 className="text-md font-medium">Quantity</h2>
              <div className="flex items-center border rounded-md w-24 mt-2">
                <button className="px-3 py-2" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  -
                </button>
                <span className="px-4">{quantity}</span>
                <button className="px-3 py-2" onClick={() => setQuantity(quantity + 1)}>
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-[40px]">
              <button
                className="bg-[#C5892F] text-black rounded-[2px] h-[55px] w-full font-medium hover:bg-[#A67028] active:scale-95"
                onClick={() => navigate(`/payment-details/${item._id}`)}
              >
                Buy Now
              </button>
            </div>

            <div className="mt-[20px]">
              <button
                onClick={handleAddToCart}
                className="bg-[#FCDEE1] text-black rounded-[2px] h-[55px] w-full font-medium hover:bg-[#A67028] active:scale-95"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-[115px] mb-[30px] flex justify-between items-center">
          <h2 className="text-3xl font-semibold text-black">You may also like</h2>
          <img src="/Arrow 1.png" alt="arrow" className="w-[30px] h-auto" />
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide flex gap-6 cursor-grab active:cursor-grabbing"
          onMouseDown={startDrag}
          onMouseMove={onDragging}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
        >
          {products.slice(0, 6).map((product) => (
            <img
              key={product._id}
              src={getImageUrl(product.images?.[0])}
              alt={product.productName}
              className="w-[338px] h-auto object-cover rounded-[2px] flex-shrink-0"
            />
          ))}
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default ProductDetailsPage;






