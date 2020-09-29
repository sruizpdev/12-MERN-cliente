import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;
  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form-user">
      <div className="container-form shadow-dark">
        <h1>New Session</h1>

        <form onSubmit={onSubmit}>
          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="pasword"
              name="password"
              value={password}
              placeholder="password"
              onChange={onChange}
            />
          </div>
          <div className="form-input">
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Login"
            />
          </div>
        </form>
        <Link to={'/new-account'} className="link-account">
          Get account
        </Link>
      </div>
    </div>
  );
};

export default Login;
