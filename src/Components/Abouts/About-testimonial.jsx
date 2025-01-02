import React from 'react'
import tescontent from './Testimonial-content'
import Testimonialsec from './Testimonialsec'

const AbouttesTimonial = (props) => {
  return (
    <div className='about-testimonial'>

      {tescontent.map(iconContent =>
    
    <Testimonialsec
     key ={iconContent.id}
     title = {iconContent.title}
     content = {iconContent.content}
     emoji = {iconContent.emoji}
    />
)}

    </div>
  )
}

export default AbouttesTimonial;
