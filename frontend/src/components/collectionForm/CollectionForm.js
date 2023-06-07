import React, { useState } from "react";

const CollectionForm = ({ onCreated, foodRescuerId, donationId, donationInfo, foodHero }) => {
  const [content, setContent] = useState(donationInfo);
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [donator, setdonator] = useState(foodHero);
  const [name, setName] = useState(window.localStorage.getItem("name"));

  const handleSubmit =  (event) => {
    event.preventDefault();

    fetch(`/donations/${donationId}`, {
      method: "patch",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        foodRescuerId: foodRescuerId,
        foodRescuerName: 'name'
      }),
    });

    onCreated();
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };



  return (
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
              value={donator}
              id="donator"
     
               disabled
            />
            <label htmlFor="inputDescription">Description</label>
            <textarea
              className="form-control"
              id="inputDescription"
              placeholder="Type food contents here.."
              value={content}
              disabled
              onChange={handleContentChange}
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
                width: "48.5%",
                marginLeft: "1.5%",
                display: "inline-block",
                marginTop: "-0.25rem",
              }}
              required
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default CollectionForm;
