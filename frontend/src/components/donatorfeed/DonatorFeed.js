import React, { useState } from 'react';

const DonatorFeed = ({ navigate }) => {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  
  if(token) {
    return(
      <div className="feed-container">
        <h1>Hello, Hero!</h1>
        <button>Add Donation</button>
        <div id='donations-list' role="feed">
        </div>
    </div>
    )
  } else {
    navigate('/signupdonator')
  }
}

export default DonatorFeed;