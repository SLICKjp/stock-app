import React from "react";
import './info.css';
import infopicture1 from './payUs.jpg';

const Information2 = () => {
  return (
    <>
      <div className="info-container">
      <div className="info-image-container">
          <img src={infopicture1} className="info-pic-1" alt="" />
        </div>
        <div className="info-text-container">
        <p>
                      <p><h3>Your Flexibility In Investment.</h3></p>
                  <p>We also, want to create an app that didn't limit the user of what they want. So here is our main features just for you. Some of them are like: </p>
                      
                      <ol>
                          <li><h4>Invest In Any Amount.</h4>
                          
                          </li>
                          <li><h4>No Investment Fee.</h4>
                          
                          </li>
                          <li>
                              <h4>Encrypted and Secured.</h4>
                              
                          </li>

                      </ol>
                  </p>
            
          
          
        </div>

        
      </div>
    </>
  );
};

export default Information2;
