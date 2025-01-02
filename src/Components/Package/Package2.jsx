import React from 'react'

const Package2 = (props) => {
  return (
    <div>
    <div>
    <img className="package-img" src={props.item} alt='explore-img'/>
    <div className='package-details'>
     <div className='package-details-1'>
     <p><i class="fa-solid package-icon-color fa-location-dot"></i> Thiland</p>
      <p><i class="fa-solid package-icon-color fa-calendar-days"></i> 3 days</p>
      <p><i class="fa-solid package-icon-color fa-user"></i> 2 Person</p>
     </div>
     <div className='package-details-2'>
      <h5 className='package-details-heading'>Discover amazing places of the world with us</h5>
     </div>
     <hr className='package-hr'/>
     <div className='review-price'>
     <p className='review-price-item'><i class="fa-solid fa-star package-icon-color"></i> 4.5 (250)</p>
     <p className='review-price-item'> $ 350</p>
     </div>
    </div>
    {/* <img className="des-explore-img des-exp-margin" src={props.item2} alt='explore-img'/> */}
    </div>
    </div>
  )
}

export default Package2;
