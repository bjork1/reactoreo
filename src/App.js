//import React from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Connect from "./components/pages/Connect";


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




 function App() {
  return (
    <Router>
      <div>
        

        <NavTabs></NavTabs>




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
        <Switch>
          <Route path="/connect">
            <Connect />
          </Route>
          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    
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
