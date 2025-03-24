import React from 'react'
import Contact from '../Header/Contact';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import Aboutsection from '../Abouts/Aboutsection';

const Contactpage = () => {

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
         <h1 className='c-title nav-icon-page'>Contact</h1>
         {/* <button className='carousel-btn' type='submit'>Book Now</button> */}
        </div>
      </div>
    </div>
    </div>
    <div className='about-section'>
    <Aboutsection/>
    </div>

    <div className='Extra-support'>

    </div>
    <div className='destination-box-section'>
    <div className='Explore-section'>
       <h5 className='destination-title'>Contact</h5>
       <h1 className='Explore-heading'>Contact For Any Query</h1>
       </div>
    <div className='signup-box'>
    <div className='signup-from-box'>
        {/* <div className='signup-heading'>
          <h1>Sign Up Now</h1>
        </div>
        <div className='from-section'>
          <form>
            <div className='from-group'>
            <input className='input-element' type='text' name='name' placeholder='Your Name'></input><br/>
            <input  className='input-element' type='email' name='email' placeholder='Your Email'/><br/>
            <p className='input-destination'>Select a destination</p>
            <button className='btn destination-btn from-button' type='submit'>Sign Up Now</button>
            </div>
            <div/>
          </form>
        </div> */}
        {/* <div className='signup-heading'>
          <h1>Sign Up Now</h1>
        </div> */}
      <div className='sign-destination'>
      <div className='sign-destination-box-item'>
      {/* <div className='sign-destination'>
      </div> */}
      <div className='sign-depart-date'>
      <input className='input-element' type='text' name='name' placeholder='Your Name'></input>
      </div>
      <div className='sign-return-date'>
      <input  className='input-element' type='email' name='email' placeholder='Your Email'/>
      </div>
      <div className='sign-return-date'>
      <input  className='input-element' type='subject' name='subject' placeholder='Your Subject'/>
      </div>
      <div className='sign-return-date'>
      <textarea rows={10} cols={30} className='input-element' type='message' name='message' placeholder='Your Message'/>
      </div>
      {/* <div className='sign-duration'>
        <p className='input-destination'>Select a destination</p>
      </div> */}
      <button className='sign-btn sign-destination-btn' type='submit'>Send Message</button>
      </div>
      </div>
       </div>
       </div>
       </div>

    <Footer/>
    </div>
  )
}

export default Contactpage
