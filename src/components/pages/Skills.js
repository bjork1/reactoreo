import React from "react";
import quiz from './skills.PNG';

function Skills() {
  return (
<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
    <img class = "activator" src={quiz} alt = "quiz"/> 
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Sllik Skills<i class="material-icons right">more_vert</i></span>
      <p><a href="https://bjork1.github.io/SkillLearningApp/" target = "_blank">View Online</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Project Summary<i class="material-icons right">close</i></span>
      <p>This application is a search engine and resource for people who want to learn new skills.

The user goes to the application because they want to research how to learn a new skill, such as cooking, coding, or carpentry.

The application is currently in the development phase and will be released in five phases. Each phase will be a viable product that is incrementally more complex and detailed towards helping the user to achieve the end goal.</p>
    </div>
    <div class="card-action">
          <a href="https://github.com/bjork1/SkillLearningApp" target = "_blank">view code on GitHub</a>
        </div>
  </div>

    
   
  );
}

export default Skills;