import React, { useState } from "react";
import "./DonatorForm.css";

const DonationForm = ({ onCreated, foodheroid }) => {
  const produceCode = () => {
    const min = 1000;
    const max = 9999
    return Math.floor(Math.random() * (max - min + 1) + min).toString()
  }

  const [content, setContent] = useState("");
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [expire, setExpire] = useState("");
  const [location, setLocation] = useState(window.localStorage.getItem("location"));
  const [code, setCode] = useState(produceCode());

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
        expire: expire,
        food_hero_location: location,
        code: code
      }),
    });

    onCreated();
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleExpireChange = (event) => {
    setExpire(event.target.value);
  };

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
              value={content}
              required
              onChange={handleContentChange}
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
              value={expire}
              onChange={handleExpireChange}
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
