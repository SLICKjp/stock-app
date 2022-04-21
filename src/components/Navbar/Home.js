import React from 'react';
import Herosection from '../Herosection/Herosection';
// import Aboutus from './Aboutus/Aboutus';
import Itemcontainer from '../Items/Itemcontainer';
import Info from '../Information/Info';
import Information2 from '../Information2/Information2';
import Footercontainer from '../Footer/Footercontainer';

const Home = () => {
    return (
        <div>
           <Herosection/>
           <Itemcontainer/>
           <Info/>
           <Information2/>
           <Footercontainer/>
          
        </div>
    )
}

export default Home
