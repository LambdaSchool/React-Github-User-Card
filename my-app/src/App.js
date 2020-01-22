import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from "./UserCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userCard: []
    }
  }
  componentDidMount() {
    fetch("https://api.github.com/users/VitaliyM3")
      .then(res => res.json())
      .then(users => this.setState({ ...this.state, userCard: users.login }))
      .catch(err => console.log("There is an error", err));
  }

  render() {
    return (
      <div className="App">
        <h1>React Github User Cards</h1>
        <UserCard user={userCard} className="user">
          {this.state.userCard.map(user => {
          return <div>hello</div>
          })}
        </UserCard>
      </div>
    );
  }



}

export default App;
