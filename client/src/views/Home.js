import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import "../views/Home.css";
import image1 from '../assets/home-leaf.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeGallery from "../views/HomeGallery";
import ReviewList from "../views/ReviewList";

const Home = () => {
  
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  const gallery_settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    touchMove: true,
    swipeToSlide: true,
    nextArrow: (
      <div>
        <div className="next-slick-arrow"></div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow flip-horizontally"></div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    
  };

  const review_settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    touchMove: false,
    arrows: false,
  };

  return (
    <div className="home">
      <div className="home-container">
        <div className='column image1-container'>
          <img src={image1} alt="Logo" />
        </div>
        <div className='column text-container'>
          <h1>We pamper you with the best massages services so you can stay you. Stay beautiful.</h1>
          <Link className='book-button' to="services">Book Now</Link>
        </div>
      </div>
      
      <div className='gallery-container'>
        <h1>Gallery</h1>
        <div className='slider-container'>
        <Slider {...gallery_settings}>
          {HomeGallery.map((item) => (
              <div className='image-container' key={item.id}>
                <img src={item.src} alt={item.alt}/>
              </div>
            ))}
        </Slider>
        </div>
      </div>
      <div className='review-container'>
          <div className='column review-container-left'>
            <h1>BEST SERVICES</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique rhoncus diam ac pulvinar. Morbi vestibulum nulla at felis tempor, sed tincidunt elit scelerisque. Nam pulvinar felis eu egestas elementum. Cras nec ultrices erat. Aenean ornare auctor nulla, sed sollicitudin ligula cursus in. Nunc vestibulum, dolor vitae congue consectetur, lacus leo commodo magna, semper semper lectus arcu non quam. In tempor nibh quis fermentum mollis. Fusce lectus massa, sagittis eu sapien at, tempus laoreet neque.</p>
            <Link className='book-button' to="services">Book Now</Link>
          </div>
          <div className='column review-container-right'>
            <Slider {...review_settings}>
            {ReviewList.map((item) => (
              <div className='review-text-container' key={item.id}>
                <h1>{item.reviews}</h1>
                <p>{item.reviewer}</p>
              </div>
              ))}
          </Slider>
          </div>
      </div>
    </div>
  )
}

export default Home
