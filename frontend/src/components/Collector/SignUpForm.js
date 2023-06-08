import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./SignUpForm.css";

const SignUpForm = ({ navigate }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUserType] = useState("Rescuer");
  const [owner, setOwner] = useState("Food Rescuer");
  window.localStorage.setItem("app-route", "signup")

  const handleSubmit = async (event) => {
    event.preventDefault();

    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        usertype: usertype,
        password: password,
      })
    })
    .then((response) => {
      if (response.status === 201) {
        navigate("/login/collector");
      } else {
        navigate("/signup/collector");
      }
    })
    .catch((errors) => {
      console.log(errors);
    });
  };

  const navigateToLogin = () => {
    navigate("/login/collector");
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <Navbar owner={owner}></Navbar>
      
      <div className="container mt-5" id="signup-box">
        <div className="row mt-5">
          <div className="col"></div>
          <div className="col">
            <form form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-12 mt-1">
                  <label htmlFor="inputName3">Name</label>
                  <input 
                    type="text"
                    id="inputName3"  
                    placeholder="Name" 
                    value={ name } 
                    onChange={ handleNameChange } 
                  />
                </div>
                <div className="form-group col-md-12 mt-1">
                  <label htmlFor="inputEmail4">Email</label>
                  <input 
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                    value={ email } 
                    onChange={handleEmailChange} 
                  />
                </div>
                <div className="form-group col-md-12 mt-1">
                  <label htmlFor="inputPassword4">Password</label>
                  <input 
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                    value={ password } 
                    onChange={handlePasswordChange} 
                  />
                </div>
                <div className="form-group col-md-12 mt-3">
                <input 
                  type="submit"
                  className="form-control btn btn-success"
                  value="Become a Food Rescuer"
                />
                </div>
                <div className="form-group col-md-12 mt-3">
                  <label htmlFor="inputButton" className="col-md-12 text-center">Already a member? Click here to login</label>
                  <input
                    type="button"
                    className="form-control btn btn-secondary"
                    id="inputButton"
                    value="Login"
                    onClick={navigateToLogin}
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
  );
};

export default SignUpForm;
