import React from "react";
import quiz from './quizapp.PNG';

function Test() {
  return (
<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
    <img class = "activator" src={quiz} alt = "quiz"/> 
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Capitals Quiz App<i class="material-icons right">more_vert</i></span>
      <p><a href="#">View Online</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
    <div class="card-action">
          <a href="#">view code on GitHub</a>
        </div>
  </div>

    
   
  );
}

export default Test;