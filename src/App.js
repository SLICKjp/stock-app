import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Navbar/Home';
import Aboutus from './components/Navbar/Aboutus/Aboutus';
import Contact from './components/Navbar/Contact/Contact';



function App() {
  return (
    <>
    <div className="App">
      {/* <Contact/> */}
     <Navbar/> 
     <Routes>
       <Route path="/" element = {<Home/>} />
       <Route path="aboutus" element = {<Aboutus/>} />
       <Route path="contact" element = {<Contact/>} />
     </Routes>
     </div>
    </>
  );
}

export default App;
