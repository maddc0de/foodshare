import React, { useState } from 'react';

const LoginForm = ({ navigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const HERO = 'Hero'; // all caps means its a constant - value that doesnt change
  const RESCUER = 'Rescuer';

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch('/tokens', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password })
    })

    if (response.status !== 201) {
      console.log("oops")
      navigate('/login')
    } else {
      console.log("yay")
      let data = await response.json()
      window.localStorage.setItem("token", data.token)
      if (data.usertype === HERO) {
        console.log(HERO)
        // navigate('/foodhero')
      } else {
        console.log(RESCUER)
        // navigate('/foodrescuer');
      }
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }
    return (
      <div className='login-form'>
        <form  onSubmit={handleSubmit}>
          <input placeholder='Email' id="email" type='text' value={email} onChange={handleEmailChange} />
          <input placeholder='Password' id="password" type='password' value={password} onChange={handlePasswordChange} />
          <input role='submit-button' id='submit' type="submit" value="Submit"/>
        </form>
      </div>
    )
  }

  export default LoginForm;