import React from "react";
import link from "./andrew.jpg";
import pdf from "./Andrew_Bjork_Resume.pdf";
import axios from "axios";
import li from './li.png';
import light from './light.jpg';

class Info extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/bjork1/repos`)
      //axios.get(`https://api.github.com/users/bjork1`)
      .then((res) => {
        const persons = res.data;
        this.setState({ persons });
      });
  }

  render() {
    console.log(this.state.persons);
    return (
      <div>
        <div className="row">
          <div className="col s2"></div>
          <div className="col s8">
            <ul className="collection" style={{ width: "100%" , height: '250px'}}>
             
            <li className="collection-item avatar">
                <img src={link} alt="" className="circle" style = {{height: '152px', width: '152px'}}/>
                <span className="title">Title</span>
                <p>
                  First Line <br />
                  Second Line
                </p>
                <img src={light} alt="" style = {{width: '100%'}}/> 

                <a href="https://www.linkedin.com/in/bjorkandrew/" target = "_blank" className="secondary-content">
                  <img src = {li} style = {{height: '30px'}} />
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
              <div className="card-content" style = {{backgroundColor:"rgba(62, 120, 178,.1)"}}>
                <span className="card-title" >Summary</span>
                <p style={{ fontSize: "18px"}}>
                  Agile business professional with specialties in
                  troubleshooting, marketing, and web development. Holds
                  certifications in Full Stack Web Development and ScrumMaster,
                  and a Bachelor’s degree in Business Administration.{" "}
                </p>
              </div>
              {/* <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div> */}
            </div>
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
                  <th>Contact</th>
                  <th></th>

                  <td></td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Phone</td>
                  <td>651-233-6987</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>bjorkandrew1@gmail.com</td>
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
          <div className="col s2"></div>
        </div>
      </div>
    );
  }
}

export default Info;
