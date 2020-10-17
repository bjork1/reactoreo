import React from "react";
import link from "./linkpic.jpg";
import "./main.css";
import mountain from "./mountain.jpg";
import M from "materialize-css";
//import next from 'materialize-css';
import next from 'materialize-css';
import options from "materialize-css";
import audiopic from './audiopic.PNG';
import covid from './covid.PNG';
import employee from './employee.PNG';
import weather from './weather.PNG';
import quizapp from './quizapp.PNG';
import skills from './skills.PNG';
import notes from './notes.PNG';
//import $ from 'jQuery';

// $('.carousel').carousel({
//   padding: 200    
// });
// autoplay();
// function autoplay() {
//   $('.carousel').carousel('next');
//   setTimeout(autoplay, 4500);
// }

export default class Main extends React.Component {

jQueryCode = () => {
  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var elemss = document.querySelectorAll('.modal');
    var options = ({duration : '400', setTimeout: '4500'});
    var instances = M.Carousel.init(elems, options);
    var instancess = M.Modal.init(elemss, options);
    setInterval(()=>{
      M.Carousel.getInstance(elems[0]).next();
   },3000);
  });

}
  

  componentDidMount() {
    this.jQueryCode();
    
    
  }



  render() {
   
  return (
<div >

 







{/* <img src = {mountain} style = {{height:'80vh', opacity: '80%'}}/> */}

<div className="carousel"  >
    <a className="carousel-item modal-trigger" href="#modal1" ><img src = {audiopic} style = {{width: '280% ', marginLeft: '-70%'}}/></a>
    <a className="carousel-item modal-trigger" href="#modal2"><img src = {skills} style = {{width: '300% ', marginLeft: '-80%'}}/></a>
    <a className="carousel-item modal-trigger" href="#modal3"><img src = {covid} style = {{width: '300% ', marginLeft: '-80%'}}/></a>
    <a className="carousel-item modal-trigger" href="#modal4"><img src = {notes} style = {{width: '300% ', marginLeft: '-80%'}}/></a>
    <a className="carousel-item modal-trigger" href="#modal5"><img src = {quizapp} style = {{width: '300% ', marginLeft: '-80%'}}/></a>
    <a className="carousel-item modal-trigger" href="#modal6"><img src = {employee} style = {{width: '300% ', marginLeft: '-80%'}}/></a>
    <a className="carousel-item modal-trigger" href="#modal7"><img src = {weather} style = {{width: '300% ', marginLeft: '-80%'}}/></a>
  
  </div>


  
  {/* <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a> */}


  <div id="modal1" className="modal">
    <div className="modal-content">
      <h4>Audio Mind</h4>
      <p>Registered users will find this app to be a useful platform for collaborating on works by providing a platform for sharing tracks between users and providing the user with an outlet for communication. Collaberations include a chat area and a contributers tab including users who added to the project.</p>
      
    

       
    
    </div>
    <div className="modal-footer">
    <a href="https://audio-mind2.herokuapp.com/" target = "_blank" className="waves-effect waves-light btn" style = {{float: 'left', marginLeft: '24px'}}>Go to website</a>
    <a href="https://github.com/brakluner/AudioMind" target = "_blank" className="waves-effect waves-light btn" style = {{float: 'left', marginLeft: '10px'}}>View code on Github</a>
      <a className="modal-close waves-effect waves-green btn-flat">Close</a>
    </div>
  </div>
  <div id="modal2" className="modal">
    <div className="modal-content">
      <h4>Sllik Skills</h4>
      <p>This application is a search engine and resource for people who want to learn new skills.

The user goes to the application because they want to research how to learn a new skill, such as cooking, coding, or carpentry.

The application is currently in the development phase and will be released in five phases. Each phase will be a viable product that is incrementally more complex and detailed towards helping the user to achieve the end goal.</p>
    </div>
    <div className="modal-footer">
    <a href="https://bjork1.github.io/SkillLearningApp/" target = "_blank" className="waves-effect waves-light btn" style = {{float: 'left', marginLeft: '24px'}}>Go to website</a>
    <a href="https://github.com/bjork1/SkillLearningApp" target = "_blank" className="waves-effect waves-light btn" style = {{float: 'left', marginLeft: '10px'}}>View code on Github</a>
      <a className="modal-close waves-effect waves-green btn-flat">Close</a>
    </div>
  </div>
  <div id="modal3" className="modal">
    <div className="modal-content">
      <h4>Covid-19 App</h4>
      <p>The world as we know it is changing and daily life is being altered. Ever since February 2020 chaos has erupted because of the Covid-19 Pandemic.

This application will provide the user with real-time data on how the coronavirus is affecting certain locations, and a place to find and post updates on resources in the area. Want to know which stores are open? Do you have extra soup to share with a neighbor in need? Please share this information on the website and post it to the comments. This project uses handlebars, ORM structure with routes using get and post, a MySQL database, Travis CI for testing and improvements, a coronavirus API, and a server using node and express.</p>
    </div>
    <div className="modal-footer">
    <a href="https://covid19-application.herokuapp.com/" target = "_blank" className="waves-effect waves-light btn" style = {{float: 'left', marginLeft: '24px'}}>Go to website</a>
    <a href="https://github.com/bjork1/covid-19" target = "_blank" className="waves-effect waves-light btn" style = {{float: 'left', marginLeft: '10px'}}>View code on Github</a>
      <a className="modal-close waves-effect waves-green btn-flat">Close</a>
    </div>
  </div>
  <div id="modal4" className="modal">
    <div className="modal-content">
      <h4>Note Taker App</h4>
      <p>This application uses HTML, CSS, jQuery and Bootstrap. It is a tool for taking notes and storing tasks based off of those notes.</p>
    </div>
    <div className="modal-footer">
    <a href="https://bjork1.github.io/flow/" target = "_blank" className="waves-effect waves-light btn" style = {{float: 'left', marginLeft: '24px'}}>Go to website</a>
    <a href="https://github.com/bjork1/flow" target = "_blank" className="waves-effect waves-light btn" style = {{float: 'left', marginLeft: '10px'}}>View code on Github</a>
      <a className="modal-close waves-effect waves-green btn-flat">Close</a>
    </div>
  </div>
  <div id="modal5" className="modal">
    <div className="modal-content">
      <h4>Capitals Quiz App</h4>
      <p>The quiz has 5 multiple choice questions, along with a timer. If you guess incorrectly, the time will decrease by 15 seconds. The faster you guess, the higher your score will be. If you are able to get all right, you may have the chance to see your score amongst the High Scores.</p>
    </div>
    <div className="modal-footer">
    <a href="https://bjork1.github.io/quiz/" target = "_blank" className="waves-effect waves-light btn" style = {{float: 'left', marginLeft: '24px'}}>Go to website</a>
    <a href="https://github.com/bjork1/quiz" target = "_blank" className="waves-effect waves-light btn" style = {{float: 'left', marginLeft: '10px'}}>View code on Github</a>
      <a className="modal-close waves-effect waves-green btn-flat">Close</a>
    </div>
  </div>
  <div id="modal6" className="modal">
    <div className="modal-content">
      <h4>Employee Table</h4>
      <p>Welcome to the Emloyee Directory. You can search by employees from a variety of categories, such as name, email, birthday, and phone. Each employee includes a photo, and the information is currently stored in a JSON file and was originally retreived from https://randomuser.me. Future developments will include the data being randomly drawn from the website every time the page is accessed.

There are 15 employees in the JSON file to sort and filter from. Categories can be sorted alphabetically or numerically, and can also be filtered by typing in the letters or numbers into the input field. Gender has a select option that filters the data.

The application uses ReactJS, Bootstrap, and has the react-bootstrap-table package installed</p>
    </div>
    <div className="modal-footer">
    <a href="https://findtheemployee.herokuapp.com/" target = "_blank" className="waves-effect waves-light btn" style = {{float: 'left', marginLeft: '24px'}}>Go to website</a>
    <a href="https://github.com/bjork1/react-employee" target = "_blank" className="waves-effect waves-light btn" style = {{float: 'left', marginLeft: '10px'}}>View code on Github</a>
      <a className="modal-close waves-effect waves-green btn-flat">Close</a>
    </div>
  </div>
  <div id="modal7" className="modal">
    <div className="modal-content">
      <h4>Weather App</h4>
      <p>This is a weather application to allow the user versatile search functionality to find key weather information for the current day and also presented as a five day forecast.

The application uses the Open Weather Map API and can search for the weather information for any city in the world with the search bar. In addition, key US cities are included below the search bar, which can be clicked on for easy reference to the data for these popular cities. API data from Open Weather is for Current, Five Day Forecast, and Icons. The Moment.js API is also used in this application for referencing the dates.

The code in this application is HTML, CSS, and Jquery. This project was completed on 2/1/2020</p>
    </div>
    <div className="modal-footer">
    <a href="https://bjork1.github.io/weather/" target = "_blank" className="waves-effect waves-light btn" style = {{float: 'left', marginLeft: '24px'}}>Go to website</a>
    <a href="https://github.com/bjork1/weather" target = "_blank"  className="waves-effect waves-light btn" style = {{float: 'left', marginLeft: '10px'}}>View code on Github</a>
      <a className="modal-close waves-effect waves-green btn-flat">Close</a>
    </div>
  </div>



  </div>

    
   
  );
}

}