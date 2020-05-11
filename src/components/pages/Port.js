import React from "react";
import quiz from './employee.PNG';

function Port() {
  return (
<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
    <img class = "activator" src={quiz} alt = "quiz"/> 
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Employee Table<i class="material-icons right">more_vert</i></span>
      <p><a href="https://findtheemployee.herokuapp.com/" target = "_blank">View Online</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Welcome to the Emloyee Directory. You can search by employees from a variety of categories, such as name, email, birthday, and phone. Each employee includes a photo, and the information is currently stored in a JSON file and was originally retreived from https://randomuser.me. Future developments will include the data being randomly drawn from the website every time the page is accessed.

There are 15 employees in the JSON file to sort and filter from. Categories can be sorted alphabetically or numerically, and can also be filtered by typing in the letters or numbers into the input field. Gender has a select option that filters the data.

The application uses ReactJS, Bootstrap, and has the react-bootstrap-table package installed.</p>
    </div>
    <div class="card-action">
          <a href="https://github.com/bjork1/react-employee" target = "_blank">view code on GitHub</a>
        </div>
  </div>

    
   
  );
}

export default Port;