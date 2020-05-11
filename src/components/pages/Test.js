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
      <p><a href="https://bjork1.github.io/quiz/" target = "_blank">View Online</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Project Summary<i class="material-icons right">close</i></span>
      <p>The quiz has 5 multiple choice questions, along with a timer. If you guess incorrectly, the time will decrease by 15 seconds. The faster you guess, the higher your score will be. If you are able to get all right, you may have the chance to see your score amongst the High Scores.</p>
    </div>
    <div class="card-action">
          <a href="https://github.com/bjork1/quiz" target = "_blank">view code on GitHub</a>
        </div>
  </div>

    
   
  );
}

export default Test;