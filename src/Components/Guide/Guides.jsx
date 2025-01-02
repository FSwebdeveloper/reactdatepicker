import React from 'react'
import Travelguides from './Travelguides';
import tguride from './traguide';

const Guides = () => {
  return (
    <div>
      <div className='Extra-support'>

    </div>
  <div className='destination-box-section'>
  <div className='Explore-section'>
   <h5 className='destination-title'>Guides</h5>
   <h1 className='Explore-heading'>Our Travel Guides</h1>
   </div>

    <div className='secvice-item-section-guide'>
         {/* <div className='service-item'> */}
           {/* <serviceitem/> */}

           {tguride.map(seritemcontent => 
        
            <Travelguides
                id = {seritemcontent.id}
                imgURL = {seritemcontent.imgURL}
                sertitle = {seritemcontent.sertitle}
                sercontent = {seritemcontent.sercontent}
               
            />
        ) 
    }
         {/* </div> */}
        </div>
     
    
  </div>
    </div>
  )
}

export default Guides;
