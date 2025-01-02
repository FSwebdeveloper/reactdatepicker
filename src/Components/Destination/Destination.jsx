import React from 'react'
import Exploreimg from './Exploreimg';
import destinationItem from './Exploreitem';

const Destination = () => {
  return (
    <div>
      <div className='Extra-support'>

      </div>
      <div className='destination-box-section'>
      <div className='Explore-section'>
       <h5 className='destination-title'>Destination</h5>
       <h1 className='Explore-heading'>Explore Top Destination</h1>
       </div>
       <div className='explore-place-img'>
    
       {/* <Exploreimg/> */}
       
       {destinationItem.map(exploreContent => 
           
           <Exploreimg
              id = {exploreContent.id}
              item =  {exploreContent.item}
              city = {exploreContent.city}
           />
   )
 }
       </div>
      </div>
    </div>
  )
}

export default Destination;
