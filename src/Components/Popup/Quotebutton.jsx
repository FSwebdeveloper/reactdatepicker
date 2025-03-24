import React, { useState, useEffect } from 'react';
import Submitfrom from './Submitfrom';


const Quotebutton = () => {

    const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    // Disable scroll when modal is open
    if (popUp) {
      document.body.style.overflowY = 'hidden';
    } else {
      // Re-enable scroll when modal is closed
      document.body.style.overflowY = 'auto';
    }

    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [popUp]);


  return (
    <div>
      <div className={popUp === true ? "opacity" : "opacity-none"}></div>
      <div className={popUp === false ? "sign-destination-box-item-close" : "sign-destination-box-item-popup" }>
      {/* <div className='sign-destination'>
      </div> */}
      <i class="fa fa-window-close" aria-hidden="true" onClick={()=> setPopUp(false)}></i>
      <Submitfrom/>
      </div>

      <div className='andaman-section'>
      <div className='andaman-sec-img'>
      <img className='andaman-img' src="https://media.holidify.com/images/cmsuploads/compressed/Krang-Suri-Falls_20240322150902.jpg" alt=''/>
      </div>
      <div className='package-detail'>
      <div className='price-tag'>
       <div className='price-tag-sec'>
       <p className='get-quote-content-title price-basic'>Starting from</p>
       <div className='price-pax'>
       <p className='get-quote-content price-pax-sec'>₹ 8,999</p>
       <p className='get-quote-content per-person-sec'>Per Person</p>
       </div>
       </div>
      </div>

      <div className='get-quote'>
      <p className='get-quote-content-title'>Tour Details</p>
      <p className='get-quote-content'><i class="fa-solid package-icon-color fa-location-dot"></i> Destination: Guwahati</p>
      <p className='get-quote-content'><i class="fa-solid package-icon-color fa-calendar-days"></i>Duration: 3 Nights 4 Days</p>
      
      <p className='get-quote-content get-quote-content-ex'> <i class="fa-solid package-icon-color fa-right-left"></i>Ex: Siliguri</p>
      
      <div onClick={()=> setPopUp(true)}>
      <div className='sign-destination-btn quote-btn' type='submit'> <img className='call-gif' src='https://i.pinimg.com/originals/68/85/87/688587d89bcaad9109cda401fed39b66.gif' alt='' />Get a FREE Quote</div>
      </div>

      </div>
      </div>
      </div>
    </div>
  )
}

export default Quotebutton;
