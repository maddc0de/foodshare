import './App.css';
import LoginCollector from "../Collector/LoginCollector";
import LoginDonator from "../Donator/LoginDonator";
import SignUpForm from "../Collector/SignUpForm";
import DonatorSignUpForm from '../Donator/SignUpForm';
import About from '../About/About';
import DonatorFeed from '../donatorFeed/DonatorFeed';
import React from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import AboutPage from '../About/About';

const App = () => {
  return (
    <Routes>
      <Route path="/signup/collector" element={<SignUpForm navigate={useNavigate()} />} />
      <Route path="/signup/donator" element={<DonatorSignUpForm navigate={useNavigate()} />} />
      <Route path="/login/collector" element={<LoginCollector navigate={useNavigate()} />} />
      <Route path="/login/donator" element={<LoginDonator navigate={useNavigate()} />} />
      <Route path="/foodhero/:id" element={<DonatorFeed navigate={useNavigate()} />} />
      <Route path="/about" element={<About navigate={useNavigate()} />} />
    </Routes>
  );
};


export default App;