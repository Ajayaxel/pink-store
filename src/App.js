

// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Header from "./Components/Header";
// import Navbar from "./Components/Navbar";
// import Hero from "./Components/Hero";
// import GalleryCards from "./Components/GalleryCards";
// import BannerCard from "./Components/BannerCard";
// import HandCraftedCards from "./Components/HandCraftedCards";
// import FooterSection from "./Components/FotterSection";
// import FotterImage from "./Components/FotterImage";
// import ProductDetailsPage from "./Components/ShopDetailsPage";
// import ShopePage from "./Components/ShopePage";
// import PaymentPage from "./Components/PaymentPage";
// import CartDrawer from "./Components/CartDrawer"; // ✅ Import CartDrawer
// import list from "./data";
// import LoginPage from "./Components/LoginPage";

// function App() {
//   const [cart, setCart] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(false); // ✅ Manage cart drawer state

//   const handleClick = (item) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
//       if (existingItem) {
//         return prevCart.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, amount: (cartItem.amount || 1) + 1 }
//             : cartItem
//         );
//       } else {
//         return [...prevCart, { ...item, amount: 1, price: item.price || 0 }];
//       }
//     });
//   };

//   // ✅ Handle quantity changes in cart
//   const handleChange = (item, delta) => {
//     setCart((prevCart) =>
//       prevCart
//         .map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, amount: Math.max(1, (cartItem.amount || 1) + delta) }
//             : cartItem
//         )
//         .filter((cartItem) => cartItem.amount > 0) // Remove if quantity is 0
//     );
//   };

//   return (
//     <Router>
//       {/* Pass setIsCartOpen to Header */}
//       <Header cart={cart} setIsCartOpen={setIsCartOpen} />
  
//       <Navbar />
//       <Routes>
//         <Route path="/" element={
//           <>
//             <Hero />
//             <GalleryCards />
//             <BannerCard />
//             <HandCraftedCards />
//             <FotterImage />
//             <FooterSection />
//           </>
//         } />
//         <Route path="/shop-details/:id" element={<ProductDetailsPage products={list} handleClick={handleClick} />} />
//         <Route path="/shop" element={<ShopePage products={list} />} />
//         <Route path="/payment-details/:id" element={<PaymentPage products={list} />} />
//         <Route path="/login" element={<LoginPage />} />
       
//       </Routes>

//       {/* ✅ Cart Drawer */}
//       <CartDrawer
//         isOpen={isCartOpen}
//         onClose={() => setIsCartOpen(false)}
//         cart={cart}
//         setCart={setCart}
//         handleChange={handleChange}
//       />

    
//     </Router>
//   );
// }

// export default App;
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import GalleryCards from "./Components/GalleryCards";
import BannerCard from "./Components/BannerCard";
import HandCraftedCards from "./Components/HandCraftedCards";
import FooterSection from "./Components/FotterSection";
import FotterImage from "./Components/FotterImage";
import ProductDetailsPage from "./Components/ShopDetailsPage";
import ShopePage from "./Components/ShopePage";
import PaymentPage from "./Components/PaymentPage";
import CartDrawer from "./Components/CartDrawer";
import list from "./data";
import LoginPage from "./Components/LoginPage";
import RegisterLogin from "./Components/RegisterLogin";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation(); // ✅ Get current route

  const handleClick = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, amount: (cartItem.amount || 1) + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, amount: 1, price: item.price || 0 }];
      }
    });
  };

  const handleChange = (item, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, amount: Math.max(1, (cartItem.amount || 1) + delta) }
            : cartItem
        )
        .filter((cartItem) => cartItem.amount > 0)
    );
  };

  return (
    <>
      {/* ✅ Hide Header & Navbar on Login and Register Pages */}
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <>
          <Header cart={cart} setIsCartOpen={setIsCartOpen} />
          <Navbar />
        </>
      )}

      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Hero />
              <GalleryCards />
              <BannerCard />
              <HandCraftedCards />
              <FotterImage />
              <FooterSection />
            </>
          }
        />
        <Route path="/shop-details/:id" element={<ProductDetailsPage products={list} handleClick={handleClick} />} />
        <Route path="/shop" element={<ShopePage products={list} />} />
        <Route path="/payment-details/:id" element={<PaymentPage products={list} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterLogin />} />
      </Routes>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        setCart={setCart}
        handleChange={handleChange}
      />
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;








