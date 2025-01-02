import React from 'react'
import DestinatioBox from './Destinatio-box'
import PackageAbout from './Package-about'
import AbouttesTimonial from './About-testimonial'


export default function About() {
  return (
    <div>
    <div className='about-section'>
      <DestinatioBox/>
      <PackageAbout/>
      <AbouttesTimonial/>
    </div>
    </div>
  )
}
