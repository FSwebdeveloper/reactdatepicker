import React, { useState, useEffect } from 'react'
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import Itdown from './Itdown';
import Itincluding from './Itinclude';
import sikkimdIt from './sikkimdIt';
import sdinclue from './sdinclude';
import Aboutsection from '../Abouts/Aboutsection';
import Submitfrom from '../Popup/Submitfrom';

const Sikkimdarjeelingtour = () => {

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
      <Contact/>
      <Navbar/>
      <div className='slider'>
    <div className='nav-Wallpaper-section Next-wallpaper-img'>
      {/* <img className='Wallpaper-img' src='./img/carousel-1.jpg' alt='carsouel-image'/> */}
      <div className='nav-icon-wallpaper'>
        <div className='c-text-heading'>
          {/* <h5 className='c-about'>Tours & Travel</h5> */}
         <h1 className='c-title nav-icon-page'>Sikkim D Tour</h1>
         {/* <button className='carousel-btn' type='submit'>Book Now</button> */}
        </div>
      </div>
    </div>
    </div>
    <div className='about-section'>
    <Aboutsection/>
    </div>
    {/* <Destination/> */}
    <div className='Extra-support'>

      </div>
      <div className='destination-box-section'>
      <div className='Explore-section'>
       <h5 className='destination-title'>4Night 5Days</h5>
       <h1 className='Explore-heading'>Sikkim Darjeeling Tour Package</h1>
       </div>
      {/* <div className='andaman-section'>
      <img className='andaman-img' src='https://images.unsplash.com/photo-1682687981630-cefe9cd73072?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
      <div className='price-tag-quote'>
      <div className='price-tag'>
       <div className='price-tag-sec'>
       <p className='get-quote-content-title price-basic'>Starting from</p>
       <div className='price-pax'>
       <p className='get-quote-content price-pax-sec'>₹ 18,000</p>
       <p className='get-quote-content per-person-sec'>Per Person</p>
       </div>
       </div>
      </div>
      <div className='get-quote'>
      <p className='get-quote-content-title'>Tour Details</p>
      <p className='get-quote-content'><i class="fa-solid package-icon-color fa-location-dot"></i> Destination: Andaman</p>
      <p className='get-quote-content'><i class="fa-solid package-icon-color fa-calendar-days"></i> Duration: 6 Nights 7 Days</p>
      
      <p className='get-quote-content get-quote-content-ex'> <i class="fa-solid package-icon-color fa-right-left"></i> Ex: Kolkata</p>
      <div>
      <div className='sign-destination-btn quote-btn' type='submit'> <img className='call-gif' src='https://lh4.googleusercontent.com/proxy/b5nvuM_z5To41IjlaQJUf64asxJNl-Yfwl9xl0Zn1gPEqhePoy_OHYJ54KLnjSexjDcF3_Qb6jVu3Dw' alt=''/>Get a FREE Quote</div>
      </div>

      </div>
      </div>
      </div> */}

      
      {/* Quote Function */}
      
      <div className={popUp === true ? "opacity" : "opacity-none"}></div>
      <div className={popUp === false ? "sign-destination-box-item-close" : "sign-destination-box-item-popup" }>
      {/* <div className='sign-destination'>
      </div> */}
      <i class="fa fa-window-close" aria-hidden="true" onClick={()=> setPopUp(false)}></i>
      <Submitfrom/>
      </div>

      <div className='andaman-section'>
      <div className='andaman-sec-img'>
      <img className='andaman-img' src="https://plus.unsplash.com/premium_photo-1697730418140-064a5b6c2e17?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=''/>
      </div>
      <div className='package-detail'>
      <div className='price-tag'>
       <div className='price-tag-sec'>
       <p className='get-quote-content-title price-basic'>Starting from</p>
       <div className='price-pax'>
       <p className='get-quote-content price-pax-sec'>₹ 6,999</p>
       <p className='get-quote-content per-person-sec'>Per Person</p>
       </div>
       </div>
      </div>

      <div className='get-quote'>
      <p className='get-quote-content-title'>Tour Details</p>
      <p className='get-quote-content'><i class="fa-solid package-icon-color fa-location-dot"></i> Destination: Sikkim Darjeeling</p>
      <p className='get-quote-content'><i class="fa-solid package-icon-color fa-calendar-days"></i>Duration: 4 Nights 5 Days</p>
      
      <p className='get-quote-content get-quote-content-ex'> <i class="fa-solid package-icon-color fa-right-left"></i>Ex: Kolkata</p>
      
      <div onClick={()=> setPopUp(true)}>
      <div className='sign-destination-btn quote-btn' type='submit'> <img className='call-gif' src='https://i.pinimg.com/originals/68/85/87/688587d89bcaad9109cda401fed39b66.gif' alt='' />Get a FREE Quote</div>
      </div>

      </div>
      </div>
      </div>

      {/* Quote Function */}

      {/* <div className='andaman-section'>
      <div className='andaman-sec-img'>
      <img className='andaman-img' src='https://plus.unsplash.com/premium_photo-1697730418140-064a5b6c2e17?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
      </div>
      <div className='package-detail'>
      <div className='price-tag'>
       <div className='price-tag-sec'>
       <p className='get-quote-content-title price-basic'>Starting from</p>
       <div className='price-pax'>
       <p className='get-quote-content price-pax-sec'>₹ 6,999</p>
       <p className='get-quote-content per-person-sec'>Per Person</p>
       </div>
       </div>
      </div>

      <div className='get-quote'>
      <p className='get-quote-content-title'>Tour Details</p>
      <p className='get-quote-content'><i class="fa-solid package-icon-color fa-location-dot"></i> Destination: Sikkim Darjeeling</p>
      <p className='get-quote-content'><i class="fa-solid package-icon-color fa-calendar-days"></i> Duration: 4 Nights 5 Days</p>
      
      <p className='get-quote-content get-quote-content-ex'> <i class="fa-solid package-icon-color fa-right-left"></i> Ex: Kolkata</p>
      <div>
      <div className='sign-destination-btn quote-btn' type='submit'> <img className='call-gif' src='https://i.pinimg.com/originals/68/85/87/688587d89bcaad9109cda401fed39b66.gif' alt=''/>Get a FREE Quote</div>
      </div>

      </div>
      </div>
      </div> */}
      
      <div className='Itinerary-heading'>
      <h1 className='I-heading I-heading-policy'>5Days Sikkim Darjeeling Tour Itinerary</h1>
      </div>
      
      <div className='Itdown-section'>
      {
                    sikkimdIt.map(questionItem => {
                        return (
                            <Itdown
                                id={questionItem.id}
                                key={questionItem.id}
                                question={questionItem.question}
                                answer = {questionItem.answer}
                                answer1 = {questionItem.answer1}
                                text = {questionItem.text}  
                                />

                        )
                    })
                }
      </div>
      {/* <div className='Itinerary-heading'>
      <h1 className='I-heading'>7Days Package Including</h1>
      </div>
      
      <div className='andaman-section'>
      <div className='Inclution-section'>
      <p className='I-heading'>Accommodation, Food, Ship, Speed boats & cruise tkt, all entry fee your tour program.</p>
      </div>
      </div>
      <div className='Itinerary-heading'>
      <h1 className='I-heading'>7Days Package Excluding</h1>
      </div>
      <div className='andaman-section'>
      <div className='Inclution-section'>
      <p className='I-heading'>Mineral Water, Camera charges, any other personal activities (Glass bottom boat, snorkeling, Scuba diving etc ) & Any extra tour pragm.</p>
      </div>
      </div>
      <div className='Itinerary-heading'>
      <h1 className='I-heading'>Accommodation Details</h1>
      </div>
      <div className='andaman-section'>
      <div className='Inclution-section'>
      <div className='I-heading'>
      <h4>Hotel Name </h4>
        <li>Valley Luxury hotel- Portblair </li>
        <li>Orient Legend beach Resort at Have lock Island.</li>
        <li>Deep sea Resort at Neal Island.</li>
      </div>
      </div>
      </div> */}
      
      
      <div className='Itdown-section'>
      {
                    sdinclue.map(questionItem => {
                        return (
                            <Itincluding
                                id={questionItem.id}
                                key={questionItem.id}
                                question={questionItem.question}
                                answer = {questionItem.answer}
                                answer1 = {questionItem.answer1}
                                answer2 = {questionItem.answer2}
                                answer3 = {questionItem.answer3}
                                answer4 = {questionItem.answer4}
                                text = {questionItem.text} 
                                text1 = {questionItem.text1} 
                                />

                        )
                    })
                }
      </div>
      {/* <div className='Itinerary-heading'>
      <h1 className='I-heading-policy'>Booking Policy</h1>
      </div>
      <div className='andaman-section'>
      <div className='Inclution-section'>
      <div className='I-heading-policy'>
      <li>All hotels and resorts check-in time is 9am and check-out time is 8am.</li>
      <li>As on your conform booking whichever above mentioned hotel will have available room that hotel will be reserve for your package.</li>
      <li>For 3year child there will be no tour charges but for entry fee and cruise ticket the charges should be pay by the party.</li>
      <li>30% of your total package cost should pay in the below mention account number and the remaining 70% on check-in time.</li>
      <li>On check-out day if are require to have lunch then the charges should be pay by the party.</li>
      </div>
      </div>
      </div> */}
      </div>
    <Footer/>
    </div>
  )
}

export default Sikkimdarjeelingtour;
