import React from 'react';
import element from './element';
import Package2 from './Package2';


const Package = () => {
  return (
    <div>
      <div className='Extra-support'>

    </div>
   <div className='destination-box-section'>
   <div className='Explore-section'>
   <h5 className='destination-title'>Packages</h5>
   <h1 className='Explore-heading'>Pefect Tour Packages</h1>
   </div>
   <div className='package-place-img'>

   {element.map(exploreContent => 
           
           <Package2
              id = {exploreContent.id}
              item =  {exploreContent.item}
            //   item2 = {exploreContent.item2}
        
           />
   )
 }

 </div>
</div>
    </div>
  )
}

export default Package;
