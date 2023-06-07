import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import LoginForm from "../login/LoginForm";
import foodRescueDefault from "../../../public/food_rescue.png"; 

const LoginCollector = ({ navigate }) => {
 
  const [owner, setOwner] = useState("Food Rescuer");
  const [picture, setPicture] = useState(foodRescueDefault);


  
  return (
    <>
      <Navbar owner={owner} picture={picture}></Navbar> 

      <LoginForm owner={owner} picture={picture} navigate={navigate}></LoginForm> {/* Pass the profile picture as a prop to the LoginForm component */}
    </>
  );
};

export default LoginCollector;
