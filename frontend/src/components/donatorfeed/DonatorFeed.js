import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DonationForm from "../donationForm/DonationForm";
import Navbar from "../navbar/Navbar";
import "./DonatorFeed.css";

const DonatorFeed = ({ navigate }) => {
  const { id } = useParams();
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [foodHeroId, setFoodHeroId] = useState(id);
  const [owner, setOwner] = useState("Food Hero");

  const handleAddDonationClick = () => {
    setShowDonationForm(true);
  };

  const cancelAddDonationClick = () => {
    setShowDonationForm(false);
  };

  const handleDonationCreated = () => {
    setShowDonationForm(false);
  };

  const statusDropdown = (format, name, disabled) => {
    const options = ["Available", "Pending", "Completed", "Unclaimed"].map(
      (val) => (
        <li>
          <a className="dropdown-item" href="#">
            {val}
          </a>
        </li>
      )
    );
    const classes = `btn ${format} dropdown-toggle col col-md-12`

    return (
      <>
        <button
          className={classes}
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          disabled={disabled}
        >
          {name}&nbsp; &nbsp;
        </button>
        <ul className="dropdown-menu">{options}</ul>
     </>
    );
  };

  const mockDonations = [
    {
      status: "Available",
      code: "0218",
      donationInfo: "4 yummy apple pies with sweet onion!",
      colectorInfo: "Jery's foodbank",
      expires: "03:17",
    },
    {
      status: "Available",
      code: "0218",
      donationInfo: "4 yummy apple pies with sweet onion!",
      colectorInfo: "Jery's foodbank",
      expires: "03:17",
    },
    {
      status: "Completed",
      code: "0218",
      donationInfo: "4 yummy apple pies with sweet onion!",
      colectorInfo: "Jery's foodbank",
      expires: "03:17",
    },
  ];

  const myDonations = () => {
    return mockDonations.map((donation) => {
      return (
        <div className="container mb-2 border border-success border-1 rounded px-2 py-2">
          <div className="row">
            <div className="dropdown col">{statusDropdown('btn-outline-success border-0 px-0', donation.status, false)}</div>
            <div className="col col-md-9 text-end"><button disabled className="btn btn-outline-success border-0" >Code: {donation.code}</button></div>
          </div>
          <div className="row ps-5 pe-1">
            <div className="col">{donation.donationInfo}</div>
          </div>
          <hr className="mb-1"></hr>
          <div className="row">
            <div className="col">Food Rescuer: {donation.colectorInfo}</div>
            <div className="col text-end">Expires: {donation.expires}</div>
          </div>
        </div>
      );
    });
  };

  if (token) {
    return (
      <>
        <Navbar owner={""} navigate={navigate}></Navbar>
        <h2 className="ms-5">Hello, Hero!</h2>

        <div className="container mt-5">
          <div className="row mt-5">
            <div className="col col-md-3"></div>
            <div className="col col-md-6">
              {showDonationForm ? (
                <div className="row">
                  <DonationForm
                    onCreated={handleDonationCreated}
                    foodheroid={foodHeroId}
                  />
                  <div className="col mt-2">
                    <input
                      className="btn btn-outline-secondary col-md-12"
                      onClick={cancelAddDonationClick}
                      value="Cancel"
                    />
                  </div>
                </div>
              ) : (
                <>
                  <div id="feed" className="row">
                    <div className="col col-md-12 mb-3">
                      <button
                        onClick={handleAddDonationClick}
                        className="btn btn-warning  col col-md-12"
                      >
                        Add Your Donation
                      </button>
                    </div>
                  </div>
                  <div id="feed" className="row">
                    <div className="dropdown col col-md-3 mb-1">
                    {statusDropdown('btn-outline-success', 'Filter', false)}
                    </div>
                    <div className="col col-md-6">
                      <input
                        className="form-control  col col-md-12"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </div>
                    <div className="col col-md-3">
                      <button
                        className="btn btn-outline-success col col-md-12"
                        type="submit"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="col col-md-3"></div>
          </div>
          <div className="row mt-5">
            <div id="donations-list" className="col col-md-6 mx-auto">
              {myDonations()}
            </div>
          </div>
          <div className="row">
            <div className="col"></div>
          </div>
        </div>
      </>
    );
  } else {
    navigate("/signupdonator");
  }
};

export default DonatorFeed;
