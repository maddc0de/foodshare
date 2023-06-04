import React, { useState } from 'react';
import './About.css';
import thumbnailImage from './foodwaste.png'
import { Link } from 'react-router-dom';
import Page from './page.jpg'


function About() {
  return (
    
    <div className="about-section">
        
      {/* <h1>About Foodshare</h1> */}
      {/* <h2> We believe that no good food should go to waste.
        We redistribute surplus food to charities that turn it into meals.</h2>

      <p>One third of all food produced today ends up in a bin, where it is at best fed to animals or recycled, and at worst it is sent to landfill or incineration. 
        Not only does this issue pose serious ethical and social questions, but it also deeply threatens the environment. 
        Food waste is responsible for 10% of all global greenhouse gas emissions and 28% of agricultural lands worldwide are used to produce food that’s destined to be ultimately wasted.</p>
      <p> Our mission at Foodshare is to connect food banks with businesses whose products would otherwise have gone unsold and been disposed of.</p>
      */}
      {/* <div>
      <img src={Description} alt="Description" id="video" width="700" height="560" />
    </div>

    <div>
      <img src={Pictures} alt="Pictures" id="video" width="700" height="240" />
    </div> */}

    <div>
      <img src={Page} alt="Page" id="page" width="700" height="1000" />
    </div>

    <div>
      <img src={thumbnailImage} alt="Thumbnail" id="video" width="700" height="350" />
    </div>

    {/* <div>
      <Link to="/signupdonator">
        <button>GET STARTED</button>
      </Link>
    </div> */}

    
{/*     
      <div className="column">
      <img src={Cars} alt="cars" id="video" width="330" height="300"/>
    </div>

    <div className="column">
      <img src={Bin} alt="bin" id="video" width="330" height="300"/>
    </div>

    <div className="column">
      <img src={Factory} alt="cars" id="video" width="330" height="300"/>
    </div>


    <div>
      <img src={thumbnailImage} alt="Thumbnail" id="video" width="560" height="315" />
    </div> */}
{/* 
      <h2>Our Team</h2>
      <div className="column">
      <div className="card">
      <img src={Maddy} alt="John" width="300" height="300"/>
        <div className="container">
          <h2>Madelane Daz</h2>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>

    <div className="column">
      <div className="card">
      <img src={Manuela} alt="John" width="300" height="300"/>
        <div className="container">
          <h2>Manuela Iacobovici</h2>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>

    <div className="column">
      <div className="card">
      <img src={Arya} alt="Arya" width="300" height="300"/>
        <div className="container">
          <h2>Arya Sunildath</h2>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>

    <div className="column">
      <div className="card">
      <img src={Robin} alt="Robin" width="300" height="300"/>
        <div className="container">
          <h2>Robin V</h2>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>

    <div className="column">
      <div className="card">
      <img src={Solmaz} alt="Solmaz" width="300" height="300"/>
        <div className="container">
          <h2>Solmaz Purser</h2>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>

    <div className="column">
      <div className="card">
      <img src={Jamie} alt="Jamie" width="300" height="300"/>
        <div className="container">
          <h2>Jamie Richardson</h2>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div> */}

    </div>

 
  );
}



export default About;