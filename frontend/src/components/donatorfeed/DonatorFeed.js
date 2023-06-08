import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DonationForm from "../donationForm/DonationForm";
import Navbar from "../navbar/Navbar";
import "./DonatorFeed.css";

const DonatorFeed = ({ navigate }) => {
  const { id } = useParams();
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [foodHeroId, setFoodHeroId] = useState(id);
  const [foodHeroName, setFoodHeroName] = useState(id);
  const [owner, setOwner] = useState("Food Hero");
  const [donationsByDonator, setdonationsByDonator] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [needsRefresh, setRefresh] = useState(false);

  function formatDate(dateString) {
    const expDate = new Date(dateString);
    const year = expDate.getFullYear();
    const month = String(expDate.getMonth() + 1).padStart(2, '0');
    const day = String(expDate.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
  }

  useEffect(() => {
    if(token) {
      fetch(`/donations/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(async data => {
          window.localStorage.setItem("token", data.token)
          setToken(window.localStorage.getItem("token"))
          setdonationsByDonator(data.donations);
        })
    }

    fetch(`/users/${id}`)
      .then(response => response.json())
      .then(async dataName => {
        setFoodHeroName(dataName);
    })
  }, [needsRefresh])
    

  const handleAddDonationClick = () => {
    setShowDonationForm(true);
  };

  const cancelAddDonationClick = () => {
    setShowDonationForm(false);
  };

  const handleDonationCreated = () => {
    setShowDonationForm(false);
    setRefresh(!needsRefresh);
  };

  const statusDropdown = (format, name, disabled) => {
    const options = ["Available", "Pending", "Completed", "Unclaimed"].map(
      (val) => (
        <li key={val}>
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
  
  const myDonations = () => {
    const filteredDonations = searchQuery
      ? donationsByDonator.filter((donation) =>
          donation.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : donationsByDonator;
  
    return filteredDonations.map((donation) => (
      <div
        key={donation.code}
        className="container mb-2 border border-success border-1 rounded px-2 py-2 bg-white"
      >
        <div className="row">
          <div className="dropdown col">
            {statusDropdown('btn-success border-0 px-0', donation.status, false)}
          </div>
          <div className="col col-md-9 text-end">
            <button disabled className="btn btn-outline-success border-0">
              Code: {donation.code}
            </button>
          </div>
        </div>
        <div className="row ps-5 pe-1">
          <div className="col">{donation.description}</div>
        </div>
        <hr className="mb-1"></hr>
        <div className="row">
          <div className="col">Food Rescuer: {donation.foodRescuerName ? (donation.foodRescuerName) : ("up for grabs")}</div>
          <div className="col text-end">Expires: {formatDate(donation.expiryDate)}</div>
        </div>
      </div>
    ));
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
                    foodheroname={foodHeroName}
                    token={token}
                  />
                  <div className="col mt-2">
                    <input
                      className="btn btn-secondary col-md-12"
                      onClick={cancelAddDonationClick}
                      value="Cancel"
                    />
                  </div>
                </div>
              ) : (
                <div className="sticky-top">
                  <div id="feed" className="row">
                    <div className="col col-md-12 mb-3">
                      <button
                        onClick={handleAddDonationClick}
                        className="btn btn-success  col col-md-12"
                      >
                        Add Your Donation
                      </button>
                    </div>
                  </div>
                  <div id="feed" className="row">
                    <div className="dropdown col col-md-6 mb-1">
                    {statusDropdown('btn-success', 'Filter', false)}
                    </div>
                    <div className="col col-md-6">
                      <input
                        className="form-control  col col-md-12"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="col col-md-3"></div>
          </div>
          <div className="row mt-5">
          {(() => {
              if (showDonationForm) {
                return;
              } else {
                return (
                  <div id="donations-list" className="col col-md-6 mx-auto">
                    <h3>My Donations</h3>
                    {myDonations()}
                  </div>
                );
              }
            })()}
          </div>
          <div className="row">
            <div className="col"></div>
          </div>
        </div>
      </>
    );
  } else {
    navigate("/signup/donator");
  }
};

export default DonatorFeed;