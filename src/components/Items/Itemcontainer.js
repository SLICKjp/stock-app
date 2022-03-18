import React from "react";
import Item from "./Item";
import image2 from './pic2.png';
import image3 from './pic3.png';
import image4 from './pic4.png';


const Items = () => {
  return (
    <>
      <div className="container-2">
        <Item
          img={image2}
          heading="Integrate"
          description="Start by integrating your account with just registering with us!"
        />
        <Item
          img={image3}
          heading="Analysis"
          description="After that start analyzing
              the market and targer where you want to invest"
        />
        <Item
        img={image4}
        heading="Start Investing"
        description="Got the target start investing just by a single click" 
        />
      </div>
    </>
  );
};

export default Items;
