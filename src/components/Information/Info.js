import React from 'react'
import './info.css';
import infopic1 from './info-pic1.jpg';

const Info = () => {
    return (
        <>
         <div className="info-container">
              <div className="info-text-container">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            
             <div className="info-image-container">
           <img src={infopic1} className="info-pic-1" alt=""/>    
             </div>

         </div>   
        </>
    )
}

export default Info
