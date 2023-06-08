import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import './about.css'

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
      <div>
        <input type="number" value={input} onChange={handleInputChange} />
        <button onClick={calculate}>Calculate</button>
        {result && <p>Result: {result}</p>}
      </div>
    );
}

export default About;