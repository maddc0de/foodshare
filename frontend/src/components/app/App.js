import './App.css';
import LoginForm from "../login/LoginForm";
import SignUpForm from "../Collector/SignUpForm";
import DonatorSignUpForm from '../Donator/SignUpForm';
import DonatorFeed from '../donatorfeed/DonatorFeed';
import React from "react";
import { useNavigate, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm navigate={useNavigate()} />} />
      <Route path="/signup/collector" element={<SignUpForm navigate={useNavigate()} />} />
      <Route path="/signup/donator" element={<DonatorSignUpForm navigate={useNavigate()} />} />
      <Route path="/foodhero/:id" element={<DonatorFeed navigate={useNavigate()} />} />
    </Routes>
  );
};


export default App;