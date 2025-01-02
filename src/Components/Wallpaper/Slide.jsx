import React from 'react'

const Slide = () => {
  return (
    <div className='slider'>
    <div className='Wallpaper-section'>
      {/* <img className='Wallpaper-img' src='./img/carousel-1.jpg' alt='carsouel-image'/> */}
      <div className='carousel-text'>
        <div className='c-text-heading'>
          <h5 className='c-about'>Tours & Travel</h5>
         <h1 className='c-title'>Let's Discover The World Together</h1>
         <button className='carousel-btn' type='submit'>Book Now</button>
        </div>
      </div>
    </div>
    <div className='Wallpaper-section Next-wallpaper-img'>
      {/* <img className='Wallpaper-img' src='./img/carousel-1.jpg' alt='carsouel-image'/> */}
      <div className='carousel-text'>
        <div className='c-text-heading'>
          <h5 className='c-about'>Tours & Travel</h5>
         <h1 className='c-title'>Discover Amazing Places With Us</h1>
         <button className='carousel-btn' type='submit'>Book Now</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Slide;

