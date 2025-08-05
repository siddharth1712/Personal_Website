import React from 'react';

const ThemeToggle = ({ theme, onToggle }) => {
  return (
    <div className="theme-toggle">
      <button className="theme-btn" onClick={onToggle}>
        <span className="sun-icon">☀️</span>
        <span className="moon-icon">🌙</span>
      </button>
    </div>
  );
};

export default ThemeToggle;
