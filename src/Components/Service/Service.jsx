import React from 'react'
import icons from './icon';
import Serviceicon from './service2';


const Service = () => {
     

  return (
    <div>
    <div className='Extra-support'>

    </div>
      <div className='destination-box-section'>
      <div className='Explore-section'>
       <h5 className='destination-title'>Service</h5>
       <h1 className='Explore-heading'>Tour & Travel Service</h1>
       </div>
        <div className='secvice-item-section'>
         {/* <div className='service-item'> */}
           {/* <serviceitem/> */}

           {icons.map(seritemcontent => 
        
            <Serviceicon
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

export default Service;

