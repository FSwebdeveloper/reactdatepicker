import React from 'react'

const Exploreimg = (props) => {
  return (
    <div className='container'>
    <img className="" src={props.item} alt='explore-img'/>
    {/* <img className="des-explore-img des-exp-margin" src={props.item2} alt='explore-img'/> */}
    <div className='forgen-destion-name'>
     <h5 className='country-city'>{props.city}</h5>
     <span>100 Cites</span>
    </div>
    </div>
  )
}

export default Exploreimg;
