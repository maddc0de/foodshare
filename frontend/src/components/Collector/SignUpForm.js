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
      });
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-header">
          <p>Please complete the details below to create your account:</p>
        </div>

        <div className="form-group">
          <div className="aligned-credentials">
            <div className="email-box-space">
              <input
                placeholder="Email"
                id="email"
                type="text"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="password-box-space">
              <input
                placeholder="Password"
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="aligned-names">
            <div className="name-box-space">
              <input
                placeholder="Name"
                id="Name"
                type="text"
                value={name} // Changed Name to name
                onChange={handleNameChange}
                required
              />
            </div>
            <div className="user-type-box-space">
              <input
                placeholder="User type"
                id="usertype"
                type="text"
                value={usertype}
                onChange={handleUserTypeChange} // Changed handleuserTypeChange to handleUserTypeChange
                required
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <input id="submit" type="submit" value="Become a Food Rescuer" />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;

