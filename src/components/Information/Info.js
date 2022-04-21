import React from 'react'
import './info.css';
import infopic1 from './img.jpg';

const Info = () => {
    return (
        <>
         <div className="info-container">
              <div className="info-text-container">
                  <p>
                      <p><h3>Fully Secured and Safe Process</h3></p>
                  <p>We always make sure that your investment process is always secured and protected by our system.</p>
                      
                      <ol>
                          <li><h4>Real-time Checkup</h4>
                          <p> By always checking up your activity in investing.</p>
                          </li>
                          <li><h4>Passcode</h4>
                          <p> Entering the passcode that you're the only one who know it.</p>
                          </li>
                          <li>
                              <h4>Security.</h4>
                              <p>
                              At a basic level, a security is a financial asset or instrument that has value and can be bought, sold, or traded. 
                              </p>
                          </li>

                      </ol>
                  </p>
              </div>
            
             <div className="info-image-container">
           <img src={infopic1} className="info-pic-1" alt=""/>    
             </div>

         </div>   
        </>
    )
}

export default Info
