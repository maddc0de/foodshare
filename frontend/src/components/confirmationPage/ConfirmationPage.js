import React from "react";
import "./ConfirmationPage.css";

const CodeConfirmation = ({ donationCode }) => {
  const digits = donationCode.split("");

  return (
    <div className="code-container">
      <div className="confirmation-box">Your confirmation code is:</div>
      <div className="code-digits-container">
        {digits.map( digit => (
          <div className="digit">{digit}</div>
      ))}
      </div>
      <p>Please make sure to make a note of this and share with the staff at the collection point</p>
    </div>
  )
};

export default CodeConfirmation;