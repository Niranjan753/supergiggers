import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (email === 'niranjanr753@gmail.com' && password === '123109sairam') {
      try {
        const token = 'dummy_token_for_demonstration';
        localStorage.setItem('token', token);
        console.log("Token set in localStorage:", token); // Debug log
        alert('User logged in successfully');
        navigate('/');  // Navigate to home page after login
        window.location.reload(); // Force a reload to update the Navbar
      } catch (error) {
        alert('Login failed: ' + (error.response?.data?.message || 'Unknown error'));
      }
    } else {
      alert('Invalid user');
    }
  };

  return (
    <>
    <h2 className='login-text'> Login to access the website.</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
    </>
  );
}

export default Login;