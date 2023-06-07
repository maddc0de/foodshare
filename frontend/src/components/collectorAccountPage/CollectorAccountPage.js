import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CollectorFeed from "../collectorFeed/CollectorFeed";

const CollectorAccount = ({ navigate }) => {
  const { id } = useParams();
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUserType] = useState("Rescuer");
  const [owner, setOwner] = useState("Food Rescuer");

  const handleSubmit = async (event) => {
    event.preventDefault();

    fetch("/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    })
    .then((response) => {
      if (response.status === 201) {
        navigate("/:id/account");
      { else }
        navigate("/id");
      }
    })
    .catch((erros) => {
      console.log(errors);
    });
  };



  const Account = () => {
    return (
      <h1>Account Page</h1>
    );
  };

  return (
    <div>
      <h1>Collector Account</h1>
      <Account />
    </div>
  );

};

export default CollectorAccount;