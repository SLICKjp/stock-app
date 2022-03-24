import React from 'react';
import Herosection from '../Herosection/Herosection';
// import Aboutus from './Aboutus/Aboutus';
import Itemcontainer from '../Items/Itemcontainer';
import Info from '../Information/Info';
import Information2 from '../Information2/Information2';

const Home = () => {
    return (
        <div>
           <Herosection/>
           <Itemcontainer/>
           <Info/>
           <Information2/>
          
        </div>
    )
}

export default Home
