import React from 'react'
import Submitemail from './Submitemail';
// import pservice from './pservice';
// import Contentpart from './Content-part';

const Footer = () => {

  //  function pservicelink(pservicelinkcon){
  //   return (
  //         <Contentpart
  //           id = {pservicelinkcon.id}
  //           title = {pservicelinkcon.title}
  //         />
  //      )
  //  }

  return (
    <div>
      <div className='Extra-support'>

      </div>
      <div className='footer-section'>
  <div className='footer-box'>
   <div className='footer-sec-content'>
   <div className='f-box-one'>
   <h1 className="com-brand company-brand-invert">Xplori<span className="brand-last-2text-color">go</span></h1>
   <p className='f-about'>
   Sed ipsum clita tempor ipsum ipsum amet sit ipsum lorem amet labore rebum lorem ipsum dolor. No sed vero lorem dolor dolor
   </p>
   <h5 className='follow-content'>Follow Us</h5>
   <div className='social-icon social-icon-hover f-social'>
                <li className='social-icon-link social-icon-div'><i class="fa-brands fa-facebook-f"></i></li>
                <li className='social-icon-link social-icon-div'><i class="fa-brands fa-twitter"></i></li>
                {/* <li className='social-icon-link social-icon-div' ><i class="fa-brands fa-linkedin-in"></i></li> */}
                <li className='social-icon-link social-icon-div'><i class="fa-brands fa-instagram"></i></li>
                <li className='social-icon-link social-icon-div'><i class="fa-brands fa-youtube"></i></li>
        </div>
   </div>
   <div className='f-box-one'>
   <div className='servics'> 
   {/* {pservice.map(pservicelink)} */}
   <h5 className='follow-content f-content-title'>Our Services</h5>
      <div className='services-link'>
      <p className='services-link-p'><i className='fa fa-angle-right'></i> About</p>
        <p className='services-link-p'><i className='fa fa-angle-right'></i> Destination</p>
        <p className='services-link-p'><i className='fa fa-angle-right'></i> Services</p>
        <p className='services-link-p'><i className='fa fa-angle-right'></i> Package</p>
        <p className='services-link-p'><i className='fa fa-angle-right'></i> Guides</p>
        <p className='services-link-p'><i className='fa fa-angle-right'></i> Testimonial</p>
        <p className='services-link-p'><i className='fa fa-angle-right'></i> Blog</p>
      </div>
   </div>
    
   </div>
   <div className='f-box-one'>
   <div className='servics'> 
   {/* {pservice.map(pservicelink)} */}
   <h5 className='follow-content f-content-title'>Usefull Links</h5>
      <div className='services-link'>
        <p className='services-link-p'> <i className='fa fa-angle-right'></i> About</p>
        <p className='services-link-p'> <i className='fa fa-angle-right'></i> Destination</p>
        <p className='services-link-p'> <i className='fa fa-angle-right'></i> Services</p>
        <p className='services-link-p'> <i className='fa fa-angle-right'></i> Package</p>
        <p className='services-link-p'> <i className='fa fa-angle-right'></i> Guides</p>
        <p className='services-link-p'> <i className='fa fa-angle-right'></i> Testimonial</p>
        <p className='services-link-p'> <i className='fa fa-angle-right'></i> Blog</p>
      </div>
   </div> 
    
   </div>

   <div className='f-box-one'>
   <div className='servics'> 
   {/* {pservice.map(pservicelink)} */}
   <h5 className='follow-content f-content-title'>Contact Us</h5>
      <div className='services-link'>
      <p><i class="fa-solid contact-us-icon fa-location-dot"></i> H.N Road, Cooch Behar</p>
          <p> <i class="fa-solid contact-us-icon  fa-phone"></i> +917031130622</p>
          <p> <i class="fa-sharp  contact-us-icon  fa-solid fa-envelope"></i> info@xplorigo.com</p>
          <h5 className='follow-content f-content-title news-letter-title'>NewsLetter</h5>
          <Submitemail/>
      </div>
   </div>
    
   </div>
   </div>
  </div>

  </div>
    </div>
  )
}

export default Footer;
