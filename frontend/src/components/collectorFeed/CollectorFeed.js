import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CollectionForm from "../collectionForm/CollectionForm";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import './CollectorFeed.css'

const CollectorFeed = ({ navigate }) => {
  const { id } = useParams();
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [showCollectionForm, setShowCollectionForm] = useState(false);
  // const [foodRescuerId, setFoodRescuerId] = useState(
  //   window.localStorage.getItem("id")
  // );
  const [foodRescuerName, setFoodRescuerName] = useState("");
  const [donationId, setDonationId] = useState("");
  const [owner, setOwner] = useState("Food Rescuer");
  const [donationsList, setDonationsList] = useState([]);
  const [donationInfo, setDonationInfo] = useState("");
  const [foodHeroName, setFoodHeroName] = useState("");
  const [needsRefresh, setRefresh] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddCollectionClick = (
    donationId,
    donationInfo,
    foodHeroName,

  ) => {
    setDonationId(donationId);
    setDonationInfo(donationInfo);
    setFoodHeroName(foodHeroName);
    setShowCollectionForm(true);
  };

  const handleGoBackToFeedClick = () => {
    setShowCollectionForm(false);
    setRefresh(!needsRefresh);
  };

  const handleCollectionCreated = () => {
    setShowCollectionForm(false);
  };

  useEffect(() => {
    if(token) {
      fetch(`/donations`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(async data => {
          setToken(window.localStorage.getItem("token"))
          setDonationsList(data.donations);
        })
    }

    fetch(`/users/${id}`)
      .then(response => response.json())
      .then(async data => {
        setFoodRescuerName(data);
      })
  }, [needsRefresh])
  

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }


  const donations = () => {
    const filteredDonations = searchQuery
      ? donationsList.filter((donation) =>
          donation.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : donationsList;
      
    return filteredDonations.map((donation, index) => (
        <div
          key={index}
          className="container mb-2 border border-success border-1 rounded px-2 py-2"
        >
          <div className="row">
            <div className="ol col-md-9">
    
            </div>
            <div className="col col-md-3 text-end">
              <button
                onClick={() =>
                  handleAddCollectionClick(
                    donation["_id"],
                    donation.description,
                    donation.foodHeroName
                  )
                }
                className="btn btn-primary  col col-md-12"
              >
                Collect
              </button>
            </div>
          </div>
          <div className="row ps-5 pe-1">
            <div className="col">{donation.description}</div>
          </div>
          <hr className="mb-1"></hr>
          <div className="row">
            <div className="col">Food Hero: {donation.foodHeroName}</div>
            <div className="col text-end">Expires: {formatDate(donation.expiryDate)}</div>
          </div>
        </div>
      )
    )
  };

  if (token) {
    return (
      <>
        <Navbar owner={""} navigate={navigate}></Navbar>
        <h2 className="ms-5">Hi, Rescuer!</h2>

        <div className="container mt-5">
          <div className="row mt-5">
            <div className="col col-md-3"></div>
            <div className="col col-md-6">
              {showCollectionForm ? (
                <div className="row">
                  <CollectionForm
                    onCreated={handleCollectionCreated}
                    foodRescuerId={id}
                    foodRescuerName={foodRescuerName}
                    donationInfo={donationInfo}
                    donationId={donationId}
                    foodHeroName={foodHeroName}
                  />
                  <div className="col mt-2">
                    <input
                      className="btn btn-outline-secondary col-md-12"
                      id="back-button"
                      onClick={handleGoBackToFeedClick}
                      value="take me back to my feed"
                    />
                  </div>
                </div>
              ) : (
                <div className="sticky-top">
                  <div id="feed" className="row">
                    <div className="col col-md-3">
                      
                        {/* className="btn btn-success col col-md-12"
                        type="submit"
                      > */}
                        <Link to={`/${id}/account`} className="btn btn-success col col-md-12" >
                        My Account
                        </Link>
                      
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
              if (showCollectionForm) {
                return;
              } else {
                return (
                  <div id="donations-list" className="col col-md-6 mx-auto">
                    <h3>Donations</h3>
                    {donations()}
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
    navigate("/signup/collector");
  }
};

export default CollectorFeed;
