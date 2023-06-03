import React, { useState } from "react";
import "./DonatorForm.css";

const DonationForm = ({ onCreated, foodheroid }) => {
  const [content, setContent] = useState("");
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch("/donations", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        food_heroes_id: foodheroid,
        description: content,
        token: token,
      }),
    });

    onCreated();
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <>
      <h3 className="text-center">Make a Donation</h3>
      <form>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="inputDescription">Description</label>
            <textarea
              type="text"
              className="form-control"
              id="inputDescription"
              placeholder="Type food contents here.."
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
              type="time"
              className="form-control col-md-12 mt-2"
              id="expire"
              style={{
                width: "48.5%",
                marginRight: "1.5%",
                display: "inline-block",
              }}
              required
            />

            <input
              type="button"
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
