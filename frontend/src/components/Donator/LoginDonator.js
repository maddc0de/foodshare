import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import LoginForm from "../login/LoginForm";


const LoginDonator = ({ navigate }) => {
 
  const [owner, setOwner] = useState("Food Hero");
  const [imagePath, setImagePath] = useState("/1.png")

  
  return (
    <>
    <Navbar owner={owner}></Navbar>
    <LoginForm owner={owner} navigate={navigate} image={imagePath}></LoginForm>
  </>
  );
};

export default LoginDonator;
