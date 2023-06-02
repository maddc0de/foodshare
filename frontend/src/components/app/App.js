import './App.css';
import LoginForm from "../login/LoginForm";
import SignUpForm from "../Collector/SignUpForm";
<<<<<<< HEAD
import SignUpForm from "../Donator/SignupForm";
=======
import DonatorSignUpForm from '../Donator/SignUpForm';
>>>>>>> 252c83bcb030c06a319b71a8280e586c5b4f2901
import React from "react";
import { useNavigate, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm navigate={useNavigate()} />} />
      <Route path="/signupcollector" element={<SignUpForm navigate={useNavigate()} />} />
<<<<<<< HEAD
      <Route path="/signupdonator" element={<SignUpForm navigate={useNavigate()} />} />
=======
      <Route path="/signupdonator" element={<DonatorSignUpForm navigate={useNavigate()} />} />
>>>>>>> 252c83bcb030c06a319b71a8280e586c5b4f2901
    </Routes>
  );
};


export default App;