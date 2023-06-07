import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import LoginForm from "../login/LoginForm";
import foodHeroDefault from "../../../public/food_hero.png";

const LoginDonator = ({ navigate }) => {
 
  const [owner, setOwner] = useState("Food Hero");
  const [picture, setPicture] = useState(foodHeroDefault);
  // const [picture, SetUserPicture] = useState("");

  
  return (
    <>
    <Navbar owner={owner} picture={picture}></Navbar> 

    <LoginForm owner={owner} picture={picture} navigate={navigate}></LoginForm> {/* Pass the profile picture as a prop to the LoginForm component */}
  </>
  );
};

export default LoginDonator;
