import React from "react";
import "./nav.css";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return(
    <nav>
    <div className="nav-wrapper color">
      <a href="#" className="brand-logo" style = {{marginLeft: '20px'}}>Andrew's Profile</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li style = {{marginRight: '30px'}}>
        <Link to="/connect">
            <a >Connect</a>
            </Link>
            </li>
        
      </ul>
    </div>
  </nav>

    
   
  );
}}
export default Nav;

