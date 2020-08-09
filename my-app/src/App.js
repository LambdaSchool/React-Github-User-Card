import React from 'react';
import axios from "axios";
import './App.css';
import User from "./components/User";


class App extends React.Component { 
  constructor(){
    console.log("Constructor");
    super();
    this.state = {
      person: []

    };
  }

  componentDidMount(){
    console.log("CDM running");
    axios
    .get(`https://api.github.com/users/AHangstefer`)
    .then((res)=> {
      this.setState({ person: res.data})
      console.log("got the data!", this.state);
    })
    .catch((err)=> console.log("shit", err));
  }
  
  
 // componentDidUpdate(prevState, prevProps){
 //  console.log("CDU", this.state.person)
 // }



  render() {
  return (
    <div className="App">
      <header className="App-header"> 
      <div> Hey App.js component</div>
      <User person={this.state.person} />
        
       
      </header>
    </div>
  );
  };


};

export default App;
