import React from 'react'

const Contact = () => {
  return (
    <div className='contact-bg'>
      <div className='contact-menu'>
        <div className='contact-icon'>
        <p> <i class="fa-sharp fa-solid fa-envelope"></i> myfreshairtrip@gmail.com</p> |
          <p> <i class="fa-solid fa-phone"></i> +917031130622</p>
        </div>
        <div className='social-icon'>
                <li className='social-icon-link'><i class="fa-brands fa-facebook-f"></i></li>
                <li className='social-icon-link'><i class="fa-brands fa-twitter"></i></li>
                <li className='social-icon-link'><i class="fa-brands fa-linkedin-in"></i></li>
                <li className='social-icon-link'><i class="fa-brands fa-instagram"></i></li>
                <li className='social-icon-link'><i class="fa-brands fa-youtube"></i></li>
        </div>
      </div>
    </div>
  ) 
}

export default Contact
