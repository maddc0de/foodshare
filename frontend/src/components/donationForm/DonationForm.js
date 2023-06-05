import React, { useState } from 'react';
import './DonatorForm.css'

const DonationForm = ({ onCreated, foodheroid, token }) => {
  const [description, setDescription] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1); // Add one day to the current date
  const formattedCurrentDate = currentDate.toISOString().split("T")[0];

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    let response = await fetch( '/donations', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ food_heroes_id: foodheroid, description: description, expiryDate: expiryDate, token: token })
    })

    onCreated();
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value)
  }

  return (
    <>
      <form className="add-donation-form" onSubmit={handleSubmit}>
        <h1 className="make-post-title">Make a Donation</h1>
        <textarea className="desc-input" rows="4" cols="50" placeholder="type food contents here" id="description" value={ description } onChange={handleDescriptionChange}/>
        <label>Expiry Date:</label>
        <input type="date" id="expiryDate" name="expiryDate" pattern="\d{4}-\d{2}-\d{2}" min={formattedCurrentDate} value={expiryDate} onChange={handleExpiryDateChange} required />
        <input className="submit-button" role='submit-button' id='submit' type="submit" value="Submit"/>
      </form>
    </>
  );
}

export default DonationForm;

