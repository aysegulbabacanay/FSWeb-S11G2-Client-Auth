import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "./axiosWithAuth";

const Login = () => {
  const [credentials, setCredentials] = useState({ 
    username: "TechinTech", 
    password: "r2D2" 
});
  let history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();

    axiosWithAuth()
      .post('api/login', credentials)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token);
        history.push('/friends');
      })
      .catch(err => console.log(err.response.data.error))
  }

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">USERNAME</label>
        <input
          type="text"
          id="username"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <label htmlFor="password">PASSWORD</label>
        <input
          type="text"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>SUBMIT</button>
      </form>
    </div>
  )
}

export default Login;