import React, { Component } from "react";
import "./nav.css";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
  import Info from './Info';

class Nav extends React.Component {
  // constructor(props){ 
  //   super(props) 
      
  //   this.state = {msg : 'Connect'} 
      
  //   this.handleClick = this.handleClick.bind(this) 
  // } 

  constructor(props) {
    super(props);
    this.handleConnectClick = this.handleConnectClick.bind(this);
    this.handleProjectsClick = this.handleProjectsClick.bind(this);
    this.state = {isLoggedIn: true};
  }

handleProjectsClick() {
  this.setState({isLoggedIn: true});
  
}
handleConnectClick() {
  this.setState({isLoggedIn: false, });
  
}


    render() {
     const isLoggedIn = this.state.isLoggedIn;
      let button;
   
      if (isLoggedIn) {

         button = (<Link to = "/connect"><button className="waves-effect waves-light btn" onClick = {this.handleConnectClick}  >Connect</button></Link>);
     

      
      } else {
       
               button = (<a className="waves-effect waves-light btn" href="/" onClick = {this.handleConnectClick}  >Projects</a>);

      }
     
        return(
    <nav style = {{height: '80px'}}>
      {/* <h2>Button Toggle: {this.state.buttonState.toString()}</h2>  */}
    <div className="nav-wrapper color">
      <a href="/" className="brand-logo" style = {{marginLeft: '20px'}}>Andrew's Profile</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li style = {{marginRight: '30px'}}>
          <p isLoggedIn = {isLoggedIn} />
       {button}
        {/* <Link to="/connect" onClick={this.toggleState}>
            <a >Hello</a>
            </Link> */}
            </li>
        
      </ul>
    </div>
  </nav>

    
   
  );
}}
export default Nav;

