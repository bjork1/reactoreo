import React from "react";
import quiz from './notes.PNG';

function Notes() {
  return (
<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
    <img class = "activator" src={quiz} alt = "quiz"/> 
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Notetaker App<i class="material-icons right">more_vert</i></span>
      <p><a href="https://bjork1.github.io/flow/" target = "_blank">View Online</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Project Summary<i class="material-icons right">close</i></span>
      <p>This application uses HTML, CSS, jQuery and Bootstrap. It is a tool for taking notes and storing tasks based off of those notes.</p>
    </div>
    <div class="card-action">
          <a href="https://github.com/bjork1/flow" target = "_blank">view code on GitHub</a>
        </div>
  </div>

    
   
  );
}

export default Notes;