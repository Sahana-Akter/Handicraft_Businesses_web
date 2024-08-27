import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false); // State to manage theme
  const navigate = useNavigate();

  // Handle email and password login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/auth/login', { email, password });
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
      await axios.post('http://localhost:8080/auth/google-login', {
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
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="max-w-md mx-auto mt-12 p-8 shadow-lg rounded-lg bg-white dark:bg-gray-900">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 dark:bg-blue-800 dark:hover:bg-blue-700">
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-700 dark:text-gray-300">Or login with:</p>
          <button
            onClick={handleGoogleLogin}
            className="bg-red-500 text-white py-2 px-4 rounded mt-2 dark:bg-red-700"
          >
            Google
          </button>
          <button className="bg-gray-900 text-white py-2 px-4 rounded mt-2 ml-2 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500">
          GitHub
          </button>
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-700 dark:text-gray-300">Don't have an account?</p>
          <button
            onClick={handleRegisterRedirect}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-500 mt-2 dark:bg-green-800 dark:hover:bg-green-700"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
