import React from "react";
import quiz from './weather.PNG';

function Weather() {
  return (
<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
    <img class = "activator" src={quiz} alt = "quiz"/> 
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Weather App<i class="material-icons right">more_vert</i></span>
      <p><a href="https://bjork1.github.io/weather/" target = "_blank">View Online</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Project Summary<i class="material-icons right">close</i></span>
      <p>This is a weather application to allow the user versatile search functionality to find key weather information for the current day and also presented as a five day forecast.

The application uses the Open Weather Map API and can search for the weather information for any city in the world with the search bar. In addition, key US cities are included below the search bar, which can be clicked on for easy reference to the data for these popular cities. API data from Open Weather is for Current, Five Day Forecast, and Icons. The Moment.js API is also used in this application for referencing the dates.

The code in this application is HTML, CSS, and Jquery. This project was completed on 2/1/2020.</p>
    </div>
    <div class="card-action">
          <a href="https://github.com/bjork1/weather" target = "_blank">view code on GitHub</a>
        </div>
  </div>

    
   
  );
}

export default Weather;