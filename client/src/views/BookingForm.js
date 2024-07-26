import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from 'axios';

const options = [
    { value: "9:00 am - 11:00 am", label: "9:00 am - 11:00 am" },
    { value: "3:00 pm - 5:00 pm", label: "3:00 pm - 5:00 pm" },
    { value: "2:30 pm - 4:30 pm", label: "2:30 pm - 4:30 pm" }
  ];

const BookingForm = () => {
        const [customer_name, setCustomerName] = useState('');
        const [customer_email, setCustomerEmail] = useState('');
        const [customer_phone_number, setCustomerPhoneNumber] = useState('');
        const [appointment_date, setAppointmentDate] = useState(new Date());
        const [appointment_time, setAppointmentTime] = useState(options[0].label);
        const [errors, setErrors] = useState({});
        const [submitting, setSubmitting] = useState(false);
        function convertTo24Hour(timeString) { 
          let date = new Date(`01/01/2022 ${timeString}`); 
          let formattedTime = date.toLocaleTimeString('en-US', 
              { hour12: false }); 
          return formattedTime; 
        } 

        const validateValues = () => {
          let errors = {};
          if (customer_email.length < 15) {
            errors.customer_email = "Email is too short";
          }
          return errors;
        };

        
        useEffect(() => {
          if (Object.keys(errors).length === 0 && submitting) {
            finishSubmit();
          }
        });

        const submitBooking = (e) => {
          e.preventDefault();
          Axios.post('http://localhost:3001/api/insert', {
          customer_name: customer_name, 
          customer_email: customer_email, 
          customer_phone_number: customer_phone_number,
          appointment_date: appointment_date.toISOString().split('T', 1)[0],
          appointment_start_time: convertTo24Hour(appointment_time.split(' - ')[0]),
          appointment_end_time: convertTo24Hour(appointment_time.split(' - ')[1])
          }).then(()=>{
            alert("successful insert");
            // setStatus({ type: 'success' });
          });
          setErrors(validateValues());
          setSubmitting(true);
      };

        const finishSubmit = () => {
          console.log(customer_email);
        };
        
  return (
    <div>
      {Object.keys(errors).length === 0 && submitting ? (
                <span className="success">Successfully submitted ✓</span>
              ) : null}
            <form className='booking-form'>
              <label for="fullname">Full Name</label>
              <input type="text" id="fullname" name="fullname" placeholder="Your full name.." onChange={(e) => {
                setCustomerName(e.target.value)
              }}></input>

              <label for="email">Email</label>
              <input type="text" id="email" name="email" placeholder="Your email.." onChange={(e) => {
                setCustomerEmail(e.target.value)
              }}></input>
              {errors.customer_email ? (
                <p className="error">
                  Email should be at least 15 characters long
                </p>
              ) : null}

              <label for="phonenum">Phone Number</label>
              <input type="text" id="lname" name="lastname" placeholder="Your phone number.." onChange={(e) => {
                setCustomerPhoneNumber(e.target.value)
              }}
              ></input>

              <label for="app-date">Appointment Date</label>
              <DatePicker className="input-date" selected={appointment_date} dateFormat="dd/MM/YYYY" onChange={(date) => 
                setAppointmentDate(date)}/>

              <label for="appointment_time">Appointment Time Slot</label>
              <select id="appointment_time" name="appointment_time" value={appointment_time} defaultValue="9:00 am - 11:00 am" onChange={(e) => {
                setAppointmentTime(e.target.value)
              }}>
                {options.map((option) => (
                <option value={option.value}>{option.label}</option>
                ))}
              </select>
              <input type="submit" value="Submit" onClick={submitBooking}></input>
            </form>
    </div>
  )
}

export default BookingForm
