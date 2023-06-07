import React from "react";
import "./ConfirmationPage.css";

const CodeConfirmation = ({ navigate }) => {
  return (
    <div className="code-container">
      <div className="confirmation-box">Your confirmation code is:</div>
      <div className="code-digits-container">
        <div className="digit">1</div>
        <div className="digit">2</div>
        <div className="digit">3</div>
        <div className="digit">4</div>
      </div>
      <p>Please make sure to make a note of this and share with the staff at the collection point</p>
    </div>
  )
};

export default CodeConfirmation;