import React, { useState } from "react";
import CodeConfirmation from "../confirmationPage/ConfirmationPage";

const CollectionForm = ({ onCreated, foodRescuerId, foodRescuerName, donationInfo, donationId, foodHeroName }) => {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [code, setCode] = useState("");
  const [showCodeConfirmation, setShowCodeConfirmation] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit =  async (event) => {
    event.preventDefault();

    let response = await fetch(`/donations/${foodRescuerId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        donationId: donationId,
        status: "completed",
        foodRescuerName: foodRescuerName
      })
    });
    const data = await response.json();
    console.log(data.updatedDonation.code); // donation code
    setCode(data.updatedDonation.code)
    setShowCodeConfirmation(true)
  };

  return (
    <>
      {showCodeConfirmation ? ( <CodeConfirmation donationCode={code}/> )
      : (
      <>  
        <h3 className="text-center">Book Your Collection</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
            <label
                htmlFor="donator"
                style={{
                  display: "block",
                  marginBottom: "-0.5rem",
                }}
              >
                Food Hero:
              </label>
              <input
                type="text"
                className="form-control col-md-12 mt-2"
                value={foodHeroName}
                id="donator"
      
                disabled
              />
              <label htmlFor="inputDescription">Description</label>
              <textarea
                className="form-control"
                id="inputDescription"
                value={donationInfo}
                disabled
              ></textarea>
            </div>
          </div>
          <div className="form-row form-group">
            <div className="col col-md-12 mt-1 mb-3">
              <input
                type="submit"
                className="form-control btn btn-success col-md-12"
                value="Confirm"
                style={{
                  width: "100%",
                  marginLeft: "0.5%",
                  display: "inline-block",
                  marginTop: "1.25rem",
                }}
              />
            </div>
          </div>
        </form>
        </>
      )}
    </>
  );
};

export default CollectionForm;