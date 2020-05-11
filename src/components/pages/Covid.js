import React from "react";
import quiz from './covid.PNG';

function Covid() {
  return (
<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
    <img class = "activator" src={quiz} alt = "quiz"/> 
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Covid-19 App<i class="material-icons right">more_vert</i></span>
      <p><a href="https://covid19-application.herokuapp.com/" target = "_blank">View Online</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Project Summary<i class="material-icons right">close</i></span>
      <p>The world as we know it is changing and daily life is being altered. Ever since February 2020 chaos has erupted because of the Covid-19 Pandemic.

This application will provide the user with real-time data on how the coronavirus is affecting certain locations, and a place to find and post updates on resources in the area. Want to know which stores are open? Do you have extra soup to share with a neighbor in need? Please share this information on the website and post it to the comments. This project uses handlebars, ORM structure with routes using get and post, a MySQL database, Travis CI for testing and improvements, a coronavirus API, and a server using node and express.</p>
    </div>
    <div class="card-action">
          <a href="https://github.com/bjork1/covid-19" target = "_blank">view code on GitHub</a>
        </div>
  </div>

    
   
  );
}

export default Covid;