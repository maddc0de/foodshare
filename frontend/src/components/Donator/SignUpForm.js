import React, { useState } from "react";
import Navbar from "../navbar/Navbar";

const DonatorSignUpForm = ({ navigate }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [usertype, setUserType] = useState("Hero");
  const [password, setPassword] = useState("");
  const [owner, setOwner] = useState("Food Hero");
  window.localStorage.setItem("app-route", "signup")
  
  const handleSubmit = async (event) => {
    event.preventDefault();

  fetch('/users', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      description: description,
      location: location,
      usertype: usertype,
      password: password,
    })
  })
    .then((response) => {
      if (response.status === 201) {
        navigate('/login/donator');
      } else {
        navigate('/signup/donator');
      }
    })
    .catch((errors) => {
      console.log(errors);
    });
};

const navigateToLogin = () => {
  navigate("/login/donator");
};

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  return (
    <>
      <Navbar owner={owner}></Navbar>
      <div className="container mt-5" id="signup-box">
      <h3 class="fw-bold">We need Heroes.</h3>
      <h3 class="fw-semibold">Be part of the solution. Cut food waste. Support local communities.</h3>
      <h3 class="fw-semibold">Still need convincing? <a href="/about">Find out how here.</a></h3>
        <div className="row mt-5">
          <div className="col"></div>
          <div className="col">
            <form form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-12 mt-1">
                  <label htmlFor="inputName3">Name</label>
                  <input placeholder="Name" className="form-control" id="name" type='text' value={ name } onChange={ handleNameChange } />
                  </div>
                  <div className="form-group col-md-12 mt-1">
                  <label htmlFor="inputEmail4">Email</label>
                  <input placeholder="Email" className="form-control" id="email" type='text' value={ email } onChange={handleEmailChange} />
                  </div>
                  <div className="form-group col-md-12 mt-1">
                  <label htmlFor="inputPassword4">Password</label>
                  <input placeholder="Password" className="form-control" id="password" type='password' value={ password } onChange={handlePasswordChange} />
                  </div>

                  <div className="form-group">
                  <label htmlFor="inputAddress">Address</label>
                  <input placeholder="Location" className="form-control" id="location" type='text' value={ location } onChange={handleLocationChange} />
                  </div>

                <div className="form-group">
                <label htmlFor="inputDescription">Description</label>
                <textarea placeholder="Description" className="form-control" id="description" type='text' value={ description } onChange={handleDescriptionChange} />
                </div>
              

                <div className="form-group col-md-12 mt-3">
                <input
                  type="submit"
                  className="form-control btn btn-success"
                  value="Become a Food Hero" />
                </div>
                <div className="form-group col-md-12 mt-3">
                <label
                    htmlFor="inputButton"
                    className="col-md-12 text-center"
                  >
                    Already a member? Click here to login
                  </label>
                  <input
                    type="button"
                    className="form-control btn btn-secondary"
                    id="inputButton"
                    value="Login"
                    onClick={ navigateToLogin }
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col"></div>
        </div>
      </div>
    </>

    // <form onSubmit={handleSubmit}>
    // <input placeholder="Name" id="name" type='text' value={ name } onChange={ handleNameChange } />
    // <input placeholder="Email" id="email" type='text' value={ email } onChange={handleEmailChange} />
    // <input placeholder="Location" id="location" type='text' value={ location } onChange={handleLocationChange} />
    // <input placeholder="Description" id="description" type='text' value={ description } onChange={handleDescriptionChange} />
    // <input placeholder="Password" id="password" type='password' value={ password } onChange={handlePasswordChange} />
    // <input placeholder="User Type" id="usertype" type='text' value='Hero' onChange={handleUsertypeChange} />
    // <input id='submit' type="submit" value="Submit" />
    // </form>
  );
};

export default DonatorSignUpForm;
