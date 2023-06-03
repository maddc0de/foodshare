import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DonationForm from '../donationForm/DonationForm'
import './DonatorFeed.css'

const DonatorFeed = ({ navigate }) => {
  const { id } = useParams();
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [foodHeroId, setFoodHeroId] = useState(id);

  const handleAddDonationClick = () => {
    setShowDonationForm(true);
  };

  const handleDonationCreated = () => {
    setShowDonationForm(false);
  };
  
  if(token) {
    return(
      <div className="feed-container">

        <h1>Hello, Hero!</h1>
        
        {showDonationForm?
          <div>
            <DonationForm onCreated={handleDonationCreated} foodheroid={foodHeroId}/>
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