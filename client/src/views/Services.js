import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import "../views/Services.css";

const Services = (props) => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  
  console.log("props:", props);
  return (
        <div key={props.id} className="services-grid-item">
          <img src={props.image} alt="Logo" />
          <h1>{props.name}</h1>
          <div className='parent-stack'>
            <p className='child stack-1'>{props.duration}{" "}hours</p>
            <p className='child stack-2'>RM{" "}{props.price}</p>
          </div>
          <Link className='book-link'
            to={{pathname: `/booking_form/${props.id}`}}
            state={{ service: props }}
          >
            Book Now
          </Link>
        </div>
  )
}

export default Services
