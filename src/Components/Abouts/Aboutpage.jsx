import React from 'react';
import Contact from '../Header/Contact';
import Navbar from '../Header/Navbar';
import Signup from '../Signup/Signup';
import Guides from '../Guide/Guides';
import Footer from '../Footer/Footer';
import Packageabout from './Package-about';
import AbouttesTimonial from './About-testimonial';
import Aboutsection from './Aboutsection';

const Aboutpage = () => {

  
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
         <h1 className='c-title nav-icon-page'>About</h1>
         {/* <button className='carousel-btn' type='submit'>Book Now</button> */}
        </div>
      </div>
    </div>
    </div>
    <div className='about-section'>
      <Aboutsection/>
      <Packageabout/>
      <AbouttesTimonial/>
    </div>
      <Signup/>
      <Guides/>
      <Footer/>
    </div>
  )
}

export default Aboutpage;
