// src/components/ThemeToggle.jsx
import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-700 rounded hover:bg-gray-600"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '🌙' : '☀️'} {/* Use emojis or icons for the toggle */}
    </button>
  );
};

export default ThemeToggle;
