import React from 'react'

const Submitfrom = () => {
  return (
    <div>
      <div className='sign-depart-date'>
      <input className='input-element' type='text' name='name' placeholder='Your Name'></input>
      </div>
      <div className='sign-return-date'>
      <input  className='input-element' type='email' name='email' placeholder='Your Email'/>
      </div>
      <div className='sign-return-date'>
      <input  className='input-element' type='subject' name='destination' placeholder='Your Destination'/>
      </div>
      <div className='sign-return-date'>
      <textarea rows={0} cols={30} className='input-element' type='message' name='message' placeholder='Your Message'/>
      </div>
      {/* <div className='sign-duration'>
        <p className='input-destination'>Select a destination</p>
      </div> */}
      <button className='sign-btn sign-destination-btn' type='submit'>Send Message</button>
    </div>
  )
}

export default Submitfrom


