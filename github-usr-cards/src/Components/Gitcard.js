import React from "react";


class Gitcard extends React.Component {
    constructor(){
        super();
        this.state={
            username:"",
            userimg:"",

        }
    };

    componentDidMount(){
        
    }

    componentDidUpdate(prevProp,prevState){
        if(prevProp.username !== this.state.username){
            this.state.username = this.props.username;
        } 
        if(prevProp.userimg !== this.state.userimg){
            this.state.userimg = this.props.userimg;
        }
    }

    render(){
        return(
            <div><h1>Github User Stats</h1>
              <div className="card">
                    <p className="username">
                    Login: {this.state.username}
                    </p>
                    <img className="card"  alt="Github User Avatar Image" 
                    src={this.state.userimg} width="300px" />
            </div>
            </div>
        );
    }

}


export default Gitcard;