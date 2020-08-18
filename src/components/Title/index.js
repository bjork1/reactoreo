import React from "react";
import { Link} from "react-router-dom";
//import "./style.css";


import "./style.css"
function Title() {
 return(

<div className = "hello">


<div className="back collection with-header" >
<div class="collection-header" style = {{backgroundColor: '#3E78B2', color :'#E0E0E2'}}><h4>Projects</h4></div>
<Link to="/audio" class = "collection-item color" style = {{color: '#0B6E4F'}}>Audio Mind</Link>
<Link to="/skills" class = "collection-item color" style = {{color: '#0B6E4F'}}>Sllik Skills</Link>
<Link to="/notes" class = "collection-item color" style = {{color: '#0B6E4F'}}>Notetaker Tasks</Link>
<Link to="/employee" class = "collection-item color" style = {{color: '#0B6E4F'}}>Employee Table</Link>
<Link to="/covid" class = "collection-item color" style = {{color: '#0B6E4F'}}>Covid-19 Tool</Link>
<Link to="/quiz" class = "collection-item color" style = {{color: '#0B6E4F'}}>Capitals Quiz App</Link>
<Link to="/weather" class = "collection-item color" style = {{color: '#0B6E4F'}}>Weather Forecast</Link>



</div>

      </div>
 );

}

export default Title;
