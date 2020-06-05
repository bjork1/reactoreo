import React from "react";
import link from "./linkpic.jpg";
import "./main.css"

function Main() {
  return (
<div>
<div className= "row">

    <div className = "col s1"></div>
      <div className = "col s6 m2">  
    <a  href="https://fontmeme.com/name-tags/" ><img src="https://fontmeme.com/permalink/200605/7cefe1ce2c1d98a929df7a2b428f082a.png" alt="name-tags" border="0" width = "250px"/></a>
 </div>
 <div className = "col s3 m4"></div>
 <div className = "col s4">
     <p className = "passion">Passionate problem solver, agile collaborator. Enjoys challenges and using creativity.</p>
     </div>
 </div>
 

 <div className= "row">
 <div className = "col s1"></div>
 <div className = "col s4">
<ul className = "bigger"><li>My top 5 skills are:
        </li>
    <li>ReactJS
        </li><li>MongoDB
        </li><li>MySQL
        </li><li>NodeJS
        </li><li>jQuery
        </li></ul> 

       


 
  
        </div>
        <div className = "col s3"></div>
        <div className = "col s4">
        
      <div class="card">
        <div class="card-image">
          <img src={link}/>
       
          <a href="https://www.linkedin.com/in/bjorkandrew/" target = "_blank" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <p>Let's connect on LinkedIn.</p>
       
    </div>
  </div>


        </div>
        
        </div>

        <div className = "row">
            <div className = "col s1"></div>

            <div className = "col s5"> <h2>Contact</h2>
            <p>Phone: 651-233-6987</p>
            <p>Email: bjorkandrew1@gmail.com</p></div>
            <div className = "col s1"></div>
            <div className = "col s5">
                <h3>Follow my Github</h3>
                <a class="waves-effect waves-light btn-large" href = "https://github.com/bjork1" target = "_blank">Check it out</a>

                
            </div>
        </div>
  </div>

    
   
  );
}

export default Main;