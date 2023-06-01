import React, { useState } from 'react';


const SignUpForm = ({ navigate }) => {

  const [name, SetUserName] = useState("");
  const [email, SetEmail] = useState("");
  const [description, SetDescription] = useState("");
  const [location, SetUserLocation] = useState("");
  const [Username, SetUserUsername] = useState("");
  const [password, SetUserPassword] = useState("");
// const [picture, SetUserPicture] = useState("");

  const handleSubmit = async (event) => { 
    event.preventDefault();

  }


}



export default SignUpForm;