import React, { useState, useEffect } from 'react';
import './App.css';
import Projects from './components/Projects';
import Journey from './components/Journey';

function App() {
  const [theme, setTheme] = useState('light');
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const publications = [
    {
      title: "Odo: Depth-Guided Diffusion for Identity-Preserving Body Reshaping",
      year: "2026",
      authors: "Siddharth Khandelwal et al.",
      venue: "Winter Conference on Applications of Computer Vision (WACV) - Under Review",
      link: "https://arxiv.org/abs/2508.13065",
      status: "📝 Under Review",
      image: "/odo.png"
    },
    {
      title: "IoT-based Sensing System for Thrips Pest and Disease Management in Onion Crop",
      year: "2024",
      authors: "Susmita Banerjee, Kisan Sarda, Siddharth Khandelwal, Rajbabu Velmurugan et al.",
      venue: "2nd International IEEE Applied Sensing Conference",
      link: "https://drive.google.com/file/d/1nhNsc6lkVobTDWpA7anf8MoXk81OCzui/view?usp=drive_link",
      award: "🏆 Best Paper Award"
    },
    {
      title: "Lunar Exploration through Chipsats",
      year: "2020",
      authors: "Yuktee Gupta, Siddharth Khandelwal et al.",
      venue: "71st International Astronautical Congress (IAC) - Cyberspace Edition",
      link: "https://drive.google.com/file/d/1qJJNl_PKnnj49-t7nwE8GIQxBLb05euu/view?usp=sharing"
    }
  ];

  if (currentPage === 'projects') {
    return (
      <div className="App">
        {/* Theme Toggle */}
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        
        {/* Navigation */}
        <nav className="navigation">
          <div className="nav-container">
            <button onClick={() => setCurrentPage('home')} className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}>Home</button>
            <button onClick={() => setCurrentPage('projects')} className={`nav-link ${currentPage === 'projects' ? 'active' : ''}`}>Projects</button>
            <button onClick={() => setCurrentPage('journey')} className={`nav-link ${currentPage === 'journey' ? 'active' : ''}`}>Journey</button>
          </div>
        </nav>
        
        <Projects />
      </div>
    );
  }

  if (currentPage === 'journey') {
    return (
      <div className="App">
        {/* Theme Toggle */}
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        
        {/* Navigation */}
        <nav className="navigation">
          <div className="nav-container">
            <button onClick={() => setCurrentPage('home')} className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}>Home</button>
            <button onClick={() => setCurrentPage('projects')} className={`nav-link ${currentPage === 'projects' ? 'active' : ''}`}>Projects</button>
            <button onClick={() => setCurrentPage('journey')} className={`nav-link ${currentPage === 'journey' ? 'active' : ''}`}>Journey</button>
          </div>
        </nav>
        
        <Journey />
      </div>
    );
  }

  return (
    <div className="App">
      {/* Theme Toggle */}
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
      
      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-container">
          <button onClick={() => setCurrentPage('home')} className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}>Home</button>
          <button onClick={() => setCurrentPage('projects')} className={`nav-link ${currentPage === 'projects' ? 'active' : ''}`}>Projects</button>
          <button onClick={() => setCurrentPage('journey')} className={`nav-link ${currentPage === 'journey' ? 'active' : ''}`}>Journey</button>
        </div>
      </nav>
      
      <div className="container">
        {/* About Section */}
        <section className="about-section">
          <div className="about-content">
            <div className="about-text">
              <h1>Siddharth Khandelwal</h1>
              <p className="subtitle">AI Researcher</p>
              <div className="contact-info">
                <span>📍 Bangalore, India</span>
                <span>📧 <a href="mailto:siddharth.khandelwal2001@gmail.com">siddharth.khandelwal2001@gmail.com</a></span>
                <span>🔗 <a href="https://www.linkedin.com/in/siddharth-khandelwal-711370193/" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
                <span>💻 <a href="https://github.com/siddharth1712" target="_blank" rel="noopener noreferrer">GitHub</a></span>
                <span>📄 <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></span>
              </div>
              <div className="about-description">
                <p>I'm Siddharth, an AI researcher working on conditional diffusion models for computer vision applications. I completed my B.Tech in <a href="https://www.ee.iitb.ac.in/web/index.php">Electrical Engineering</a> from <a href="https://www.iitb.ac.in/">IIT Bombay</a>, along with minors in AI & Data Science and Computer Science Engineering, which sparked my interest in machine learning and computer vision.</p>
                <p>As an AI researcher I have worked on human motion generation using diffusion models and currently focus on building conditional diffusion models for tasks like virtual try-on and human shape modification. My broader research interests include vision-language models, generative AI, 3D computer vision and exploring their real-world deployment and applicability.</p>
              </div>
            </div>
            <div className="profile-image">
              <img src="/ProfilePic.jpeg" alt="Siddharth Khandelwal" />
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section className="publications-section">
          <h2>Publications</h2>
          <div className="publications-list">
            {publications.map((pub, index) => (
              <div key={index} className={`publication-item ${pub.image ? 'with-image' : ''}`}>
                <div className="publication-content">
                  <h3>{pub.title}</h3>
                  <p className="publication-authors">{pub.authors}</p>
                  <p className="publication-venue">{pub.venue} ({pub.year})</p>
                  <div className="publication-links">
                    {pub.award && <span className="award-badge">{pub.award}</span>}
                    {pub.status && <span className="status-badge">{pub.status}</span>}
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">
                      {pub.link.includes('arxiv') ? 'View on arXiv' : 'View Paper'}
                    </a>
                  </div>
                </div>
                {pub.image && (
                  <div className="publication-image">
                    <img src={pub.image} alt={pub.title} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
