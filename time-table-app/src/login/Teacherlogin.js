import React,{useState} from 'react';
import './Teacherlogin.css';
import { NavLink } from 'react-router-dom';
const Teacherlogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here, e.g., making an API call
    console.log('Username:', username);
    console.log('Password:', password);
  };
  return (
    <div className="login-page">
    <div className="login-container">
      <h2>Teacher Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit"><NavLink to="/teacherdashboard"> Login</NavLink> </button>
      </form>
      <p>
          Haven't signed in yet ? <NavLink to="/teachersignup">Signup</NavLink>
        </p>
    </div>
  </div>
  )
}

export default Teacherlogin