import React from "react";
import audiopic from './audiopic.PNG';

function Audio() {
  return (
<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
    <img class = "activator" src={audiopic} alt = "audio"/> 
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">AudioMind App<i class="material-icons right">more_vert</i></span>
      <p><a href="https://audio-mind2.herokuapp.com/" target = "_blank">View Online</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Project Summary<i class="material-icons right">close</i></span>
      <p>Registered users will find this app to be a useful platform for collaborating on works by providing a platform for sharing tracks between users and providing the user with an outlet for communication. Collaberations include a chat area and a contributers tab including users who added to the project.</p>
    </div>
    <div class="card-action">
          <a href="https://github.com/brakluner/AudioMind" target = "_blank">view code on GitHub</a>
        </div>
  </div>

    
   
  );
}

export default Audio;