import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handle email and password login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/login', { email, password });
      // Handle success, e.g., save token and navigate to a protected route
      console.log('Login successful:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
    }
  };

  // Handle Google login via Firebase
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Send user data to backend to store in MongoDB
      await axios.post('http://localhost:5000/auth/google-login', {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      });

      navigate('/');
    } catch (error) {
      console.error('Google Sign-in error:', error);
    }
  };

  // Redirect to registration page
  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500">Login</button>
      </form>
      <div className="text-center mt-4">
        <p className="text-gray-700">Or login with:</p>
        <button onClick={handleGoogleLogin} className="bg-red-500 text-white py-2 px-4 rounded mt-2">Google</button>
      </div>
      <div className="text-center mt-4">
        <p className="text-gray-700">Don't have an account?</p>
        <button
          onClick={handleRegisterRedirect}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-500 mt-2"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
