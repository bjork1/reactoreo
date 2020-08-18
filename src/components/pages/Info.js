import React from "react";
import link from "./andrew.jpg";

function Info() {
  return (
<div >
    
 <div className= "row">
 
 <div className = "col s5">


 <table className = "striped" style = {{padding: '15px', border : '1px solid #E0E0E2', marginLeft: '50px'}}>
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


   
  
      <div class="card " style = {{width: '400px', marginTop: '50px', backgroundColor: '#FA9F42'}}>
        <div class="card-content white-text">
          <span class="card-title">Summary</span>
          <p>Agile business professional with specialties in troubleshooting, marketing, and web development. Holds certifications in Full Stack Web Development and ScrumMaster, and a Bachelor’s degree in Business Administration. </p>
        </div>
        {/* <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div> */}
      </div>
 
  
       


 
  
        </div>
        <div className = "col s3"></div>
        <div className = "col s4" >
        
      <div class="card" style = {{textAlign: 'center', left:'50%'}}>
        <div class="card-image">
          <img src={link}/>
       
          <a href="https://www.linkedin.com/in/bjorkandrew/" target = "_blank" class="btn-floating halfway-fab waves-effect waves-light btn-floating btn-large pulse" style = {{backgroundColor: '#3E78B2'}}><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <p style = {{marginTop: '20px'}}>Let's connect on LinkedIn.</p>
       
    </div>
  </div>

  <table className = "centered">
        <thead>
          <tr>
              <th></th>
              <th>Web</th>
              <th>Dev</th>
              <th>Skills</th>
              <th></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>ReactJS</td>
            <td>jQuery</td>
            <td>Node</td>
            <td>Materialize</td>
            <td>AWS</td>
          </tr>
          <tr>
            <td>Express</td>
            <td>MongoDB</td>
            <td>MySQL</td>
            <td>Bootstrap</td>
            <td>NextJS</td>
          </tr>
          
        </tbody>
      </table>
    
  

        </div>
        
        </div>
        
       
  </div>

    
   
  );
}

export default Info;