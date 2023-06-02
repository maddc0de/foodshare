import React, { useState } from 'react';
import DonationForm from '../donationForm/DonationForm'

const DonatorFeed = ({ navigate }) => {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [showDonationForm, setShowDonationForm] = useState(false);

  const handleAddDonationClick = () => {
    setShowDonationForm(true);
  };
  
  if(token) {
    return(
      <div className="feed-container">

        <h1>Hello, Hero!</h1>
        
        {showDonationForm?
          <div>
            <DonationForm />
          </div> :
          <div id="feed">
            <button onClick={handleAddDonationClick}>Add Donation</button>
            <div id="donations-list" >
              <h2>Donations</h2>
            </div>
          </div>
        }

      </div>
    )
  } else {
    navigate('/signupdonator')
  }
}

export default DonatorFeed;