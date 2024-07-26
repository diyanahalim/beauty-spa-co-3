import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../views/Booking.css";
import Axios from 'axios';

const options = [
  { value: "9:00 am - 11:00 am", label: "9:00 am - 11:00 am" },
  { value: "3:00 pm - 5:00 pm", label: "3:00 pm - 5:00 pm" },
  { value: "2:30 pm - 4:30 pm", label: "2:30 pm - 4:30 pm" }
];

const Booking = (_) => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  
        const { state } = useLocation();
        const [formData, setFormData] = useState({
          customer_name: '',
          customer_email: '',
          customer_phone_number: '',
          appointment_time: options[0].label
      });
        const [appointment_date, setAppointmentDate] = useState(new Date());
        const [show, setShow] = useState(false);

        function convertTo24Hour(timeString) { 
          let date = new Date(`01/01/2022 ${timeString}`); 
          let formattedTime = date.toLocaleTimeString('en-US', 
              { hour12: false }); 
          return formattedTime; 
      } 

        const [errors, setErrors] = useState({});
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
              ...formData,
              [name]: value,
          });
      };

        const submitBooking = (e) => {
          e.preventDefault();
          const newErrors = validateForm(formData);
          setErrors(newErrors);
 
          if (Object.keys(newErrors).length === 0) {
              // Form submission logic here
              Axios.post('http://localhost:3001/api/insert', {
              customer_name: formData.customer_name, 
              customer_email: formData.customer_email, 
              customer_phone_number: formData.customer_phone_number,
              appointment_date: appointment_date.toISOString().split('T', 1)[0],
              appointment_start_time: convertTo24Hour(formData.appointment_time.split(' - ')[0]),
              appointment_end_time: convertTo24Hour(formData.appointment_time.split(' - ')[1])
          }).then(()=>{
            alert("successful insert");
            
          });
              console.log('Form submitted successfully!'); 
              setFormData({
                customer_name: '',
                customer_email: '',
                customer_phone_number: '',
                appointment_time: options[0].label});   
              setShow(!show);
          } else {
              console.log(`Form submission failed
              due to validation errors.`);
          }
      };

        const validateForm = (data) => {
          const errors = {};
  
          if (!data.customer_name.trim()) {
              errors.customer_name = 'Username is required';
          }
  
          if (!data.customer_email.trim()) {
              errors.customer_email = 'Email is required';
          } else if (!/\S+@\S+\.\S+/.test(data.customer_email)) {
              errors.customer_email = 'Email is invalid';
          }
          
          if (!data.customer_phone_number.trim()) {
            errors.customer_phone_number = 'Phone number is required';
          }

          return errors;
      };

        const bookAgain = () => {
          setShow(!show);
      }
        
        return (
          <div className='booking'>
            <div className='left-side'>
              <h1 className='package-name'>{state.service.name}</h1>
              <p className='package-price'>RM{" "}{state.service.price}</p>
              <p className='package-duration'>{state.service.duration}{" "}hours</p>
              <p className='description'>{state.service.description}</p>
            </div>
            <div className='right-side'>

            {!show && (
              <form className='booking-form'>

              <label className="fullname">Full Name</label>
              <input 
                type="text" 
                name="customer_name" 
                placeholder="Your full name.."  
                inputMode="decimal" 
                value={formData.customer_name}
                onChange={handleChange}
              />
              {errors.customer_name && <div className="error-message">{errors.customer_name}</div>}

              <label className="email">Email</label>
              <input 
                type="text" 
                name="customer_email" 
                placeholder="Your email.." 
                inputMode="decimal" 
                value={formData.customer_email}
                onChange={handleChange}
              />
              {errors.customer_email && <div className="error-message">{errors.customer_email}</div>}

              <label className="phonenum">Phone Number</label>
              <input 
                type="text" 
                name="customer_phone_number" 
                placeholder="Your phone number.." 
                inputMode="decimal" 
                value={formData.customer_phone_number}
                onChange={handleChange}
              />
              {errors.customer_phone_number && <div className="error-message">{errors.customer_phone_number}</div>}
    
              <label className="app-date">Appointment Date</label>
              <DatePicker 
                className="input-date" 
                selected={appointment_date} 
                dateFormat="dd/MM/YYYY"  
                inputMode="decimal" 
                onChange={(date) => setAppointmentDate(date)}
              />

              <label className="appointment_time">Appointment Time Slot</label>
              <select 
                name="appointment_time" 
                value={formData.appointment_time} 
                inputMode="decimal" 
                onChange={handleChange}
              >
                {options.map((option) => (
                <option value={option.value}>{option.label}</option>
                ))}
              </select>

              <input type="submit" value="Submit" onClick={submitBooking}></input>
              </form>
            )}
            

            {show && (
              <div className='success-message'>
                <h1>Your booking has been submitted successfully.</h1>
                <p>Check your booking details in your email~</p>
                <button type='submit' className='book-again-button' onClick={bookAgain}>Book Again</button>`
              </div>
            )}
            </div>
          </div>
        )
      }

export default Booking
