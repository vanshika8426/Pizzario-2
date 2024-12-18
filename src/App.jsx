import React, { useState } from "react";
// import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import Contact from "./components/ContactUs/Contact.jsx";
import LoginPopup from "./components/loginPopup/loginPopup.jsx";
// import MyOrders from "./pages/MyOrders/MyOrders.jsx";



const App = () => {
  const [showLogin,setShowLogin]=useState(false)

  return (
    <>
  {showLogin? <LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar  setShowLogin={setShowLogin}/>                                    
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* <Route path="/order" element={<PlaceOrder />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/contactUs" element={<Contact />} />
          {/* <Route path="/myorders" element={<MyOrders />} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;


//setShowLogin={setShowLogin}//