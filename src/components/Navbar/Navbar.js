import React from "react";
import './navbar.css';
import {Link} from "react-router-dom"; 



const Navbar = () => {
  return (
          <div className="navbar navbar-dark">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <p className="navbar-brand">
          BUSINESS
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-0 mb-lg-0 ">
              <li className="nav-item px-3 item-1">
                <Link to="/">Home</Link>
              </li>
              
              <li className="nav-item px-3">
                <Link to="/aboutus">About US</Link>
              </li>
              
              <li className="nav-item px-3">
                <Link to="/contact">Contact</Link>
              </li>
             
              
            </ul>
            
            <form class="form-inline my-2 my-lg-0">   
            <button type="button" className="btn btn-1 btn-outline-dark">Log In</button>
            <button type="button" className="btn btn-2 btn-outline-dark">Sign Up</button>
     {/* <button className=".nav-btn btn btn-dark my-2 my-sm-0 " type="submit">Search</button>
     <button className=".nav-btn btn btn-dark my-2 my-sm-0 " type="submit">Search</button> */}
   </form>
  
          </div>
          
        </div>
      </nav>
    </div>
  
    

  );
};

export default Navbar;
