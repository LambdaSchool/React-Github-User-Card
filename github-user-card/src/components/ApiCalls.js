import React from "react";
import axios from "axios";
import UserCard from "./UserCard";
import FollowersCard from "./FollowersCard";
class ApiCalls extends React.Component {
  state = {
    UserData: [],
    FollowersData: [],
    error: ""
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/mjs001")
      .then(res => {
        this.setState({
          UserData: res.data
        });
        console.log(res.data);
      })
      .catch(err => console.log("the error for the git for userdata", err));

    axios
      .get("https://api.github.com/users/mjs001/followers")
      .then(res => {
        this.setState({
          FollowersData: res.data
        });
        console.log(res.data);
      })
      .catch(err =>
        console.log("the error for the git for followersdata", err)
      );
  }

  render() {
    return (
      <div className="container">
        <h1>My React Followers and I:</h1>
        <UserCard UserData={this.state.UserData} />
        <FollowersCard
          FollowersData={this.state.FollowersData.map(Follower => {
            {
              Follower = { Follower };
            }
          })}
        />
      </div>
    );
  }
}
export default ApiCalls;
