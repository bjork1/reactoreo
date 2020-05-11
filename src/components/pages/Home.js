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