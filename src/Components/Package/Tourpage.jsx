import React from 'react'
import Contact from '../Header/Contact';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import Package from './Package';
import Destination from '../Destination/Destination';
import Aboutsection from '../Abouts/Aboutsection';

const Tourpage = () => {


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
         <h1 className='c-title nav-icon-page'>Packages</h1>
         {/* <button className='carousel-btn' type='submit'>Book Now</button> */}
        </div>
      </div>
    </div>
    </div>
    <div className='about-section'>
    <Aboutsection/>
    </div>
    <Package/>
    <Destination/>
    <Footer/>
    </div>
  )
}

export default Tourpage;
