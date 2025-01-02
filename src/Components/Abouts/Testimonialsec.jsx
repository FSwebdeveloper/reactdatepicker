import React from 'react'

const Testimonialsec = (props) => {
  return (
    <div>
      <div className='about-tes-section'>
      <div className='tes-icon-bg'>
       <div className='tes-icon'>
        <img className='testimonial-icon' src={props.emoji} alt=''/>
        </div>
        </div>
        <div className='about-tes-box'>
        <h5 className='tes-heading'>{props.title}</h5>
        <p className='tes-details'>{props.content}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonialsec
