import React, { useState } from 'react';
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
  return (
    <div className="form-user">
      <div className="container-form shadow-dark">
        <h1>New Session</h1>

        <form>
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
      </div>
    </div>
  );
};

export default Login;
