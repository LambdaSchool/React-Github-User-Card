import React from 'react'

const FollowerItem = ({ follow }) => {
  console.log(follow)
  return (
    <div className='card'>
      
      <h3> 
        <a href={follow.url}> {follow.login} </a>  
      </h3>
    </div>
  )
}

export default FollowerItem
