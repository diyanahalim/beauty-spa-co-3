import React, { useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import styled from "styled-components";
import { Typography } from '@mui/material';
import "../views/Contact.css";

const Icon = styled(props => (
  <div {...props}>
    <div className="n">-</div>
    <div className="y">+</div>
  </div>
))`
& > .y {
  display: block;
  font-size: 2rem;
  font-family: "Maisondeartisan";
  color: black;
}
& > .n {
  display: none;
}
.Mui-expanded & > .n {
  display: block;
  font-size: 2rem;
  font-family: "Teachers", sans-serif;
  color: black;
}
.Mui-expanded & > .y {
  display: none;
}
`;

const styles = {
  background: 'transparent',
  borderTop: '1px solid black', 
  borderBottom: '1px solid black', 
  boxShadow: 'none',
  borderRadius: '0',
};

const summary_styles = {
  fontFamily: 'Space Mono',
  width: '95%',
  fontSize: "0.9rem",
};

const Contact = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  
  return (
    <div className='contact'>
      <div className='contact-us-container'>
        <div className='contact-us-left'>
          <form className='contact-form'>
            <label className="fullname">Your Name</label>
                <input 
                  type="text" 
                  id="fullname" 
                  name="fullname" 
                  placeholder="Your full name.."  
                  inputMode="decimal" 
                />
            <label className="email">Email Address</label>
                <input 
                  type="text" 
                  id="email" 
                  name="email" 
                  placeholder="Your email address.."  
                  inputMode="decimal" 
                />
            <label className="phone-number">Phone Number</label>
                <input 
                  type="text" 
                  id="phone-number" 
                  name="phone-number" 
                  placeholder="Your phone number.."  
                  inputMode="decimal" 
                />
            <label className="comments">Comments / Questions</label>
                <textarea 
                  id="comments" 
                  name="comments" 
                  placeholder="Your comments or questions"  
                  inputMode="decimal" 
                />
            <input type="submit" value="Send Message"></input>
          </form>
        </div>
        <div className='contact-us-right'>
          <div className='text-container'>
          </div>
        </div>
      </div>
      <div className='faq-container'>
        <h1>Frequently Asked Question</h1>
        <div className='faq-accordion'>
        <Accordion style={styles}>
        <AccordionSummary
          expandIcon={<Icon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={summary_styles}>
            HOW TO CANCEL BOOKING?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion style={styles}>
        <AccordionSummary
          expandIcon={<Icon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography style={summary_styles}>
          WHAT ARE THE BEST PACKAGES TO CHOOSE FROM?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion style={styles}>
        <AccordionSummary 
          expandIcon={<Icon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography style={summary_styles}>
          HOW TO ENJOY OUR SERVICES?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      </div>
      </div>
    </div>
  )
}

export default Contact
