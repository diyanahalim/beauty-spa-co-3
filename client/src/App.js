import React from "react";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import BackgroundServices from "./views/BackgroundServices";
import Contact from "./views/Contact";
import Booking from "./views/Booking.js";
import Footer from "./components/Footer";
// import NavElements from "./components/NavElements";

import './App.css';
import './index.css';
// import servicesList from "./servicesList";


const App = () => {
  return (
    <div className="app">
      <div>
        <Navbar />
      </div>
      <div className="main">
      <Routes>        
        {/* <Route path="/nav_elements"  element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about"  element={<About />}/>
        <Route path="/services"  element={<BackgroundServices />}/>
        <Route path="/contact"  element={<Contact />}/>
        <Route path="/booking_form/:id" element={<Booking />} />
      </Routes>
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  )
}

export default App;

