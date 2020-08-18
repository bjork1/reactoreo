import React from "react";
import link from "./linkpic.jpg";

function Info() {
  return (
<div >
    
 <div className= "row">
 <div className = "col s1"></div>
 <div className = "col s4">


 <table className = "striped">
        <thead>
          <tr>
              <th>Contact</th>
              <th>Me</th>
              
            <td></td>
              
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Phone</td>
            <td>651-233-6987</td>
            <td></td>
            
          </tr>
          <tr>
            <td>Email</td>
            <td>bjorkandrew1@gmail.com</td>
            <td></td>
          </tr>
          <tr>
            <td>Github</td>
            <td><a class="waves-effect waves-light btn">Follow</a></td>
            <td></td>
          </tr>
        </tbody>
      </table>



       


 
  
        </div>
        <div className = "col s3"></div>
        <div className = "col s4">
        
      <div class="card">
        <div class="card-image">
          <img src={link}/>
       
          <a href="https://www.linkedin.com/in/bjorkandrew/" target = "_blank" class="btn-floating halfway-fab waves-effect waves-light red btn-floating btn-large pulse"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <p style = {{marginTop: '20px'}}>Let's connect on LinkedIn.</p>
       
    </div>
  </div>


        </div>
        
        </div>
        
       
  </div>

    
   
  );
}

export default Info;