import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import axios from "axios";

class App extends Component {
// constructor(props) {
//   super(props);
//   // Manage the sort state in your application
//   this.state = {
//     sortName: undefined,
//     sortOrder: undefined,
//     // error: null,
//     isLoaded: false,
//     apiResult: [],
//     apiFirstName: [],
//   };
//   //this.onSortChange = this.onSortChange.bind(this);
// }





//   fetch("https://api.spotify.com/v1/audio-analysis/79b94fa7ac944da6be26a6f34b562afc", {
//   method: "GET",
//   headers: {
//     Authorization: `Bearer ${userAccessToken}`     
//   }
// })
// .then(response => response.json())
// .then(({beats})) => {
//   beats.forEach((beat, index) => {
//     console.log(`Beat ${index} starts at ${beat.start}`);
//   })
// }

// const url = "https://api.spotify.com/v1/audio-analysis/6EJiVf7U0p1BBfs0qqeb1f";
// const response = fetch(url);
// const data = response;
// const config = {
//   headers: {'{79b94fa7ac944da6be26a6f34b562afc}': 'http://localhost:3000/'}
// };

// console.log(data, config);

  // fetch("http://open.spotify.com/track/6rqhFgbbKwnb9MLmUQDhG6")
  //   .then((res) => res.json())
  //   .then((result) => {
  //     this.setState({
  //       isLoaded: true,
  //       apiResult: result.results,
  //     });
  //   });

  // this.setState({
  //   apiFirstName: this.state.apiResult.name,
  // });




  render() {

    return(
  <Wrapper>
    <Title>

    </Title>


  </Wrapper>
    )
  }
}



export default App;
