import React, { useState } from 'react';
import './DonatorForm.css'

const DonationForm = ({ onCreated, foodheroid }) => {
  const [content, setContent] = useState("");
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    let response = await fetch( '/donations', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ food_heroes_id: foodheroid, description: content, token: token })
    })

    onCreated();
  }

  const handleContentChange = (event) => {
    setContent(event.target.value)
  }

  return (
    <>
      <form className="add-donation-form" onSubmit={handleSubmit}>
        <h1 className="make-post-title">Make a Donation</h1>
        <textarea className="desc-input" rows="4" cols="50" placeholder="type food contents here" id="description" onChange={handleContentChange} form="donationForm"/>
        <input className="submit-button" role='submit-button' id='submit' type="submit" value="Submit"/>
      </form>
    </>
  );
}

export default DonationForm;