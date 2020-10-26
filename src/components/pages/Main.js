import React from "react";
//import link from "./linkpic.jpg";
import "./main.css";
import mountain from "./mountain.jpg";
import M from "materialize-css";
//import next from 'materialize-css';
import next from "materialize-css";
import options from "materialize-css";
import audiopic from "./audio-update.PNG";
import covid from "./covid-update.PNG";
import employee from "./employee-update.PNG";
import weather from "./weather-update.PNG";
import quizapp from "./quiz-update.PNG";
//import skills from './skills.PNG';
//import notes from './notes.PNG';
import link from "./andrew.jpg";
import pdf from "./Andrew_Bjork_Resume.pdf";
import axios from "axios";
import li from "./li.png";
import light from "./light.jpg";
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
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".carousel");
      var elemss = document.querySelectorAll(".modal");
      var options = { duration: "400", setTimeout: "4500" };
      var instances = M.Carousel.init(elems, options);
      var instancess = M.Modal.init(elemss, options);
      setInterval(() => {
        M.Carousel.getInstance(elems[0]).next();
      }, 3000);
    });
  };

  componentDidMount() {
    this.jQueryCode();
  }

  render() {
    return (
      <div>
      <div
      className = "desktopShow"
        style={{ backgroundColor: "rgba(62, 120, 178,.1)", paddingTop: "3%" }}
      >
        <div
          style={{
            height: "100px",
            width: "100%",
            position: "fixed",
            top: "0",
            zIndex: "100",
            background:
              "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0))",
          }}
        ></div>
        <div className="row">
          <div className="col s2"></div>
          <div className="col s8">
            <ul
              className="collection"
              style={{ width: "100%", height: "250px" }}
            >
              <li className="collection-item avatar">
                <img
                  src={link}
                  alt=""
                  className="circle"
                  style={{ height: "152px", width: "152px" }}
                />
                {/* <span className="title" style = {{marginLeft: '152px', fontSize: '40px'}}>Title</span> */}
                <p
                  style={{
                    marginLeft: "152px",
                    fontSize: "40px",
                    fontFamily: "Aguafina Script",
                    color: "rgba(62, 120, 178,.5)",
                  }}
                >
                  <br />
                  Andrew Bjork <br />
                  <br />
                </p>
                <img src={light} alt="" style={{ width: "100%" }} />

                <a
                  href="https://www.linkedin.com/in/bjorkandrew/"
                  target="_blank"
                  className="secondary-content"
                >
                  <img src={li} style={{ height: "30px" }} />
                </a>
              </li>
            </ul>
            <div
              className="card "
              style={{
                width: "100%",

                backgroundColor: "#FBFCFF",
                width: "100%",
              }}
            >
              <div className="card-content">
                <span className="card-title">Summary</span>
                <p style={{ fontSize: "18px" }}>
                  Agile business professional with specialties in
                  troubleshooting, marketing, and web development. Holds
                  certifications in Full Stack Web Development and ScrumMaster,
                  and a Bachelor’s degree in Business Administration.{" "}
                </p>
              </div>
            </div>
            <div
              className="card "
              style={{
                width: "100%",

                backgroundColor: "#FBFCFF",
                width: "100%",
                boxShadow: "none",
                marginBottom: "-75px",
              }}
            >
              <div
                className="card-content"
                style={{
                  marginTop: "3%",
                }}
              >
                <span className="card-title">Projects</span>
                <p style={{ fontSize: "18px" }}>
                  Click to learn more and view the full application
                </p>
              </div>
            </div>
          </div>
          <div className="col s2"></div>
        </div>
        <div className="carousel">
          <a className="carousel-item modal-trigger" href="#modal1">
            <img
              src={audiopic}
              style={{ width: "280% ", marginLeft: "-70%" }}
            />
          </a>
          {/* <a className="carousel-item modal-trigger" href="#modal2"><img src = {skills} style = {{width: '300% ', marginLeft: '-80%'}}/></a> */}
          <a className="carousel-item modal-trigger" href="#modal3">
            <img src={covid} style={{ width: "280% ", marginLeft: "-80%" }} />
          </a>
          {/* <a className="carousel-item modal-trigger" href="#modal4"><img src = {notes} style = {{width: '300% ', marginLeft: '-80%'}}/></a> */}
          <a className="carousel-item modal-trigger" href="#modal5">
            <img src={quizapp} style={{ width: "280% ", marginLeft: "-80%" }} />
          </a>
          <a className="carousel-item modal-trigger" href="#modal6">
            <img
              src={employee}
              style={{ width: "280% ", marginLeft: "-80%" }}
            />
          </a>
          <a className="carousel-item modal-trigger" href="#modal7">
            <img src={weather} style={{ width: "280% ", marginLeft: "-80%" }} />
          </a>
        </div>

        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>Audio Mind</h4>
            <p>
              Registered users will find this app to be a useful platform for
              collaborating on works by providing a platform for sharing tracks
              between users and providing the user with an outlet for
              communication. Collaberations include a chat area and a
              contributers tab including users who added to the project.
            </p>
          </div>
          <div className="modal-footer">
            <a
              href="https://audio-mind2.herokuapp.com/"
              target="_blank"
              className="waves-effect waves-light btn"
              style={{ float: "left", marginLeft: "24px",backgroundColor: "#3E78B2" }}
            >
              Go to website
            </a>
            <a
              href="https://github.com/brakluner/AudioMind"
              target="_blank"
              className="waves-effect waves-light btn"
              style={{ float: "left", marginLeft: "10px" ,backgroundColor: "#3E78B2"}}
            >
              View code on Github
            </a>
            <a className="modal-close waves-effect waves-green btn-flat">
              Close
            </a>
          </div>
        </div>
        <div id="modal2" className="modal">
          <div className="modal-content">
            <h4>Sllik Skills</h4>
            <p>
              This application is a search engine and resource for people who
              want to learn new skills. The user goes to the application because
              they want to research how to learn a new skill, such as cooking,
              coding, or carpentry. The application is currently in the
              development phase and will be released in five phases. Each phase
              will be a viable product that is incrementally more complex and
              detailed towards helping the user to achieve the end goal.
            </p>
          </div>
          <div className="modal-footer">
            <a
              href="https://bjork1.github.io/SkillLearningApp/"
              target="_blank"
              className="waves-effect waves-light btn"
              style={{ float: "left", marginLeft: "24px",backgroundColor: "#3E78B2" }}
            >
              Go to website
            </a>
            <a
              href="https://github.com/bjork1/SkillLearningApp"
              target="_blank"
              className="waves-effect waves-light btn"
              style={{ float: "left", marginLeft: "10px",backgroundColor: "#3E78B2" }}
            >
              View code on Github
            </a>
            <a className="modal-close waves-effect waves-green btn-flat">
              Close
            </a>
          </div>
        </div>
        <div id="modal3" className="modal" style = {{width: '75%', maxHeight: '100%', overflowY: 'hidden'}}>
          <div className="modal-content">
            <h4>Covid-19 App</h4>
            <p>
              The world as we know it is changing and daily life is being
              altered. Ever since February 2020 chaos has erupted because of the
              Covid-19 Pandemic. This application will provide the user with
              real-time data on how the coronavirus is affecting certain
              locations, and a place to find and post updates on resources in
              the area. Want to know which stores are open? Do you have extra
              soup to share with a neighbor in need? Please share this
              information on the website and post it to the comments. This
              project uses handlebars, ORM structure with routes using get and
              post, a MySQL database, Travis CI for testing and improvements, a
              coronavirus API, and a server using node and express.
            </p>
          </div>
          <div className="modal-footer">
            <a
              href="https://covid19-application.herokuapp.com/"
              target="_blank"
              className="waves-effect waves-light btn"
              style={{ float: "left", marginLeft: "24px" ,backgroundColor: "#3E78B2"}}
            >
              Go to website
            </a>
            <a
              href="https://github.com/bjork1/covid-19"
              target="_blank"
              className="waves-effect waves-light btn"
              style={{ float: "left", marginLeft: "10px" ,backgroundColor: "#3E78B2"}}
            >
              View code on Github
            </a>
            <a className="modal-close waves-effect waves-green btn-flat">
              Close
            </a>
          </div>
        </div>
        <div id="modal4" className="modal">
          <div className="modal-content">
            <h4>Note Taker App</h4>
            <p>
              This application uses HTML, CSS, jQuery and Bootstrap. It is a
              tool for taking notes and storing tasks based off of those notes.
            </p>
          </div>
          <div className="modal-footer">
            <a
              href="https://bjork1.github.io/flow/"
              target="_blank"
              className="waves-effect waves-light btn"
              style={{ float: "left", marginLeft: "24px",backgroundColor: "#3E78B2" }}
            >
              Go to website
            </a>
            <a
              href="https://github.com/bjork1/flow"
              target="_blank"
              className="waves-effect waves-light btn"
              style={{ float: "left", marginLeft: "10px" ,backgroundColor: "#3E78B2"}}
            >
              View code on Github
            </a>
            <a className="modal-close waves-effect waves-green btn-flat">
              Close
            </a>
          </div>
        </div>
        <div id="modal5" className="modal">
          <div className="modal-content">
            <h4>Capitals Quiz App</h4>
            <p>
              The quiz has 5 multiple choice questions, along with a timer. If
              you guess incorrectly, the time will decrease by 15 seconds. The
              faster you guess, the higher your score will be. If you are able
              to get all right, you may have the chance to see your score
              amongst the High Scores.
            </p>
          </div>
          <div className="modal-footer">
            <a
              href="https://bjork1.github.io/quiz/"
              target="_blank"
              className="waves-effect waves-light btn"
              style={{ float: "left", marginLeft: "24px",backgroundColor: "#3E78B2" }}
            >
              Go to website
            </a>
            <a
              href="https://github.com/bjork1/quiz"
              target="_blank"
              className="waves-effect waves-light btn"
              style={{ float: "left", marginLeft: "10px",backgroundColor: "#3E78B2" }}
            >
              View code on Github
            </a>
            <a className="modal-close waves-effect waves-green btn-flat">
              Close
            </a>
          </div>
        </div>
        <div id="modal6" className="modal" style = {{width: '75%', maxHeight: '100%', overflowY: 'hidden'}}>
          <div className="modal-content">
            <h4>Employee Table</h4>
            <p>
              Welcome to the Employee Directory. You can search by employees from
              a variety of categories, such as name, email, birthday, and phone.
              Each employee includes a photo, and the information is currently
              stored in a JSON file and was originally retreived from
              https://randomuser.me. Future developments will include the data
              being randomly drawn from the website every time the page is
              accessed. There are 15 employees in the JSON file to sort and
              filter from. Categories can be sorted alphabetically or
              numerically, and can also be filtered by typing in the letters or
              numbers into the input field. Gender has a select option that
              filters the data. The application uses ReactJS, Bootstrap, and has
              the react-bootstrap-table package installed
            </p>
          </div>
          <div className="modal-footer">
            <a
              href="https://findtheemployee.herokuapp.com/"
              target="_blank"
              className="waves-effect waves-light btn"
              style={{ float: "left", marginLeft: "24px",backgroundColor: "#3E78B2" }}
            >
              Go to website
            </a>
            <a
              href="https://github.com/bjork1/react-employee"
              target="_blank"
              className="waves-effect waves-light btn"
              style={{ float: "left", marginLeft: "10px",backgroundColor: "#3E78B2" }}
            >
              View code on Github
            </a>
            <a className="modal-close waves-effect waves-green btn-flat">
              Close
            </a>
          </div>
        </div>
        <div id="modal7" className="modal" style = {{width: '75%', maxHeight: '100%', overflowY: 'hidden'}}>
          <div className="modal-content">
            <h4>Weather App</h4>
            <p>
              This is a weather application to allow the user versatile search
              functionality to find key weather information for the current day
              and also presented as a five day forecast. The application uses
              the Open Weather Map API and can search for the weather
              information for any city in the world with the search bar. In
              addition, key US cities are included below the search bar, which
              can be clicked on for easy reference to the data for these popular
              cities. API data from Open Weather is for Current, Five Day
              Forecast, and Icons. The Moment.js API is also used in this
              application for referencing the dates. The code in this
              application is HTML, CSS, and Jquery. This project was completed
              on 2/1/2020
            </p>
          </div>
          <div className="modal-footer">
            <a
              href="https://bjork1.github.io/weather/"
              target="_blank"
              className="waves-effect waves-light btn"
              style={{ float: "left", marginLeft: "24px" ,backgroundColor: "#3E78B2" }}
            >
              Go to website
            </a>
            <a
              href="https://github.com/bjork1/weather"
              target="_blank"
              className="waves-effect waves-light btn"
              style={{ float: "left", marginLeft: "10px",backgroundColor: "#3E78B2" }}
            >
              View code on Github
            </a>
            <a className="modal-close waves-effect waves-green btn-flat">
              Close
            </a>
          </div>
        </div>

        <div className="row" style={{ marginTop: "3%" }}>
          <div className="col s2"></div>
          <div className="col s8">
            <div
              className="card "
              style={{
                width: "100%",

                backgroundColor: "#FBFCFF",
                width: "100%",
              }}
            >
              <div className="card-content">
                <span className="card-title">Skills</span>

                <div className="row">
                  <div className="col s6">
                    <ul>
                      <li>ReactJS</li>
                      <li>Materialize</li>
                      <li>Bootstrap</li>
                      <li>NextJS</li>
                      <li>Passport</li>
                      <li>Material UI</li>
                      <li>Postman</li>
                      <li>HTML</li>
                      <li>ES6</li>
                      <li>Model-View-Controller</li>
                      <li>Sequelize</li>
                      <li>Mongo Atlas</li>
                    </ul>
                  </div>
                  <div className="col s6">
                    <ul>
                      <li>Node JS</li>
                      <li>Express</li>
                      <li>MongoDB</li>
                      <li>MySQL</li>
                      <li>APIs</li>
                      <li>AWS</li>
                      <li>Git</li>
                      <li>CSS</li>
                      <li>jQuery</li>
                      <li>Visual Studio</li>
                      <li>Mongoose</li>
                      <li>Swift</li>
                    </ul>
                  </div>
                </div>
            
              </div>
            </div>
            <div
              className="card "
              style={{
                width: "100%",

                backgroundColor: "#FBFCFF",
                width: "100%",
              }}
            >
              <div
                className="card-content"
                style={{
                  marginTop: "3%",
                }}
              >
                <span className="card-title">Connect</span>
                <table
                  className="striped"
                  style={{
                    width: "100%",
                    padding: "15px",
                    border: "1px solid #E0E0E2",
                  }}
                >
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
    
                      <td></td>
                    </tr>
                  </thead>
    
                  <tbody>
                    <tr>
                      <td>Phone</td>
                      <td><a href = "TEL: 6512336987">651-233-6987</a></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td><a href = "mailto: bjorkandrew1@gmail.com">bjorkandrew1@gmail.com</a></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Github</td>
                      <td>
                        <a
                          href="https://github.com/bjork1"
                          target="_blank"
                          className="waves-effect waves-light btn"
                          style={{ backgroundColor: "#3E78B2" }}
                        >
                          Follow
                        </a>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Resume</td>
                      <td>
                        <a
                          href={pdf}
                          download
                          className="waves-effect waves-light btn"
                          style={{ backgroundColor: "#3E78B2" }}
                        >
                          Download
                        </a>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col s2"></div>
        </div>
        </div>
        <div
      className = "mobileShow"
        style={{ backgroundColor: "rgba(62, 120, 178,.1)", paddingTop: "3%" }}
      >
        <div
          style={{
            height: "100px",
            width: "100%",
            position: "fixed",
            top: "0",
            zIndex: "100",
            background:
              "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0))",
          }}
        ></div>
        <div className="row" style = {{marginTop: '10%'}}>
        
          <div className="col s12">
            <ul
              className="collection"
              style={{ width: "100%"}}
            >
              <li className="collection-item avatar">
                <img
                  src={link}
                  alt=""
                  className="circle"
                  style={{ height: "100px", width: "100px" }}
                />
                {/* <span className="title" style = {{marginLeft: '152px', fontSize: '40px'}}>Title</span> */}
                <p
                  style={{
                    marginLeft: "80px",
                    fontSize: "40px",
                    fontFamily: "Aguafina Script",
                    color: "rgba(62, 120, 178,.5)",
                  }}
                >
                  <br />
                  Andrew Bjork <br />
                  <br />
                </p>
                <img src={light} alt="" style={{ width: "100%" }} />

                
              </li>
            </ul>
            <div
              className="card "
              style={{
                width: "100%",

                backgroundColor: "#FBFCFF",
                width: "100%",
              }}
            >
              <div className="card-content">
                <span className="card-title">Summary</span>
                <p style={{ fontSize: "18px" }}>
                  Agile business professional with specialties in
                  troubleshooting, marketing, and web development. Holds
                  certifications in Full Stack Web Development and ScrumMaster,
                  and a Bachelor’s degree in Business Administration.{" "}
                </p>
              </div>
            </div>
            <div
              className="card "
              style={{
                width: "100%",

                backgroundColor: "#fbf6e8",
                width: "100%",
                boxShadow: "none",
                marginBottom: "-75px",
              }}
            >
              <div
                className="card-content"
                style={{
                  marginTop: "3%",
                }}
              >
                <span className="card-title" style = {{paddingBottom: '3%'}}>Projects</span>
                <div>
          <a className="modal-trigger" href="#mmodal1">
            <img
              src={audiopic}
              style={{ width: "100%", marginBottom: '5%'}}
            />
          </a>
          {/* <a className="carousel-item modal-trigger" href="#modal2"><img src = {skills} style = {{width: '300% ', marginLeft: '-80%'}}/></a> */}
          <a className="modal-trigger" href="#mmodal3">
            <img src={covid} style={{ width: "100%", marginBottom: '5%'}} />
          </a>
          {/* <a className="carousel-item modal-trigger" href="#modal4"><img src = {notes} style = {{width: '300% ', marginLeft: '-80%'}}/></a> */}
          <a className="modal-trigger" href="#mmodal5">
            <img src={quizapp} style={{ width: "100%", marginBottom: '5%'}} />
          </a>
          <a className="modal-trigger" href="#mmodal6">
            <img
              src={employee}
              style={{ width: "100%", marginBottom: '5%'}}
            />
          </a>
          <a className="modal-trigger" href="#mmodal7">
            <img src={weather} style={{ width: "100%"}} />
          </a>
        </div>
            
           



              </div>
            </div>
          </div>
        </div>
        {/* <div className="carousel">
          <a className="carousel-item modal-trigger" href="#modal1">
            <img
              src={audiopic}
              style={{ width: "280% ", marginLeft: "-70%" }}
            />
          </a>
          <a className="carousel-item modal-trigger" href="#modal3">
            <img src={covid} style={{ width: "280% ", marginLeft: "-80%" }} />
          </a>
          <a className="carousel-item modal-trigger" href="#modal5">
            <img src={quizapp} style={{ width: "280% ", marginLeft: "-80%" }} />
          </a>
          <a className="carousel-item modal-trigger" href="#modal6">
            <img
              src={employee}
              style={{ width: "280% ", marginLeft: "-80%" }}
            />
          </a>
          <a className="carousel-item modal-trigger" href="#modal7">
            <img src={weather} style={{ width: "280% ", marginLeft: "-80%" }} />
          </a>
        </div> */}

        <div id="mmodal1" className="modal">
          <div className="modal-content">
            <h4>Audio Mind</h4>
            <p>
              Registered users will find this app to be a useful platform for
              collaborating on works by providing a platform for sharing tracks
              between users and providing the user with an outlet for
              communication. Collaberations include a chat area and a
              contributers tab including users who added to the project.
            </p>
          </div>
          <div className="modal-footer">
            <a
              href="https://audio-mind2.herokuapp.com/"
              target="_blank"
              className="waves-effect waves-light btn"
              style={{ float: "left", marginLeft: "24px",backgroundColor: "#3E78B2" }}
            >
              Go to website
            </a>
            <a
              href="https://github.com/brakluner/AudioMind"
              target="_blank"
              className="waves-effect waves-light btn"
              style={{ float: "left", marginLeft: "10px" ,backgroundColor: "#3E78B2"}}
            >
              View code on Github
            </a>
            <a className="modal-close waves-effect waves-green btn-flat">
              Close
            </a>
          </div>
        </div>
        <div id="mmodal2" className="modal">
          <div className="modal-content">
            <h4>Sllik Skills</h4>
            <p>
              This application is a search engine and resource for people who
              want to learn new skills. The user goes to the application because
              they want to research how to learn a new skill, such as cooking,
              coding, or carpentry. The application is currently in the
              development phase and will be released in five phases. Each phase
              will be a viable product that is incrementally more complex and
              detailed towards helping the user to achieve the end goal.
            </p>
          </div>
          <div className="modal-footer">
            <a
              href="https://bjork1.github.io/SkillLearningApp/"
              target="_blank"
              className="waves-effect waves-light btn"
              style={{ float: "left", marginLeft: "24px",backgroundColor: "#3E78B2" }}
            >
              Go to website
            </a>
            <a
              href="https://github.com/bjork1/SkillLearningApp"
              target="_blank"
              className="waves-effect waves-light btn"
              style={{ float: "left", marginLeft: "10px",backgroundColor: "#3E78B2" }}
            >
              View code on Github
            </a>
            <a className="modal-close waves-effect waves-green btn-flat">
              Close
            </a>
          </div>
        </div>
        <div id="mmodal3" className="modal" style = {{width: '75%', maxHeight: '100%', overflowY: 'hidden'}}>
          <div className="modal-content">
            <h4>Covid-19 App</h4>
            <p>
              The world as we know it is changing and daily life is being
              altered. Ever since February 2020 chaos has erupted because of the
              Covid-19 Pandemic. This application will provide the user with
              real-time data on how the coronavirus is affecting certain
              locations, and a place to find and post updates on resources in
              the area. Want to know which stores are open? Do you have extra
              soup to share with a neighbor in need? Please share this
              information on the website and post it to the comments. This
              project uses handlebars, ORM structure with routes using get and
              post, a MySQL database, Travis CI for testing and improvements, a
              coronavirus API, and a server using node and express.
            </p>
          </div>
          <div className="modal-footer">
            <a
              href="https://covid19-application.herokuapp.com/"
              target="_blank"
              className="waves-effect waves-light btn"
              style={{ float: "left", marginLeft: "24px" ,backgroundColor: "#3E78B2"}}
            >
              Go to website
            </a>
            <a
              href="https://github.com/bjork1/covid-19"
              target="_blank"
              className="waves-effect waves-light btn"
              style={{ float: "left", marginLeft: "10px" ,backgroundColor: "#3E78B2"}}
            >
              View code on Github
            </a>
            <a className="modal-close waves-effect waves-green btn-flat">
              Close
            </a>
          </div>
        </div>
        <div id="mmodal4" className="modal">
          <div className="modal-content">
            <h4>Note Taker App</h4>
            <p>
              This application uses HTML, CSS, jQuery and Bootstrap. It is a
              tool for taking notes and storing tasks based off of those notes.
            </p>
          </div>
          <div className="modal-footer">
            <a
              href="https://bjork1.github.io/flow/"
              target="_blank"
              className="waves-effect waves-light btn"
              style={{ float: "left", marginLeft: "24px",backgroundColor: "#3E78B2" }}
            >
              Go to website
            </a>
            <a
              href="https://github.com/bjork1/flow"
              target="_blank"
              className="waves-effect waves-light btn"
              style={{ float: "left", marginLeft: "10px" ,backgroundColor: "#3E78B2"}}
            >
              View code on Github
            </a>
            <a className="modal-close waves-effect waves-green btn-flat">
              Close
            </a>
          </div>
        </div>
        <div id="mmodal5" className="modal">
          <div className="modal-content">
            <h4>Capitals Quiz App</h4>
            <p>
              The quiz has 5 multiple choice questions, along with a timer. If
              you guess incorrectly, the time will decrease by 15 seconds. The
              faster you guess, the higher your score will be. If you are able
              to get all right, you may have the chance to see your score
              amongst the High Scores.
            </p>
          </div>
          <div className="modal-footer">
            <a
              href="https://bjork1.github.io/quiz/"
              target="_blank"
              className="waves-effect waves-light btn"
              style={{ float: "left", marginLeft: "24px",backgroundColor: "#3E78B2" }}
            >
              Go to website
            </a>
            <a
              href="https://github.com/bjork1/quiz"
              target="_blank"
              className="waves-effect waves-light btn"
              style={{ float: "left", marginLeft: "10px",backgroundColor: "#3E78B2" }}
            >
              View code on Github
            </a>
            <a className="modal-close waves-effect waves-green btn-flat">
              Close
            </a>
          </div>
        </div>
        <div id="mmodal6" className="modal" style = {{width: '75%', maxHeight: '100%', overflowY: 'hidden'}}>
          <div className="modal-content">
            <h4>Employee Table</h4>
            <p>
              Welcome to the Employee Directory. You can search by employees from
              a variety of categories, such as name, email, birthday, and phone.
              Each employee includes a photo, and the information is currently
              stored in a JSON file and was originally retreived from
              https://randomuser.me. Future developments will include the data
              being randomly drawn from the website every time the page is
              accessed. There are 15 employees in the JSON file to sort and
              filter from. Categories can be sorted alphabetically or
              numerically, and can also be filtered by typing in the letters or
              numbers into the input field. Gender has a select option that
              filters the data. The application uses ReactJS, Bootstrap, and has
              the react-bootstrap-table package installed
            </p>
          </div>
          <div className="modal-footer">
            <a
              href="https://findtheemployee.herokuapp.com/"
              target="_blank"
              className="waves-effect waves-light btn"
              style={{ float: "left", marginLeft: "24px",backgroundColor: "#3E78B2" }}
            >
              Go to website
            </a>
            <a
              href="https://github.com/bjork1/react-employee"
              target="_blank"
              className="waves-effect waves-light btn"
              style={{ float: "left", marginLeft: "10px",backgroundColor: "#3E78B2" }}
            >
              View code on Github
            </a>
            <a className="modal-close waves-effect waves-green btn-flat">
              Close
            </a>
          </div>
        </div>
        <div id="mmodal7" className="modal" style = {{width: '75%', maxHeight: '100%', overflowY: 'hidden'}}>
          <div className="modal-content">
            <h4>Weather App</h4>
            <p>
              This is a weather application to allow the user versatile search
              functionality to find key weather information for the current day
              and also presented as a five day forecast. The application uses
              the Open Weather Map API and can search for the weather
              information for any city in the world with the search bar. In
              addition, key US cities are included below the search bar, which
              can be clicked on for easy reference to the data for these popular
              cities. API data from Open Weather is for Current, Five Day
              Forecast, and Icons. The Moment.js API is also used in this
              application for referencing the dates. The code in this
              application is HTML, CSS, and Jquery. This project was completed
              on 2/1/2020
            </p>
          </div>
          <div className="modal-footer">
            <a
              href="https://bjork1.github.io/weather/"
              target="_blank"
              className="waves-effect waves-light btn"
              style={{ float: "left", marginLeft: "24px" ,backgroundColor: "#3E78B2" }}
            >
              Go to website
            </a>
            <a
              href="https://github.com/bjork1/weather"
              target="_blank"
              className="waves-effect waves-light btn"
              style={{ float: "left", marginLeft: "10px",backgroundColor: "#3E78B2" }}
            >
              View code on Github
            </a>
            <a className="modal-close waves-effect waves-green btn-flat">
              Close
            </a>
          </div>
        </div>

        <div className="row" style={{ marginTop: "22%" }}>
          <div className="col s12">
            <div
              className="card "
              style={{
                width: "100%",

                backgroundColor: "#FBFCFF",
                width: "100%",
              }}
            >
              <div className="card-content">
                <span className="card-title">Skills</span>

                <div className="row">
                  <div className="col s6">
                    <ul>
                      <li>ReactJS</li>
                      <li>Materialize</li>
                      <li>Bootstrap</li>
                      <li>NextJS</li>
                      <li>Passport</li>
                      <li>Material UI</li>
                      <li>Postman</li>
                      <li>HTML</li>
                      <li>ES6</li>
                      <li>Model-View-Controller</li>
                      <li>Sequelize</li>
                      <li>Mongo Atlas</li>
                    </ul>
                  </div>
                  <div className="col s6">
                    <ul>
                      <li>Node JS</li>
                      <li>Express</li>
                      <li>MongoDB</li>
                      <li>MySQL</li>
                      <li>APIs</li>
                      <li>AWS</li>
                      <li>Git</li>
                      <li>CSS</li>
                      <li>jQuery</li>
                      <li>Visual Studio</li>
                      <li>Mongoose</li>
                      <li>Swift</li>
                    </ul>
                  </div>
                </div>
            
              </div>
            </div>
            <div
              className="card "
              style={{
                width: "100%",

                backgroundColor: "#FBFCFF",
                width: "100%",
              }}
            >
              <div
                className="card-content"
                style={{
                  marginTop: "3%",
                }}
              >
                <span className="card-title">Connect</span>
                <table
                  className="striped"
                  style={{
                    width: "100%",
                    padding: "15px",
                    border: "1px solid #E0E0E2",
                  }}
                >
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
    
                      <td></td>
                    </tr>
                  </thead>
    
                  <tbody>
                    <tr>
                      <td>Phone</td>
                      <td><a href = "TEL: 6512336987">651-233-6987</a></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td><a href = "mailto: bjorkandrew1@gmail.com">bjorkandrew1@gmail.com</a></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Github</td>
                      <td>
                        <a
                          href="https://github.com/bjork1"
                          target="_blank"
                          className="waves-effect waves-light btn"
                          style={{ backgroundColor: "#3E78B2" }}
                        >
                          Follow
                        </a>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Resume</td>
                      <td>
                        <a
                          href={pdf}
                          download
                          className="waves-effect waves-light btn"
                          style={{ backgroundColor: "#3E78B2" }}
                        >
                          Download
                        </a>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
