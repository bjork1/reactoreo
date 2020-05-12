import React from "react";
import portfolio from './portfolio.jpg';
import nebraska from './nebraska.jpg';



function Connect() {
  return (
<div className = "container">
<div className="row">
<div class="card">

<div class="card-content">
  <span class="card-title activator grey-text text-darken-4">Contact Info<i class="material-icons right">more_vert</i></span>
  <p><a href="#">This is a link</a></p>
</div>
<div class="card-reveal">
  <span class="card-title grey-text text-darken-4">Phone and Email<i class="material-icons right">close</i></span>
  <p>651-233-6987 and bjorkandrew1@gmail.com</p>
</div>

</div>


</div>
    <div className="row">
    <div className="col s12 m6">
      <div className="card">
        <div className="card-image">
        <img src={portfolio} alt = "portfolio"/> 
          <span className="card-title">Business</span>
        </div>
        
        <div className="card-content">
          <p>I am on LinkedIn. If you would like to view my experience, skill sets, and be apart of my network, click the link below. </p>
        </div>
        <div className="card-action">
        <a href="https://www.linkedin.com/in/bjorkandrew/" target = "_blank">click here to open linkedin in a new window</a>
        </div>
      </div>
    </div>
    <div className="col s12 m6">
      <div className="card">
        <div className="card-image">
        <img src={nebraska} alt = "nebraska"/> 
          <span className="card-title">Creative</span>
        </div>
        
        <div className="card-content">
          <p>I have been creating new repos and updating previous ones. Click the link below to view my Github collection.</p>
        </div>
        <div className="card-action">
        <a href="https://github.com/bjork1" target = "_blank">Click here to Open GitHub in a new window.</a>
        </div>
      </div>
    </div>
  </div>
  
  </div>
 
   
  );
}

export default Connect;