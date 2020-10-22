//import React from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Main from "./components/pages/Main";
import Title from "./components/Title/index";
import Covid from "./components/pages/Covid";
import Audio from "./components/pages/Audio";
import Skills from "./components/pages/Skills";
import Notes from "./components/pages/Notes";
import Employee from "./components/pages/Port";
import Quiz from "./components/pages/Test";
import Weather from "./components/pages/Weather";
import Nav from "./components/pages/Nav";
import Connect from "./components/pages/Info";



import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




 function App() {
  return (

    
  <Router>
      <div className = "App-header">
      <Nav></Nav>
<div className = "row">


  {/* <div className = "col sm5">
     <Title></Title>
     </div> */}


     <div>
<Switch>
<Route path = "/" exact>
<Main/>

  </Route>
  


  <Route path = "/connect" exact>
    <Connect/>
  </Route>
  <Route path = "/covid" exact>
<Covid/>

  </Route>
  <Route path = "/audio" exact>
<Audio/>

  </Route>
  <Route path = "/skills" exact>
<Skills/>

  </Route>
  <Route path = "/notes" exact>
<Notes/>

  </Route>
  <Route path = "/employee" exact>
<Employee/>

  </Route>
  <Route path = "/quiz" exact>
<Quiz/>

  </Route>
  <Route path = "/weather" exact>
<Weather/>

  </Route>
</Switch>
</div>

        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/connect">Connect</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
       


      
       </div>
      </div>
      </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function Connect() {
//   return <h2>Connect</h2>;
// }

// function Users() {
//   return <img src={logo} alt="Logo" />;
// }



// function App() {
//   return (
//     <Router>
//       <div>
//         <NavTabs />
//         <Route exact = "/" component = {Home} />
//         <Route exact = "/connect" component = {Connect} />
//       </div>
//     </Router>
//   )
// }




export default App;
