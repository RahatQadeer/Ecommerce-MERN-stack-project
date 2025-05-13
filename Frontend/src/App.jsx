// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Collection from "./pages/Collection";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Product from "./pages/Product";
// import Cart from "./pages/Cart";
// import Login from "./pages/Login";
// import PlaceOrder from "./pages/PlaceOrder";
// import Orders from "./pages/Orders";
// import Footer from "./components/Footer";
// import SearchBar from "./components/SearchBar";
// import { ToastContainer, toast } from "react-toastify";
// import { useLocation } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
// const App = () => {
//    const location = useLocation();
//   const hideNavbarPaths = ["/login"];
//   return (
//     <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
//       <ToastContainer />
//        {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
//       {/* <Navbar /> */}
//       <SearchBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/collection" element={<Collection />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/product/:productId" element={<Product />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/place-order" element={<PlaceOrder />} />
//         <Route path="/orders" element={<Orders />} />
      
//       </Routes>
//       {!hideLayoutPaths.includes(location.pathname) && <Footer />}
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default App;


import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const location = useLocation();
  const hideLayoutPaths = ["/login"]; // hide navbar and footer on these paths

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      {!hideLayoutPaths.includes(location.pathname) && <Navbar />}
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      {!hideLayoutPaths.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default App;
