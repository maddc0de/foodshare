import React from 'react';
import './DonatorForm.css'

const DonationForm = ({ onCreated }) => {
    return (
      <>
      <form className="add-donation-form" id="donationForm">
        <h1 className="make-post-title">Make a Donation</h1>
        <textarea className="desc-input" rows="4" cols="50" placeholder="type food contents here" id="description" form="donationForm"/>
        <input className="create-post-image-input"/>
        <input className="submit-button" role='submit-button' id='submit' type="submit" value="Submit"/>
      </form>
      </>
    );
}

export default DonationForm;