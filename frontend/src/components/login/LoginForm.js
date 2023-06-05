import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = ({ navigate }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const HERO = 'Hero';
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
        navigate(`/foodhero/${data.id}`)
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
      <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            id="email"
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="email" className={email ? 'input-label active' : 'input-label'}>
            Email
          </label>
        </div>
        <div className="input-container">
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <label htmlFor="password" className={password ? 'input-label active' : 'input-label'}>
            Password
          </label>
        </div>
        <input role="submit-button" id="submit" type="submit" value="Submit" />
      </form>
    </div>
    )
  }

  export default LoginForm;