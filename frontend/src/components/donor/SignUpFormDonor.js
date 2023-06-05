import React, { useState } from 'react';


const SignUpFormDonor = ({ navigate }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [usertype, setUserType] = useState("Hero");
  const [password, setPassword] = useState("");
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
    })

    fetch( '/donators', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
    })
      .then(response => {  
        // come back later, and re-make the route
        if(response.status === 201) {
        navigate('/login')
        // setWelcomeMessage(`Welcome ${email}!`)
      } else {
        navigate('/signupdonor')
      }
    })

}

    const handleNameChange = (event) => {
      setName(event.target.value)
    }
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value)
    }

    const handleDescriptionChange = (event) => {
      setDescription(event.target.value)
    }

    const handleLocationChange = (event) => {
      setLocation(event.target.value)
    }

    const handlePasswordChange = (event) => {
      setPassword(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>{"Welcome Food Heroes!"}</h2>
            <input placeholder="name" id="name" type='text' value={ name } onChange={handleNameChange} />
            <input placeholder="Email" id="email" type='text' value={ email } onChange={handleEmailChange} />
            <input placeholder="description" id="description" type='text' value={ description } onChange={handleDescriptionChange} />
            <input placeholder="location" id="location" type='text' value={ location } onChange={handleLocationChange} />
            <input placeholder="password" id="password" type='text' value={ password } onChange={handlePasswordChange} />
          <input id='submit' type="submit" value="Submit" />
        </form>
      );
    
}

export default SignUpFormDonor;