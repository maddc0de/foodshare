import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CollectorFeed from "../collectorFeed/CollectorFeed";
import Navbar from "../navbar/Navbar";
import "./CollectorAccountPage.css"

const CollectorAccount = ({ navigate }) => {
  const { id } = useParams();
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUserType] = useState("Rescuer");
  const [owner, setOwner] = useState("Food Rescuer");

  useEffect(() => {
    if(token) {
      fetch(`/donations/${id}`, {
        headers: {
          'authorization': `Bearer ${token}`
        }
      })
    }
  })

  fetch(`/users/account/${id}`)
    .then(response => response.json())
    .then(async dataAccount => {
      setName(dataAccount.name);
      setEmail(dataAccount.email);
      setPassword(dataAccount.password);
      setUserType(dataAccount.usertype);
}, [])


  if (token) {
    return (
      <>  
        <Navbar></Navbar>
      
        <div className="collector-account-container">
          <h1 className="collector-account-title">Food Rescuer: {name}'s Account</h1>
          <p className="collector-account-name">Name: {name} </p>
          <p className="collector-account-email">Email: {email} </p>
          <p className="collector-account-password">Password: {password} </p>
        </div>
      </>
      );
  } else {
    navigate('/login');
  }

  

};

export default CollectorAccount;