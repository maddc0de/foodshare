import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CollectionForm from "../collectionForm/CollectionForm";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";

const CollectorFeed = ({ navigate }) => {
  const { id } = useParams();
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [showCollectionForm, setShowCollectionForm] = useState(false);
  const [foodRescuerId, setFoodRescuerId] = useState(
    window.localStorage.getItem("id")
  );
  const [useDistance, setUseDistance] = useState("0");
  const [rescuerLocation, setRescuerLocation] = useState("sasd"); //window.localStorage.getItem("location")
  const [donationId, setDonationId] = useState("");
  const [owner, setOwner] = useState("Food Rescuer");
  const [donationsList, setDonationsList] = useState([]);
  const [foodHero, setFoodHero] = useState("");
  const [donationInfo, setDonationInfo] = useState("");

  const handleAddCollectionClick = (
    donationId,
    donationInfo,
    distance,
    heroName
  ) => {
    setDonationId(donationId);
    setDonationInfo(donationInfo);
    setUseDistance(distance);
    setFoodHero(heroName);
    // console.log('>>>>', event)
    setShowCollectionForm(true);
  };

  const cancelAddCollectionClick = () => {
    setShowCollectionForm(false);
  };

  const handleCollectionCreated = () => {
    setShowCollectionForm(false);
  };

  const mockDonations = [
    {
      food_hero_id: "623g263782y3g",
      donationId: "123g263782y3g",
      donationInfo: "4 yummy apple pies with sweet onion!",
      heroName: "Tesco",
      expires: "03:17",
      location: "12 Baker Street, London, N10UR",
    },
    {
      food_hero_id: "623g263782y3g",
      donationId: "223g263782y3g",
      donationInfo: "4 yummy apple pies with sweet onion!",
      heroName: "Tesco",
      expires: "03:17",
      location: "12 Finchley Road, London, N10UR",
    },
    {
      food_hero_id: "623g263782y3g",
      donationId: "323g263782y3g",
      donationInfo: "4 yummy apple pies with sweet onion!",
      heroName: "Tesco",
      expires: "03:17",
      location: "12 High Street, London, N10UR",
    },
    {
      food_hero_id: "623g263782y3g",
      donationId: "423g263782y3g",
      donationInfo: "4 yummy apple pies with sweet onion!",
      heroName: "Tesco",
      expires: "03:17",
      location: "12 Baker Street, Manchester, N10UR",
    },
    {
      food_hero_id: "623g263782y3g",
      donationId: "523g263782y3g",
      donationInfo: "4 yummy apple pies with sweet onion!",
      heroName: "Tesco",
      expires: "03:17",
      location: "12 Baker Street, Leeds, N10UR",
    },
    {
      food_hero_id: "623g263782y3g",
      donationId: "623g263782y3g",
      donationInfo: "4 yummy apple pies with sweet onion!",
      heroName: "Tesco",
      expires: "03:17",
      location: "12 Baker , London, N10UR",
    },
  ];

  const getDistance = (heroLocation) => {
    const distance = (
      Math.abs(heroLocation.length - rescuerLocation.length) / 20
    ).toFixed(1);
    return distance;
  };

  useEffect(() => {
    const donations = mockDonations.map((donation) => {
      console.log();
      donation.distance = getDistance(donation.location);
      return donation;
    });
    setDonationsList(donations);
  }, []);

  const donations = () => {
    return donationsList.map((donation) => {
      return (
        <div
          key={donation.donationId}
          className="container mb-2 border border-success border-1 rounded px-2 py-2"
        >
          <div className="row">
            <div className="ol col-md-9">
              <button disabled className="btn btn-outline-success border-0">
                Dist: {donation.distance} miles
              </button>
            </div>
            <div className="col col-md-3 text-end">
              <button
                onClick={() =>
                  handleAddCollectionClick(
                    donation.donationId,
                    donation.donationInfo,
                    donation.distance,
                    donation.heroName
                  )
                }
                className="btn btn-primary  col col-md-12"
              >
                Collect
              </button>
            </div>
          </div>
          <div className="row ps-5 pe-1">
            <div className="col">{donation.donationInfo}</div>
          </div>
          <hr className="mb-1"></hr>
          <div className="row">
            <div className="col">Food Hero: {donation.heroName}</div>
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
        <h2 className="ms-5">Hi, Rescuer!</h2>

        <div className="container mt-5">
          <div className="row mt-5">
            <div className="col col-md-3"></div>
            <div className="col col-md-6">
              {showCollectionForm ? (
                <div className="row">
                  <CollectionForm
                    onCreated={handleCollectionCreated}
                    foodRescuerId={foodRescuerId}
                    donationInfo={donationInfo}
                    donationId={donationId}
                    useDistance={useDistance}
                    foodHero={foodHero}
                  />
                  <div className="col mt-2">
                    <input
                      className="btn btn-outline-secondary col-md-12"
                      onClick={cancelAddCollectionClick}
                      value="Cancel"
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
                        <Link to={`/${id}/account`} >
                        My Account
                        </Link>
                      
                    </div>
                    <div className="col col-md-6">
                      <input
                        className="form-control  col col-md-12"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value=""
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
