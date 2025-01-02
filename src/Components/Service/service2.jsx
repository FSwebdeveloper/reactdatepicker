import React from 'react'

const Serviceicon = (props) => {
  return (
    <div className='servic-div'>
    <div className='service-logo-bg'>
    <img className='service-logo' src={props.imgURL} alt='service-i-img'/>
    </div>
      
           <h5 className='service-title'>{props.sertitle}</h5>
           <p className='service-content'>{props.sercontent}</p>
    </div>
  )
}

export default Serviceicon;
