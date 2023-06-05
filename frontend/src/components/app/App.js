import './App.css';
import SignUpForm from "../Collector/SignUpForm";
import SignUpFormDonor from "../Donator/SignUpFormDonor";
import DonatorFeed from '../donatorFeed/DonatorFeed';
import React from "react";
import { useNavigate, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/signup/collector" element={<SignUpForm navigate={useNavigate()} />} />
      <Route path="/signup/donor" element={<SignUpFormDonor navigate={useNavigate()} />} />
      <Route path="/foodhero/:id" element={<DonatorFeed navigate={useNavigate()} />} />
      <Route path="/signup/collector" element={<SignUpForm navigate={useNavigate()} />} />
      <Route path="/signup/donator" element={<SignUpFormDonor navigate={useNavigate()} />} />
      <Route path="/foodhero/:id" element={<DonatorFeed navigate={useNavigate()} />} />
    </Routes>
  );
};


export default App;