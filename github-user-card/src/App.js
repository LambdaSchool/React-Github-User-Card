import React from "react";
import axios from "axios";
import "./App.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

//this bitch gon' hold all the things, bruh.

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gitdata: [],
      gitusers: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/avawing")
      .then((res) => {
        this.setState([{gitdata: res.data}])
        console.log(this.state.gitdata)
        console.log(res.data)
      })
      .catch((error) => {
        console.log(`Everything is broken: ${error}`);
      });
      axios
      .get("https://api.github.com/users/avawing/followers")
      .then((res) => {
      this.setState({gitusers: res.data});
      console.log(this.state.gitusers)
      console.log(res.data)
      })
      .catch((error) => {
        console.log(`Everything is broken: ${error}`);
      });
  }

  render() {
    return (
      <>
        <h1>User Card</h1>
        {this.state.gitdata.map((user) => {
          return (
            <Card key={user.id}>
              <CardBody>
                <CardTitle>{user.name}</CardTitle>
                <CardSubtitle>{user.login}</CardSubtitle>
              </CardBody>
              <CardImg width="100%" src={user.avatar_url} alt={user.name} />
              <CardBody>
                <CardText>{user.bio}</CardText>
                <CardLink href={user.html_url}>GitHub</CardLink>
              </CardBody>
            </Card>
          );
        })}
        {this.state.gitusers.map((user) => {
          return (
            <Card key={user.id}>
              <CardBody>
                <CardTitle>{user.name}</CardTitle>
                <CardSubtitle>{user.login}</CardSubtitle>
              </CardBody>
              <CardImg width="100%" src={user.avatar_url} alt={user.name} />
              <CardBody>
                <CardText>{user.bio}</CardText>
                <CardLink href={user.html_url}>GitHub</CardLink>
              </CardBody>
            </Card>
          );
        })}
      </>
    );
  }
}

export default App;
