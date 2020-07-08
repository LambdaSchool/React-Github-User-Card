import React, { Component, Fragment } from 'react';
import Spinner from './Spinner';
import Followers from './Followers';
import { Link } from 'react-router-dom';
import GitHubCalendar from 'react-github-calendar';


export class User extends Component {
  componentDidMount() {
    this.props.getUserFollower(this.props.match.params.login);
    this.props.getUser(this.props.match.params.login);
  
   
  }

  render() {
    const  { 
      name, avatar_url, login, location, bio, html_url, followers, following, public_repos, public_gists,   
    }= this.props.user;

    const {  loading, follower } = this.props;

    if (loading) return <Spinner />;

    return ( <Fragment>

      <Link to='/'> Back to Search </Link>
      <div >
        <div >
          <img src={avatar_url} alt='avatar' className='round-img' style= {{ width: '100' }} />
          <h2>{ name }</h2>
        </div>

        </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-light'>Public Repos: {public_repos}</div>
        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
      </div>


        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username:&nbsp;</strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
            {location && (
                <Fragment>
                  <strong>Location:&nbsp;</strong>
                  {location}
                </Fragment>
              )}
            </li>
          </ul>
          <a href={html_url} className='btn btn-dark my-1'> View {name}'s Github Profile </a>
        </div>
     
    <div className='card all-center'>
      
   <GitHubCalendar username={login} fullYear={true} />
    </div>

      <div >
        
      <Followers follower={follower} />
      </div>
     
    </Fragment>
    )
  }
}


export default User
