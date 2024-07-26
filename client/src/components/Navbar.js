import React from "react";
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "../components/Navbar.css";  


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  
  const handleShowNavbar = () => {
    console.log('If this message appears in the console, JavaScript is running.');
    let bars = document.querySelectorAll('.bar')
    let navbar_header = document.getElementById('navbar-header')
    setShowNavbar(!showNavbar)
    bars.forEach(bar => bar.classList.toggle('change'))
    navbar_header.classList.toggle('navbar-header-light')
    document.body.classList.toggle("no-scroll")
  }

  return (
      <nav id="navbar" className="navbar">
        <div id="navbar-header" className="navbar-header">
          <div className="company-name">
            <span className="navbar-menu-icon" onClick={handleShowNavbar}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </span>
          BEAUTY SPA CO
          </div>
        </div>
        
        <div className={`navbar-menu-mobile ${showNavbar && 'active'}`}>
          <ul className='navbar-menu' id='navbar-menu'>
            <li className="navbar-menu-link" onClick={handleShowNavbar}><NavLink to="/">HOME</NavLink></li>
            <li className="navbar-menu-link" onClick={handleShowNavbar}><NavLink to="about">ABOUT</NavLink></li>
            <li className="navbar-menu-link" onClick={handleShowNavbar}><NavLink to="services">SERVICES</NavLink></li>
            <li className="navbar-menu-link" onClick={handleShowNavbar}><NavLink to="contact">CONTACT</NavLink></li>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar

