import React, { useState } from "react";
import DonatorSignUpForm from "../Donator/SignUpForm";
import Navbar from "../navbar/Navbar";
import "./SignUpForm.css";

const SignUpForm = ({ navigate }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUserType] = useState("Rescuer");
  const [owner, setOwner] = useState("Food Rescuer");
  const [errors, setErrors] = useState([]);
  window.localStorage.setItem("app-route", "signup")

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const formData = new FormData();
    // formData.append("name", name);
    // formData.append("email", email);
    // formData.append("password", password);
    // formData.append("usertype", usertype);

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

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <Navbar owner={owner}></Navbar>
      
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col"></div>
          <div className="col">
          <form form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-12 mt-1">
                  <label htmlFor="inputName3">Name</label>
                  <input placeholder="Name" id="name" type='text' value={ name } onChange={ handleNameChange } />
                </div>
                <div className="form-group col-md-12 mt-1">
                  <label htmlFor="inputEmail4">Email</label>
                  <input placeholder="Email" id="email" type='text' value={ email } onChange={handleEmailChange} />
                </div>
                <div className="form-group col-md-12 mt-1">
                  <label htmlFor="inputPassword4">Password</label>
                  <input placeholder="Password" id="password" type='password' value={ password } onChange={handlePasswordChange} />
                </div>


                <div className="form-group col-md-12 mt-3">
                <input id='submit' type="submit" value="Submit" />
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

      {/* <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-header">
            <p>Please complete the details below to create your account:</p>
          </div>
          <div className="form-group">
            <div className="aligned-names">
              <div className="name-box-space">
                <input
                  placeholder="Name"
                  id="Name"
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </div>
              <div className="user-type-box-space">
                <input
                  placeholder="User type"
                  id="usertype"
                  type="text"
                  value={usertype}
                  onChange={handleUserTypeChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <input id="submit" type="submit" value="Become a Food Rescuer" />
          </div>
        </form>
        <div className="Member-redirect">
          <input
            id="submit"
            type="submit"
            value="Already a member? Click here to login"
          />
        </div>
      </div> */}
    </>
  );
};

export default SignUpForm;
