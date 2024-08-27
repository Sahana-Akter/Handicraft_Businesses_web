// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BusinessPage from './pages/BusinessPage';
import LoginPage from './pages/LoginPage';
//import ProfilePage from './pages/ProfilePage';
//import UserProvider from './contexts/UserContext';
import RegisterPage from './pages/RegisterPage';
import BlogPage from './pages/BlogPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  console.log(apiUrl);

  return (
    <Router>
      <div>
        <Navbar />
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/business/:id" element={<BusinessPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
