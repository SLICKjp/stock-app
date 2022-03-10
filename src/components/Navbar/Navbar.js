import React from "react";
import './navbar.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"; 
import Home from './Home';
import Aboutus from './Aboutus';
import Contact from './Contact';



const Navbar = () => {
  return (
    <Router>
      <div className="navbar navbar-dark">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          BUSINESS
          </a>
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
                <Link to="/Home">Home</Link>
              </li>
              
              <li className="nav-item px-3">
                <Link to="/Aboutus">About US</Link>
              </li>
              
             
              <li className="nav-item px-3">
                <Link to="/Contact">Contact</Link>
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
    <Switch>
            <Route  path="/Home" component={Home}>
              <Home/>
            </Route>
            <Route  path="/Aboutus" component={Aboutus}>
              <Aboutus/>
            </Route>
            <Route  path="/Contact" component={Contact}>
              <Contact/>
            </Route>
            
          </Switch>
    </Router>

  );
};

export default Navbar;
