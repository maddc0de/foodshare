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

  useEffect(() => {
    if(token) {
      fetch(`/donations/${id}`, {
        headers: {
          'authorization': `Bearer ${token}`
        }
      })
    }
  })

  fetch(`/users/account/${id}`)
    .then(response => response.json())
    .then(async dataAccount => {
      setName(dataAccount.name);
      setEmail(dataAccount.email);
      setPassword(dataAccount.password);
      setUserType(dataAccount.usertype);
}, [])
      



  // const Account = () => {
  //   return (
  //     <h1>Account Page</h1>
  //   );
  // };

  if (token) {
    return (
    <div>
      <h1>Food Rescuer</h1>
      <p>Name:{name} </p>
      <p>Email:{email} </p>
      <p>Password:{password} </p>
    </div>
  );
  }

  

};

export default CollectorAccount;