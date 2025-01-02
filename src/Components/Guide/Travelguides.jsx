import React from 'react'

const Travelguides = (props) => {
  
  return (
    <div>
    <div className='servic-div-travel'>
    <div className='team-guide-sec'>
    <img className='' src={props.imgURL} alt='service-i-img'/>
    <div className='social-hover-sec'>
    <div className='social-icon social-icon-hover'>
                <li className='social-icon-link social-icon-div'><i class="fa-brands fa-facebook-f"></i></li>
                <li className='social-icon-link social-icon-div'><i class="fa-brands fa-twitter"></i></li>
                {/* <li className='social-icon-link social-icon-div' ><i class="fa-brands fa-linkedin-in"></i></li> */}
                <li className='social-icon-link social-icon-div'><i class="fa-brands fa-instagram"></i></li>
                <li className='social-icon-link social-icon-div'><i class="fa-brands fa-youtube"></i></li>
        </div>
    </div>
    </div>
    <div className='team-details-sec'>
        <h5 className='team-guide-name'>{props.sertitle}</h5>
        <p className='team-guide-about'>{props.sercontent}</p>
    </div>   
    </div>
    </div>
  )
}

export default Travelguides;
