import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePictureUrl, setProfilePictureUrl] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/auth/signup', {
        name,
        email,
        password,
        profilePictureUrl,
      });
      setSuccess('Registration successful!');
      // Optionally, redirect to another page
    } catch (err) {
      if (err.response && err.response.data) {
        setError(`Registration failed: ${err.response.data.message || 'Please try again.'}`);
      } else {
        setError('Registration failed. Please check your connection and try again.');
      }
      console.error('Registration error:', err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">Register</h2>
      <form onSubmit={handleRegister}>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-gray-100"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-gray-100"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-gray-100"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Profile Picture URL</label>
          <input
            type="text"
            value={profilePictureUrl}
            onChange={(e) => setProfilePictureUrl(e.target.value)}
            className="w-full px-3 py-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-gray-100"
          />
        </div>
       
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-500 dark:bg-green-700 dark:hover:bg-green-600">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
