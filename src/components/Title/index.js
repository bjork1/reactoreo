import React from "react";
import { Link} from "react-router-dom";
//import "./style.css";

function Title() {
 return(

<div className="collection">
<Link to="/skills" class = "collection-item">Sllik Skills</Link>
<Link to="/notes" class = "collection-item">Notetaker Tasks</Link>
<Link to="/port" class = "collection-item">Employee Table</Link>
<Link to="/covid" class = "collection-item">Covid-19 Tool</Link>
<Link to="/test" class = "collection-item">Capitals Quiz App</Link>
<Link to="/weather" class = "collection-item">Weather Forecast</Link>



      
      </div>
 );

}

export default Title;
