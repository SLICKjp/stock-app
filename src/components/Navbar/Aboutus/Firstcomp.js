import React from "react";
import pic from "./aboutus2.jpeg";

const Firstcomp = () => {
  return (
    <div className="firstpart">
      <img src={pic} className="bg-image" />
      <div className="top-left">
        <h1 className="aboutus-heading">Creative teams bringing ideas to life.</h1>
      
        <p className="para-aboutus">
        We’re a team of passionate individuals with a desire to create meaningful work. We never rest on our past successes and continue to push boundaries. Learning is a must in the industry and we are deep into the digital forest. We believe in supporting our team to create the future, pushing ourselves to deliver to most forward-thinking solutions. 
        </p>
      
      </div>
    </div>
    

  );
};

export default Firstcomp;
