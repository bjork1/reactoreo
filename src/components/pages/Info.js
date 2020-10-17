import React from "react";
import link from "./andrew.jpg";

function Info() {
  return (
<div style = {{height: '90vh'}}>
    
 <div className= "row">
 
 <div className = "col s5">


 <table className = "striped" style = {{marginLeft: '15%', width: '80%', padding: '15px', border : '1px solid #E0E0E2', marginTop: '10%'}}>
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
            <td><a href="https://github.com/bjork1" target = "_blank" class="waves-effect waves-light btn" style = {{backgroundColor: '#3E78B2'}}>Follow</a></td>
            <td></td>
          </tr>
        </tbody>
      </table>


   
  
      <div className="card " style = {{width: '400px', marginTop: '15%', backgroundColor: '#FBFCFF', marginLeft: '15%', width: '80%'}}>
        <div className="card-content">
          <span className="card-title">Summary</span>
          <p style = {{fontSize: '18px'}}>Agile business professional with specialties in troubleshooting, marketing, and web development. Holds certifications in Full Stack Web Development and ScrumMaster, and a Bachelor’s degree in Business Administration. </p>
        </div>
        {/* <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div> */}
      </div>
 
  
       


 
  
        </div>
       
        <div className = "col s4" >
        
      <div className="card" style = {{textAlign: 'center', left:'50%', marginTop: '10%', marginBottom: '10%', width: '70%'}}>
        <div className="card-image">
          <img src={link}/>
       
          <a href="https://www.linkedin.com/in/bjorkandrew/" target = "_blank" className="btn-floating halfway-fab waves-effect waves-light btn-floating btn-large pulse" style = {{backgroundColor: '#3E78B2'}}><i class="material-icons">add</i></a>
        </div>
        <div className="card-content">
          <p style = {{marginTop: '20px'}}>Let's connect on LinkedIn.</p>
       
    </div>
  </div>

  
    
  

        </div>
        
        </div>
        
       
  </div>

    
   
  );
}

export default Info;