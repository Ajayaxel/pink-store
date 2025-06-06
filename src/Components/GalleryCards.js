import React, { useState, useEffect } from "react";
import { FiBookmark } from "react-icons/fi";
import productService from '../api/productService.js';

const GalleryCards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const result = await productService.getAllProducts();
        
        if (result.success) {
          setProducts(result.data);
        } else {
          setError(result.error || 'Failed to fetch products');
        }
      } catch (err) {
        setError('Network error occurred');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Get all products to display
  const allProducts = products;

  // Product Card Component
  const ProductCard = ({ product }) => (
    <div className="relative group">
      <div className="overflow-hidden rounded-md">
        <img
          src={productService.getImageUrl(product.images[0])}
          alt={product.productName}
          className="w-[457px] h-[500px] object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = '/placeholder-image.jpg';
          }}
        />
      </div>
      
      <div className="mt-3 flex justify-between items-start">
        <div className="flex-1 mr-2">
          <h3 className="text-black font-medium text-base capitalize">
            {product.productName}
          </h3>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">
            {product.shortDescription || product.productDescription}
          </p>
        </div>
        <FiBookmark className="text-black cursor-pointer hover:fill-current transition-colors flex-shrink-0" />
      </div>
      
      <div className="mt-2 flex items-center gap-2 flex-wrap">
        <p className="text-black font-semibold text-lg">
          {productService.formatPrice(productService.getDiscountedPrice(product.price, product.discount))}
        </p>
        {product.discount > 0 && (
          <>
            <p className="text-gray-500 text-sm line-through">
              {productService.formatPrice(product.price)}
            </p>
            <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
              {product.discount}% OFF
            </span>
          </>
        )}
      </div>
      
      <div className="mt-1 flex items-center justify-between text-xs text-gray-500">
        <span className="capitalize">Brand: {product.brand}</span>
        <span>Stock: {product.stockQuantity}</span>
      </div>
      
      {productService.isNewProduct(product.dateAdded) && (
        <div className="absolute top-2 left-2">
          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
            NEW
          </span>
        </div>
      )}
    </div>
  );

  // Loading Component
  const LoadingCard = () => (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-64 rounded-md mb-3"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-3 bg-gray-300 rounded mb-2 w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );

  // Loading state
  if (loading) {
    return (
      <div className="w-full px-[50px] py-[80px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <LoadingCard key={i} />
          ))}
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="w-full px-[50px] py-[80px]">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-center">
            <div className="text-red-500 text-6xl mb-4">⚠</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Error Loading Products</h2>
            <p className="text-gray-600">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-[50px] py-[80px]">
      <h2 className="text-2xl font-semibold mb-6">NEW ARRIVALS</h2>
      {/* All Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProducts.length > 0 ? (
          allProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-12">
            <div className="text-4xl mb-4">📦</div>
            <p className="text-lg">No products available</p>
          </div>
        )}
      </div>

      {/* Products Summary */}
      {allProducts.length > 0 && (
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Showing {allProducts.length} products
          </p>
        </div>
      )}
    </div>
  );
};

export default GalleryCards;


