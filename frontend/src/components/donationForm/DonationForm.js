import React, { useState } from "react";
import "./DonatorForm.css";


const DonationForm = ({ onCreated, foodheroid, token }) => {
  const [description, setDescription] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [location, setLocation] = useState(window.localStorage.getItem("location"));
  
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1); // Add one day to the current date
  const formattedCurrentDate = currentDate.toISOString().split("T")[0];

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch("/donations", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ food_heroes_id: foodheroid, description: description, expiryDate: expiryDate, token: token })
    })

    onCreated();
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value)
  }

  return (
    <>
      <h3 className="text-center">Make a Donation</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="inputDescription">Description</label>
            <textarea
              className="form-control"
              id="inputDescription"
              placeholder="Type food contents here.."
              value={description}
              required
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
        </div>
        <div className="form-row form-group">
          <div className="col col-md-12 mt-1 mb-3">
            <label
              htmlFor="expire"
              style={{
                display: "block",
                marginBottom: "-0.5rem",
              }}
            >
              Expires at:
            </label>
            <input
              type="date"
              pattern="\d{4}-\d{2}-\d{2}"
              className="form-control col-md-12 mt-2"
              value={expiryDate}
              min={formattedCurrentDate}
              name="expiryDate"
              id="expiryDate"
              style={{
                width: "48.5%",
                marginRight: "1.5%",
                display: "inline-block",
              }}
              required
              onChange={handleExpiryDateChange}
            />

            <input
              type="submit"
              className="form-control btn btn-success col-md-12"
              value="Submit Your Donation"
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

export default DonationForm;
