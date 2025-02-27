import { useNavigate , useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import FooterSection from "./FotterSection";






const ProductDetailsPage = ({ products,handleClick }) => {
  const navigate = useNavigate();


 

  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDrag = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const onDragging = (e) => {
    if (!isDragging) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDrag = () => {
    setIsDragging(false);
  };
  const img = [


    "/Rectangle 6.png",
    "/Rectangle 7.png",
    "/Rectangle 8.png",
    "/Rectangle 9.png",
    "/Rectangle 13.png",
    "/Rectangle 14.png",
    "/Rectangle 15.png",
    "/Rectangle 16.png",

  ]


  const { id } = useParams();
  const productId = parseInt(id, 10);

  // Find the selected item
  const item = products.find((p) => p.id === productId);

  useEffect(() => {
    console.log("Product ID:", id);
    console.log("Selected Product:", item);
  }, [id, item]);

  // If item not found, show an error message
  if (!item) {
    return <h1 className="text-3xl font-bold p-8">Product not found</h1>;
  }

  return (
    <div>
    <div className="px-[50px] py-[50px]">
      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px]">
        {/* Left - Product Image */}
        <div>
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="w-full max-w-[700px] h-auto sm:max-w-[550px] sm:h-[600px] md:max-w-[650px] md:h-[700px] lg:max-w-[700px] lg:h-[823px] rounded-[1px]"
              onError={(e) => (e.target.src = "/fallback-image.jpg")} // Fallback image
            />
          ) : (
            <p className="text-red-500">Image not available</p>
          )}
        </div>

        {/* Right - Product Details */}
        <div>
          <h1 className="text-3xl font-semibold">{item.name}</h1>
          <p className="text-xl text-gray-500 mt-2">
            MRP <span className="line-through">₹{item.originalPrice}</span>
            <span className="text-red-600"> ₹{item.discountedPrice}</span>
          </p>
          <p className="text-gray-600 mt-2">{item.description}</p>

          {/* Size Selection */}
          <div className="mt-4">
            <h2 className="text-md font-medium">Size:</h2>
            <div className="flex gap-2 mt-2">
              {item.sizes.map((size) => (
                <button key={size} className="px-3 py-2 border rounded-md">{size}</button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mt-4">

            <div className="flex gap-2 mt-2">
              {item.colors.map((color) => (
                <div key={color} className="w-5 h-5 " style={{ backgroundColor: color }}></div>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mt-4 flex gap-4 items-center">
            <h2 className="text-md font-medium">Quantity</h2>
            <div className="flex items-center border rounded-md w-24 mt-2">
              <button className="px-3 py-2">-</button>
              <span className="px-4">1</span>
              <button className="px-3 py-2">+</button>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-[40px]">
            <button className="bg-[#C5892F] text-black rounded-[2px] h-[55px] w-full font-medium transition-all duration-300 ease-in-out hover:bg-[#A67028] active:scale-95 "onClick={() => navigate(`/payment-details/${item.id}`)}>
              Buy Now
            </button>


          </div>

          {/* Add to Cart */}
          <div className="mt-[20px]">
            <button onClick={()=>handleClick(item)} className="bg-[#FCDEE1] text-black rounded-[2px] h-[55px] w-full font-medium transition-all duration-300 ease-in-out hover:bg-[#A67028] active:scale-95">
              Add To Cart
            </button>
            <div className="mt-[25px]">
              <h2 className="text-black font-semibold">Description</h2>
              <p className="text-[#636363] mt-[15px]">{item.longDescription}</p>
            </div>

            <div className="mt-[25px]">
              <h2 className="text-black font-semibold">Wash Care</h2>
              <p className="text-[#636363] mt-[15px]">Cotton Apparel - Hand wash separately. Silk & Madhubani - Dry clean only. Baskets & Show Pieces - Clean with a wet cloth. For any other item - Please find the wash care in the item description.</p>
            </div>
            <div className="mt-[25px]">
              <h2 className="text-black font-semibold">Delivery & Returns</h2>
              <p className="text-[#636363] mt-[15px]">your order will be ready to ship within two business days. we are maintaining our hygiene standards to ensure you have a safe shopping experience.</p>
            </div>



          </div>
        </div>
      </div>

      {/* bootm section */}

      <div className="flex justify-between mt-[115px] mb-[30px] ">
        <h2 className="text-3xl font-semibold text-black">You may also like</h2>
        <img src="/Arrow 1.png" alt="arrow" className="w-[30px]h-auto ">
        </img>
      </div>
      <div
      ref={sliderRef}
      className="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide flex gap-6 min-w-0 cursor-grab active:cursor-grabbing"
      onMouseDown={startDrag}
      onMouseMove={onDragging}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
    >
      {img.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Image ${index + 1}`}
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



