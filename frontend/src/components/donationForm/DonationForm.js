import React, { useState } from 'react';
import './DonatorForm.css'

const DonationForm = ({ onCreated, foodheroid, token }) => {
  const [description, setDescription] = useState("");
 
  console.log(`donation form's token: ${token}`)
  console.log(token);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    let response = await fetch( '/donations', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ food_heroes_id: foodheroid, description: description, token: token })
    })

    onCreated();
  }

  const handleContentChange = (event) => {
    setDescription(event.target.value)
  }

  return (
    <>
      <form className="add-donation-form" onSubmit={handleSubmit}>
        <h1 className="make-post-title">Make a Donation</h1>
        <textarea className="desc-input" rows="4" cols="50" placeholder="type food contents here" id="description" onChange={handleContentChange}/>
        <input className="submit-button" role='submit-button' id='submit' type="submit" value="Submit"/>
      </form>
    </>
  );
}

export default DonationForm;

