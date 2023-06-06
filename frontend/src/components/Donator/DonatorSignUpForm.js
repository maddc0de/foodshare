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
  // const [picture, SetUserPicture] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestBody = JSON.stringify({
      name: name,
      email: email,
      description: description,
      location: location,
      usertype: usertype,
      password: password,
    });

    fetch("/donators", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
    }).then((response) => {
      // come back later, and re-make the route
      if (response.status === 201) {
        navigate("/login");
        // setWelcomeMessage(`Welcome ${email}!`)
      } else {
        navigate("/signup");
      }
    });
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

  // const handleUsertypeChange = (event) => {
  //   setUsertype(event.target.value)
  // }

  const navigateToLogin = () => {
    <navigate to='/login/donator' />
  }

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
            <form>
              <div className="form-row">
                <div className="form-group col-md-12 mt-1">
                  <label htmlFor="inputName3">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName3"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group col-md-12 mt-1">
                  <label htmlFor="inputEmail4">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group col-md-12 mt-1">
                  <label htmlFor="inputPassword4">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inputAddress">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                  <div className="mt-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                      style={{
                        width: "47.5%",
                        marginRight: "2.5%",
                        display: "inline-block",
                      }}
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Postcode"
                      style={{
                        width: "47.5%",
                        marginLeft: "2.5%",
                        display: "inline-block",
                      }}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="inputDescription">Description</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="inputDescription"
                    placeholder="We are a small Coffee Shop.."
                  ></textarea>
                </div>

                <div className="form-group col-md-12 mt-3">
                  <input
                    type="button"
                    className="form-control btn btn-primary"
                    value="Become a Food Hero"
                  />
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

export default DonatorSignUpForm;
