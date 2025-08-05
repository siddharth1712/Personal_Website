import React from 'react';

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <div className="profile-section">
          <img src="/ProfilePic.jpeg" alt="Siddharth Khandelwal" className="profile-pic" />
          <div className="hero-text">
            <h1>Siddharth Khandelwal</h1>
            <p className="subtitle">Associate AI Researcher</p>
            <div className="contact-info">
              <span>📍 Bangalore, India</span>
              <span>📧 <a href="mailto:siddharth.khandelwal2001@gmail.com">siddharth.khandelwal2001@gmail.com</a></span>
              <span>📱 <a href="tel:+919967675260">+91 9967675260</a></span>
              <span>🔗 <a href="https://www.linkedin.com/in/siddharth-khandelwal-711370193/" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
              <span>💻 <a href="https://github.com/siddharth1712" target="_blank" rel="noopener noreferrer">GitHub</a></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
