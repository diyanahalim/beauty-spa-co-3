import React, { useEffect } from 'react'
import image1 from '../assets/about-flower.png';
import image2 from '../assets/about-grid-bg-yellow.png';
import image3 from '../assets/about-founder.jpg';
import "../views/About.css";

const About = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (
      <div className='about'>
        <div className="about-container">
          <div className='column text-container'>
            <p>Proin scelerisque condimentum luctus. Phasellus et sagittis ligula. Maecenas id suscipit arcu. Nunc sit amet ligula ullamcorper, commodo ipsum eget, blandit neque. Ut vulputate pellentesque quam, et iaculis felis sollicitudin ac. Maecenas tempor nisl nunc, non commodo erat fringilla ac. Sed at ipsum in justo pretium viverra eget nec mi. Nulla sed orci metus. Mauris quis dignissim lectus. 
              Etiam eu tortor a est tincidunt iaculis. Integer gravida ipsum eu rutrum porttitor.
            </p>
          </div>
          <div className='column image1-container'>
            <img src={image1} alt="Logo"/>
          </div>
        </div>

        <div class="scrolling-container" id="text-scrolling" >
          <div class="scrolling-text--inner direction-left">
            <div class="scrolling-text">
              <div class="scrolling-text--item outline-text--true"><span>SINCE 1980</span></div>
              <div class="scrolling-text--item outline-text--false"><span>SINCE 1980</span></div>
              <div class="scrolling-text--item outline-text--false"><span>SINCE 1980</span></div>
              <div class="scrolling-text--item outline-text--false"><span>SINCE 1980</span></div>
            </div>
            <div class="scrolling-text">
              <div class="scrolling-text--item outline-text--true"><span>SINCE 1980</span></div>
              <div class="scrolling-text--item outline-text--false"><span>SINCE 1980</span></div>
              <div class="scrolling-text--item outline-text--false"><span>SINCE 1980</span></div>
              <div class="scrolling-text--item outline-text--false"><span>SINCE 1980</span></div>
            </div>
            <div class="scrolling-text">
              <div class="scrolling-text--item outline-text--true"><span>SINCE 1980</span></div>
              <div class="scrolling-text--item outline-text--false"><span>SINCE 1980</span></div>
              <div class="scrolling-text--item outline-text--false"><span>SINCE 1980</span></div>
              <div class="scrolling-text--item outline-text--false"><span>SINCE 1980</span></div>
            </div>
            <div class="scrolling-text">
              <div class="scrolling-text--item outline-text--true"><span>SINCE 1980</span></div>
              <div class="scrolling-text--item outline-text--false"><span>SINCE 1980</span></div>
              <div class="scrolling-text--item outline-text--false"><span>SINCE 1980</span></div>
              <div class="scrolling-text--item outline-text--false"><span>SINCE 1980</span></div>
            </div>
          </div>
        </div>

        <div className='founder-section'>
            <img className='background' src={image2} alt="Logo" />
            <div className='founder-section-item'>
              <div className='image-container'> 
                <img src={image3} alt="Logo" />
              </div>
              <div className='text-container'>
                <h1>The Founder</h1>
                <p className='paragraph1'>Nullam scelerisque mi tortor, vel lacinia urna accumsan id. Maecenas risus eros, facilisis viverra arcu vitae, tristique molestie nulla. Phasellus ac gravida augue. Curabitur hendrerit ut sapien eget suscipit. Cras consectetur vitae tortor non dictum. Morbi cursus, quam sit amet imperdiet commodo, diam leo ullamcorper est, id finibus dolor nisl nec nisi. Pellentesque vel eros sit amet odio ornare posuere.</p>
                <p className='paragraph2'>Praesent sed cursus magna, ac tempor odio. Vivamus semper convallis mauris at tempus. Suspendisse efficitur elit et dictum tristique. Proin pretium libero a lectus porta rutrum. Mauris a nibh sit amet lorem tempor convallis. Pellentesque vulputate est in urna accumsan, sit amet sodales justo aliquam. Phasellus vitae tellus vitae nunc sagittis mollis.</p>
              </div>
            </div>
            <img className='background' src={image2} alt="Logo" />
        </div>
      </div>
  )
}

export default About
