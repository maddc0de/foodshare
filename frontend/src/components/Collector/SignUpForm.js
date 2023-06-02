import React, { useState } from 'react';

const SignUpForm = ({ navigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usertype, setUserType] = useState('Rescuer');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('usertype', usertype);
    

    fetch('/users', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.status === 201) {
          navigate('/login');
        } else {
          navigate('/signup');
        }
      })
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // const handleUserTypeChange = (event) => {
  //   setUserType(event.target.value);
  // };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // const login = () => {
  //   navigate('/login');
  // };

  return (
    <div className='signup-form'>
      <div className='title-container'>
        <h1 className='signup-title'>Foodshare</h1>
      </div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
          <input placeholder="Name" id="name" type='text' value={ name } onChange={handleNameChange} /> <br />
        <br></br>
        
        <label htmlFor="email">Email address: </label>
          <input placeholder="Email" id="email" type='text' value={ email } onChange={handleEmailChange} /> <br />
        <br></br>

        <label htmlFor="password">Password: </label> 
          <input placeholder="Password" id="password" type="password" value={ password } onChange={handlePasswordChange} /> <br />
          <br></br>

        <input id='submit' type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SignUpForm;
