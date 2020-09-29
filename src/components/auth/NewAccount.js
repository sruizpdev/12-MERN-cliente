import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewAccount = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });
  const { name, email, password, confirm } = user;
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
        <h1>New Account</h1>

        <form onSubmit={onSubmit}>
          <div className="form-input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="name"
              value={name}
              onChange={onChange}
            />
          </div>
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
            <label htmlFor="confirm">Confirm Password</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              value={confirm}
              placeholder="confirm password"
              onChange={onChange}
            />
          </div>
          <div className="form-input">
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Create user"
            />
          </div>
        </form>
        <Link to={'/'} className="link-account">
          Login
        </Link>
      </div>
    </div>
  );
};

export default NewAccount;
