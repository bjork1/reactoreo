import React from "react";
import { Link} from "react-router-dom";
//import "./style.css";


import "./style.css"
function Title() {
 return(

<div className = "hello">


<div className="back collection with-header">
<div class="collection-header"><h4>Projects</h4></div>
<Link to="/audio" class = "collection-item color">Audio Mind</Link>
<Link to="/skills" class = "collection-item color">Sllik Skills</Link>
<Link to="/notes" class = "collection-item color">Notetaker Tasks</Link>
<Link to="/employee" class = "collection-item color">Employee Table</Link>
<Link to="/covid" class = "collection-item color">Covid-19 Tool</Link>
<Link to="/quiz" class = "collection-item color">Capitals Quiz App</Link>
<Link to="/weather" class = "collection-item color">Weather Forecast</Link>
<Link to="/" class = "collection-item color">Home</Link>


</div>

      </div>
 );

}

export default Title;
