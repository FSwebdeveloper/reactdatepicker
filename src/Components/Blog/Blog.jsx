import React from 'react'
import Blogpost from './Blogpost';
import bcontent from './bcontent';

const Blog = () => {
  return (
    <div>
      <div className='Extra-support'>

   </div>
  <div className='destination-box-section'>
  <div className='Explore-section'>
   <h5 className='destination-title'>Our Blog</h5>
   <h1 className='Explore-heading'>Latest From Our Blog</h1>
   </div>
    <div className='secvice-item-section'>
     {/* <div className='service-item'> */}
       {/* <serviceitem/> */}

       {bcontent.map(seritemcontent => 
    
        <Blogpost
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

export default Blog;
