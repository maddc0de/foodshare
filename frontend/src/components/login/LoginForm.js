import React, { useState } from 'react';

const LoginForm = ({ navigate }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className='login-form'>
    <form>
    <input placeholder='Username' id="username" type='text' value={ username }/>
    <input placeholder='Password' id="password" type='password' value={ password }/>
    <input role='submit-button' id='submit' type="submit" value="Submit" />
  </form>
  </div>
  )
}

export default LoginForm;