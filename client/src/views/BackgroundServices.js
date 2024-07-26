import React from 'react';
import "../views/Services.css";
import servicesList from "../servicesList";
import Services from "../views/Services";

const BackgroundServices = () => {
  return (
    <div className='services'>
      <div className='services-grid-container'>
      {servicesList.map(servicesList => 
                                (
                                <Services 
                                    id={servicesList.id}
                                    image={servicesList.image}
                                    name={servicesList.name}    
                                    duration={servicesList.duration}
                                    price={servicesList.price}
                                    description={servicesList.description}
                                        />))}
      </div>
    </div>
  )
}

export default BackgroundServices;
