import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import './about.css'
import About1 from './1.png'
import About2 from './2.png'

const About = ({ navigate }) => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
  
    const handleInputChange = (event) => {
      setInput(event.target.value);
    };
  
    const calculate = () => {
      const multipliedValue = parseInt(input) * 442;
      setResult(multipliedValue);
    };
  
    return (
        <>
      <div>
      <div className="about-container">
        <img src={About1} alt="Page" id="page" width="575" height="800" />
        <img src={About2} alt="Page" id="page" width="575" height="800" />
        </div>
        <div className="calculator">
        <h3>Enter approximately how many bags of waste you throw away each week:</h3>
        <input type="number" value={input} onChange={handleInputChange} />
        <button onClick={calculate}>Calculate</button>
        {result && <p>The CO2e produced from your weekly waste could charge your phone {result} times</p>}
        <p></p>
        <ps>*1 bag is assumed to contain 1kg of food on average</ps>
        <p></p>
        <p> ____________________________________________________________</p>
        <p><a href="signup/donator">Sign up as Food Hero</a> | <a href="signup/collector">Sign up as Food Rescuer</a></p>
        </div>
      </div>
      </>
    );
}

export default About;