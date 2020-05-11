import React from "react";
import { Link} from "react-router-dom";
//import "./style.css";

function Title() {
 return(

<div className="collection">
<Link to="/test" class = "collection-item">Test</Link>
<Link to="/covid" class = "collection-item">Covid</Link>
<Link to="/" class = "collection-item">Home</Link>
        {/* <a href="#!" class="collection-item">Test</a>
        <a href="#!" class="collection-item active">Covid</a>
        <a href="#!" class="collection-item">Alvin</a>
        <a href="#!" class="collection-item">Alvin</a> */}
      </div>
 );

}

export default Title;
