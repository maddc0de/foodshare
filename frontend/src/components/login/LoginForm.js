import React, { useState } from 'react';

const LoginForm = ({ navigate }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className='login-form'>
    <form>
    <input placeholder='Email' id="email" type='text' value={ email }/>
    <input placeholder='Password' id="password" type='password' value={ password }/>
    <input role='submit-button' id='submit' type="submit" value="Submit" />
  </form>
  </div>
  )
}

export default LoginForm;