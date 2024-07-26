import React from 'react'
import "../components/Footer.css";
import image1 from '../assets/bsclogo.png';
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-up'>
        <div className='footer-box'>
          <img className='logo' src={image1} alt="Logo" />
        </div>
        <div className='footer-box'>
          <ul className='footer-links-container'>
            <li className='footer-link-container'><NavLink to="/">HOME</NavLink></li>
            <li className='footer-link-container'><NavLink to="about">ABOUT</NavLink></li>
            <li className='footer-link-container'><NavLink to="services">SERVICES</NavLink></li>
            <li className='footer-link-container'><NavLink to="contact">CONTACT</NavLink></li>
          </ul>
        </div>
        <div className='footer-box'>
          <div className='footer-right-side'>
            <p className='office-address'>Beauty Spa Co 1357 Blane Street Saint Louis, MO 63101</p>
            <p><a href="mailto:beautyspaco@example.com">beautyspaco@gmail.com</a></p>
          </div>
        </div>
      </div>
      <div className='remarks'>
        <p>SITE BY DIYANA HALIM</p>
      </div>
    </div>
  )
}

export default Footer
