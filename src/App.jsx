import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Global/Navbar";
import Footer from "./Components/Global/Footer";
import Cursor from "./Components/Global/Cursor";
import SmoothScroll from "./Components/Global/SmoothScroll";
import ScrollToTop from "./Components/Global/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Learn from "./pages/Learn";
import Listing from "./pages/Listing";
import Payment from "./pages/Payment";

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Cursor />
      {/* <SmoothScroll /> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
