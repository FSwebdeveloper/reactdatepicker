import React from 'react'

const Signup = () => {
  return (
    <div>
      <div className='Extra-support'>

      </div>
      <div className='signup-background'>
      <div className='carousel-text-signup'>
      <div className='signup-box'>
      <div className='sigup-box-element'>
       <div className='sign-box-section'>
         <h6 className='sign-box-element-offer'>Mega Offer</h6>
         <h1 className='off-heading'> <span className='honeymoon-off'>30% OFF </span> For Honeymoon</h1>
         <p className='sign-box-element-p'>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
         <p><i className='fa fa-check text-primary'></i> Labore eos amet dolor amet diam</p>
         <p><i className='fa fa-check text-primary'></i> Etsea et sit dolor amet ipsum</p>
         <p><i className='fa fa-check text-primary'></i> Diam dolor diam elitripsum vero</p>
       </div>
       <div className='signup-from-box'>
        {/* <div className='signup-heading'>
          <h1>Sign Up Now</h1>
        </div>
        <div className='from-section'>
          <form>
            <div className='from-group'>
            <input className='input-element' type='text' name='name' placeholder='Your Name'></input><br/>
            <input  className='input-element' type='email' name='email' placeholder='Your Email'/><br/>
            <p className='input-destination'>Select a destination</p>
            <button className='btn destination-btn from-button' type='submit'>Sign Up Now</button>
            </div>
            <div/>
          </form>
        </div> */}
        <div className='signup-heading'>
          <h1>Sign Up Now</h1>
        </div>
        <div className='sign-destination'>
      <div className='sign-destination-box-item'>
      {/* <div className='sign-destination'>
      </div> */}
      <div className='sign-depart-date'>
      <input className='input-element' type='text' name='name' placeholder='Your Name'></input>
      </div>
      <div className='sign-return-date'>
      <input  className='input-element' type='email' name='email' placeholder='Your Email'/>
      </div>
      <div className='sign-duration'>
        <p className='input-destination'>Select a destination</p>
      </div>
      <button className='sign-btn sign-destination-btn' type='submit'>Submit</button>
      </div>
      </div>
       </div>
     </div>
     </div>
     </div>
      </div>
    </div>
  )
}

export default Signup
