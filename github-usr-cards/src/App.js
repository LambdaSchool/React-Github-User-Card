import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';



/*
  The github react cards assignment
*/
class App extends React.Component {
  constructor(){
    super();
    this.state = {
        usersname:"",
        username:"",
        userimg: "",  
        newusr: ""
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/extrude575757")
      .then((res) => res.json())
      .then((json) => {
        if (json.status === "success") {
          this.setState({ userimg: json.avatar_url });
          this.setState({ username: json.login });
          this.setState({ usersname: json.name });
        } else {
          console.error("App.js CompDidMount: jsonstatus false  error fetching githubbers though its forced into a set state anyway: ", json);
          this.setState({ userimg: json.avatar_url });
          this.setState({ username: json.login });
          this.setState({ usersname: json.name });
        }
      })
      .catch((err) => console.error("App.js CompDidMount: Major error from catch function ", err));
  // Fetch followers here as well https://api.github.com/users/< Your github name >/followers
  
    }
  /*Some names
   bigknell','tetondan',
'dustinmyers', 'justsml', 'luishrd', 'snowcoding','james-coulter
        */
  handleUserChange = (e) => {
    this.setState({
      newusr: e.target.value
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.newusr !== this.state.newusr) {
     
console.log(`cdu: here prevProps${prevState}` );
    }

  }

  handleSetNewUser = (e) => { 
    fetch(`https://api.github.com/users/${this.state.newusr}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.status === "success") {
          this.setState({ userimg: json.avatar_url });
          this.setState({ username: json.login });
          this.setState({ usersname: json.name });
        } else {
          console.error("error fetching githubbers: handleSetNewUser forcing it any way", json);
          this.setState({ userimg: json.avatar_url });
          this.setState({ username: json.login });
          this.setState({ usersname: json.name });
        }
      })
      .catch((err) => console.error("App.js HandleSetNewUser You've got errors: ", err));
  };

  render() {
    return (
      <div className="App">
        <h1>Checkout Someone's Github</h1>
        <div>
          Username:{this.state.usersname}
          <input
            type="text"
            value={this.state.newusr}
            onChange={this.handleUserChange}
          />
          <button onClick={this.handleSetNewUser}>newusers information</button>
        </div>
        <div>Users</div>
    <div>Login: {this.state.username}</div>
           <img  alt="Github User Avatar Image" 
           src={this.state.userimg} width="300px" />
  
      </div>
    );
  }
}

export default App;