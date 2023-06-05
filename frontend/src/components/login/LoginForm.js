import React, { useState } from "react";
import { useNavigate as navigate } from "react-router-dom";
import './LoginForm.css';

const LoginForm = (props) => {
  const [email, setEmail] = useState("hackney@email.com");//tesco@email.com
  const [password, setPassword] = useState("password");
  const [failMessage, setFailMessage] = useState("");
  const [owner, setOwner] = useState(`Login ${props.owner}`);
  const [ownerColor, setOwnerColor] = useState(
    props.owner === "Food Hero"
      ? "form-control btn btn-primary"
      : "form-control btn btn-success"
  );

  const HERO = "Hero";
  const RESCUER = "Rescuer";

  const navigateToSignup = () => {
    if (props.owner === "Food Hero") {
      props.navigate("/signup/donator");
    } else {
      props.navigate("/signup/collector");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/tokens", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if ("message" in data && data.message !== "OK") {
          console.log("wow sorry");
          props.owner === "Food Hero"
            ? props.navigate("/login/donator")
            : props.navigate("/login/collector");
          setEmail("");
          setPassword("");
          setFailMessage(
            `Sorry ${props.owner}, we have failed to login, please check the password and email used in the process.`
          );
        } else {
          console.log("yay");
          window.localStorage.setItem("token", data.token);
          window.localStorage.setItem("location", data.location);
          window.localStorage.setItem("id", data.id);
          window.localStorage.setItem("name", data.name);
          if (data.usertype === HERO) {
            props.navigate(`/foodhero/${data.id}`);
          } else {
            props.navigate(`/foodrescuer/${data.id}`);
          }
        }
      });
  };

  const handleOwnerChange = (event) => {
    setOwner(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div className="login-form">
      <div className="container mt-5">
        <div className="text-center" style={{ color: "#dc3545" }}>
          {failMessage}
        </div>
        <div className="row mt-5">
          <div className="col"></div>
          <div className="col">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-12 mt-1">
                  <label htmlFor="email">Email</label>
                  <input
                    placeholder="Email"
                    id="email"
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group col-md-12 mt-1">
                  <label htmlFor="password">Password</label>
                  <input
                    className="form-control"
                    placeholder="Password"
                    id="password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <div className="form-group col-md-12 mt-3">
                  <input
                    role="submit-button"
                    id="submit"
                    type="submit"
                    className={ownerColor}
                    value={owner}
                    onChange={handleOwnerChange}
                  />
                </div>
                <div className="form-group col-md-12 mt-3">
                  <label
                    htmlFor="inputButton"
                    className="col-md-12 text-center"
                  >
                    Not a member? Click here to register
                  </label>
                  <input
                    type="button"
                    className="form-control btn btn-secondary"
                    id="inputButton"
                    value="Signup"
                    onClick={navigateToSignup}
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
    </div>
  );
};

export default LoginForm;
