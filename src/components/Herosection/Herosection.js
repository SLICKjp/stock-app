import React from "react";
import './Herosection.css';
import Pic from './pic1.jpg';
const Herosection = () => {
  return (
    <>
      <div className="container1">
        <div className="text-container">  
        <h1 className="text-heading">Better Way To Invest</h1>
        <p className="text-description">
          Enjoy the feeling and experience of a better way to invest in
          everything. No, more struggling, striving, or even trying. It's just
          Better !
        </p>
        </div>
        <div className="image-container">
        <img src={Pic} className="design" alt=""/>
        </div>
      </div>
    </>
  );
};

export default Herosection;
