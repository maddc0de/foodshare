import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DonationForm from "../donationForm/DonationForm";
import Navbar from "../navbar/Navbar";
import "./DonatorAccount.css"



const DonatorAccount = ({ navigate }) => {
    const [token, setToken] = useState(window.localStorage.getItem("token"));
    const [owner, setOwner] = useState("Food Hero");
    const [isEditingBio, setIsEditingBio] = useState(false);
    const [bioInput, setBioInput] = useState("");
    const { id } = useParams();
    const [needsRefresh, setRefresh] = useState(false);
    const [accountInformation, setaccountInfomation] = useState(id);
    const [donationsByDonator, setdonationsByDonator] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [usertype, setUsertype] = useState('');
    const [searchQuery, setSearchQuery] = useState("");
    
  
    // const [showUpload, setShowUpload] = useState(false);
    // const [imageURL, setImageURL] = useState(user.profilePicture);

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
            console.log(donationsByDonator)
            console.log(`THIS ARE THE DONATIONS BY THE DONATOR: ${donationsByDonator}`)
          })
      }
       
      fetch(`/users/${id}`)
        .then(response => response.json())
        .then(async dataAccount => {
          setName(dataAccount.name);
          setEmail(dataAccount.email);
          setLocation(dataAccount.location);
          setDescription(dataAccount.description);
          setUsertype(dataAccount.usertype);
      })
    }, [needsRefresh])

    // const myDonations = () => {
    //     donationsByDonator.filter((donation) =>
    //         donation.description.toLowerCase().includes(donationsByDonator.toLowerCase())
    //     )
    // };

    // console.log(myDonations);
   
        if (token) {
            return (
              <>
              <Navbar owner={""} navigate={navigate}></Navbar>
              <div className="dashboard">
                <h1 className="dashboard-title">Test</h1>
                <h3 className="dashboard-section">Your Dashboard:</h3>
      
                <div className="dashboard-stats">
                  <div className="dashboard-stat">
                    <h3 className="dashboard-subsection">Total number of donations:</h3>
                    <h3 className="dashboard-text">4</h3>
                    <p className="dashboard-description">
                      donations. You've reduced your food waste and provided for local communities who need it the most.
                    </p>
                  </div>
      
                  <div className="dashboard-stat">
                    <h3 className="dashboard-subsection">Number of completed donations:</h3>
                    <p className="dashboard-text">3</p>
                  </div>
      
                  <div className="dashboard-stat">
                    <h3 className="dashboard-subsection">Total number of Food Rescuers you have worked with:</h3>
                    <p className="dashboard-text">3</p>
                    <p className="dashboard-description">
                      local food banks have benefitted from your donations, with food inflation at record highs of 19.1%.
                    </p>
                  </div>
      
                  <div className="dashboard-stat">
                    <h3 className="dashboard-subsection">Your environmental impact:</h3>
                    <p className="dashboard-text">7.5kg of CO2e*</p>
                    <p className="dashboard-text">(*based on data that 1 kg of food = 2.5kg of CO2e)</p>
                  </div>
                </div>
      
                <div className="dashboard-user-info">
                  <h3 className="dashboard-subsection">{name}'s Account Information:</h3>
                  <p className="dashboard-text">Name: {name}</p>
                  <p className="dashboard-text">Email: {email}</p>
                  <p className="dashboard-text">Location: {location}</p>
                  <p className="dashboard-text">Description: {description}</p>
                </div>
              </div>
            </>
            );
          } else {
            navigate("/login");
          }
        };


export default DonatorAccount;