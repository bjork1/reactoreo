import React from "react";
import { Link} from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.


  return (


    <nav>
    <div className="nav-wrapper">
   
      <ul className="left">
        <li>  <Link to="/">Home</Link>
            
            {/* <a href="sass.html"><i class="material-icons left">search</i>Link with Left Icon</a> */}
            
            
            </li>
        <li><Link to="/connect">Connect</Link>
        
        
        
        {/* <a href="badges.html"><i class="material-icons right">view_module</i>Link with Right Icon</a> */}
        
        
        </li>
        
      </ul>
    </div>
  </nav>






//     <nav>
//     <ul>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/connect">Connect</Link>
//       </li>
//       <li>
//         <Link to="/users">Users</Link>
//       </li>
//     </ul>
//   </nav>

//     <nav>
//     <div className="nav-wrapper">
//       <a href="#!" className="brand-logo">My Reactoreo</a>
//       <ul className="right hide-on-med-and-down">
//         <li><Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
//            About
//          </Link></li>
//          <li><Link to="/connect" className={location.pathname === "/connect" ? "nav-link active" : "nav-link"}>
//            Connect
//          </Link></li>
//       </ul>
//     </div>
//   </nav>
    // <ul className="nav nav-tabs">
    //   <li className="nav-item">
    //     <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
    //       Home
    //     </Link>
    //   </li>
    //   {/* <li className="nav-item">
    //     <Link
    //       to="/about"
    //       className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
    //     >
    //       About
    //     </Link>
    //   </li> */}
    //   <li className="nav-item">
    //     <Link
    //       to="/connect"
    //       className={location.pathname === "/connect" ? "nav-link active" : "nav-link"}
    //     >
    //      Connect
    //     </Link>
    //   </li>
      
    //   {/* <li className="nav-item">
    //     <Link
    //       to="/contact/learn"
    //       className={location.pathname === "/contact/learn" ? "nav-link active" : "nav-link"}
    //     >
    //       Learn
    //     </Link>
    //   </li> */}
    // </ul>
  );
}

export default NavTabs;
