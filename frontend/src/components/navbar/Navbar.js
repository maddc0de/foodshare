import React, { useState, useEffect, render } from "react";

const Navbar = ({ owner, navigate }) => {
  const [checked, setChecked] = useState("");
  const changeOwner = () => {
    let newOwner;
    if (owner === "Food Rescuer") {
      newOwner = "donator";
    } else {
      newOwner = "collector";
    }
    let path = window.location.href.split("#")[0].split("/");
    path.pop();
    path.push(newOwner);
    window.location.href = path.join("/");
  };

  const logout = () => {
    navigate('/login/donator')
  }

  useEffect(() => {
    if (owner !== "Food Rescuer") {
      setChecked("checked");
    }
  }, []);

  const ownerIsPresent = () => {
    return (
      <div className="navbar-nav ms-auto me-5">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={changeOwner}
            checked={checked}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {owner}
          </label>
        </div>
      </div>
    );
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
        style={{ boxShadow: "0 0.125rem 0.125rem 0 rgba(0, 0, 0, .3" }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand ms-5" href="#">
            <img
              src={require("./logo.svg").default}
              style={{ height: "4rem", margin: "-2rem 0 -0.75rem -1rem" }}
            />
          </a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 d-none">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
          {(function () {
            if (owner !== "") {
              return (
                <div className="navbar-nav ms-auto me-5">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      onChange={changeOwner}
                      checked={checked}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    >
                      {owner}
                    </label>
                  </div>
                </div>
              );
            } else {
              return <div className="navbar-nav ms-auto me-5">
                <input type="button" value="Logout" onClick={logout} className="btn btn-secondary"/>
                </div>
            }
          })()}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
