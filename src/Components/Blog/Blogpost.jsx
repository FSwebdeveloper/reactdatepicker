import React from 'react'

const Blogpost = (props) => {
  return (
    <div className='servic-div-blog'>
    <div className=''>
    <img className='blog-service-logo' src={props.imgURL} alt='service-i-img'/>
    </div>
        <h5 className='blog-service-title'>{props.sertitle}</h5>
        <p className='blog-service-content'>{props.sercontent}</p>
    </div>
    
  )
}

export default Blogpost;
