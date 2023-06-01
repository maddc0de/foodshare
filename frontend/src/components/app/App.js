import './App.css';
import LoginForm from "../login/LoginForm";
import React from "react";
import { useNavigate, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm navigate={useNavigate()} />} />
    </Routes>
  );
};


export default App;