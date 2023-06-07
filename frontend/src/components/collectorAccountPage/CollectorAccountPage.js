import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CollectorFeed from "../collectorFeed/CollectorFeed";

const CollectorAccount = ({ navigate }) => {
  const { id } = useParams();
  const [token, setToken] = useState(window.localStorage.getItem("token"));





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