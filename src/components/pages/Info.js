import React from "react";
import link from "./andrew.jpg";
import pdf from './Andrew_Bjork_Resume.pdf';
import axios from 'axios';

class Info extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/bjork1/repos`)
    //axios.get(`https://api.github.com/users/bjork1`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    console.log(this.state.persons);
  return (
<div style = {{height: '90 vh'}}>
    
 <div className= "row">
 <div>
    {/* <h1>Hello, {this.state.persons.company} </h1> */}
  
  </div>
 <div className = "col s5">


 <table className = "striped" style = {{marginLeft: '15%', width: '80%', padding: '15px', border : '1px solid #E0E0E2', marginTop: '10%'}}>
        <thead>
          <tr>
              <th>Contact</th>
              <th>Me</th>
              
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
            <td><a href="https://github.com/bjork1" target = "_blank" className="waves-effect waves-light btn" style = {{backgroundColor: '#3E78B2'}}>Follow</a></td>
            <td></td>
          </tr>
          <tr>
            <td>Resume</td>
            <td><a href={pdf}
                    download className="waves-effect waves-light btn" style = {{backgroundColor: '#3E78B2'}}>Download</a></td>
            <td></td>
          </tr>
        </tbody>
      </table>


   
  
      <div className="card " style = {{width: '400px', marginTop: '15%', backgroundColor: '#FBFCFF', marginLeft: '15%', width: '80%'}}>
        <div className="card-content">
          <span className="card-title">Summary</span>
          <p style = {{fontSize: '18px'}}>Agile business professional with specialties in troubleshooting, marketing, and web development. Holds certifications in Full Stack Web Development and ScrumMaster, and a Bachelor’s degree in Business Administration. </p>
        </div>
        {/* <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div> */}
      </div>
 
  
       


 
  
        </div>
       
        <div className = "col s4" >
        
      <div className="card" style = {{textAlign: 'center', left:'50%', marginTop: '10%', marginBottom: '10%', width: '70%'}}>
        <div className="card-image">
          <img src={link}/>
       
          <a href="https://www.linkedin.com/in/bjorkandrew/" target = "_blank" className="btn-floating halfway-fab waves-effect waves-light btn-floating btn-large pulse" style = {{backgroundColor: '#3E78B2'}}><i class="material-icons">add</i></a>
        </div>
        <div className="card-content">
          <p style = {{marginTop: '20px'}}>Let's connect on LinkedIn.</p>
       
    </div>
  </div>

  
    
  

        </div>
        
        </div>

        <div className = "row">

          <div className = "col s5">

          </div>
          <div className = "col s4">
          <table className = "striped" style = {{marginLeft: '15%', width: '80%', padding: '15px', border : '1px solid #E0E0E2', marginTop: '10%'}}>
        <thead>
          <tr>
              <th>Contact</th>
              <th>Me</th>
              
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
            <td><a href="https://github.com/bjork1" target = "_blank" className="waves-effect waves-light btn" style = {{backgroundColor: '#3E78B2'}}>Follow</a></td>
            <td></td>
          </tr>
          <tr>
            <td>Resume</td>
            <td><a href={pdf}
                    download className="waves-effect waves-light btn" style = {{backgroundColor: '#3E78B2'}}>Download</a></td>
            <td></td>
          </tr>
        </tbody>
      </table>
            </div>
        </div>

        
       
  </div>

    
   
  );
}}

export default Info;