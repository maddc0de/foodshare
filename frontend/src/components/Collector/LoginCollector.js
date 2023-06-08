import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import LoginForm from "../login/LoginForm";

const LoginCollector = ({ navigate }) => {
  const [owner, setOwner] = useState("Food Rescuer");
  const [imagePath, setImagePath] = useState("/2.png")

  return (
    <>
      <Navbar owner={owner}></Navbar>
      <LoginForm owner={owner} navigate={navigate} image={imagePath}></LoginForm>
    </>
  );
};

export default LoginCollector;
