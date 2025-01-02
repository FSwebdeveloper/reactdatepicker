import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Contact from '../Header/Contact';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import Clients from '../Clients/Clients';
import Service from './Service';

const Servicepage = () => {

  const [selectedDate, setDate] = useState(null);
  const [selectedReturnDate, returnSetDate] = useState(null);

  return (
    <div>
       <Contact/>
       <Navbar/>
      <div className='slider'>
    <div className='nav-Wallpaper-section Next-wallpaper-img'>
      {/* <img className='Wallpaper-img' src='./img/carousel-1.jpg' alt='carsouel-image'/> */}
      <div className='nav-icon-wallpaper'>
        <div className='c-text-heading'>
          {/* <h5 className='c-about'>Tours & Travel</h5> */}
         <h1 className='c-title nav-icon-page'>Service</h1>
         {/* <button className='carousel-btn' type='submit'>Book Now</button> */}
        </div>
      </div>
    </div>
    </div>
    <div className='about-section'>
    <div>
      <div className='nav-wallpaper-des-box'>
      <div className='destination-box-item'>
      <div className='destination'>
        <p>Destination</p>
      </div>
      <div className='depart-date'>
        <DatePicker className='date-picker-input' placeholderText='Depart Date' selected={selectedDate} onChange={date=>setDate(date)}/>
      </div>
      <div className='return-date'>
        <DatePicker className='date-picker-input' placeholderText='Return Date' selected={selectedReturnDate} onChange={date=>returnSetDate(date)}/>
      </div>
      <div className='duration'>
        <p>Duration</p>
      </div>
      <button className='btn destination-btn' type='submit'>Submit</button>
      </div>
      </div>
    </div>
    </div>
    <Service/>
    <Clients/>
    <Footer/>
    </div>
  )
}

export default Servicepage;
