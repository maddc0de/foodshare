import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import LoginForm from "../login/LoginForm";

const LoginCollector = ({ navigate }) => {
 
  const [owner, setOwner] = useState("Food Rescuer");
  // const [picture, SetUserPicture] = useState("");

  
  return (
    <>
      <Navbar owner={owner}></Navbar>

      <LoginForm owner={owner} navigate={navigate}></LoginForm>
    </>
  );
};

export default LoginCollector;
