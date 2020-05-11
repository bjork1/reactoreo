//import React from "react";
import Title from "../Title";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Test from "./Test";
import Covid from "./Covid";
import Weather from "./Weather";
import Notes from "./Notes";

import Skills from "./Skills";
import Port from "./Port";


function About() {
  return (
<Router>
      <div className= "row">
      <div className = "col s12 m2">
          <Title></Title>
        

          </div>
          <div className="row col s12 m8">

        <Switch>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/covid">
            <Covid />
          </Route>
          <Route path="/weather">
            <Weather />
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/port">
            <Port />
          </Route>
          
          
        </Switch>
        </div>
      </div>
    </Router>



    //   <div className = "row">
    //     <Title></Title>  
    
    //   <div className="col s12 m9">
    //   <p>Hello</p>
    // </div>
    // </div>


  );
}

export default About;