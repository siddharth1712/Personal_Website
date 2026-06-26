import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
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
      venue: "Winter Conference on Applications of Computer Vision (WACV)",
      link: "https://arxiv.org/abs/2508.13065",
      website: "https://research.fastcode.ai/odo",
      status: "🎤 Oral Accepted (Top 5% of submissions)",
      image: "/odo.png",
      video: "/Odo_demo_video.mov"
    },
    {
      title: "IoT-based Sensing System for Thrips Pest and Disease Management in Onion Crop",
      year: "2024",
      authors: "Susmita Banerjee, Kisan Sarda, Siddharth Khandelwal, Rajbabu Velmurugan et al.",
      venue: "2nd International IEEE Applied Sensing Conference",
      link: "https://ieeexplore.ieee.org/document/10466190",
      award: "🏆 Best Paper Award"
    },
    {
      title: "Lunar Exploration through Chipsats",
      year: "2020",
      authors: "Yuktee Gupta, Siddharth Khandelwal et al.",
      venue: "71st International Astronautical Congress (IAC) - Cyberspace Edition",
      link: "https://dl.iafastro.directory/event/IAC-2020/paper/59667/"
    }
  ];

  return (
    <div className="App">
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      <div className="container">
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
                <p>I'm Siddharth, an AI researcher working on conditional diffusion models for computer vision and speech-to-speech models. I completed my B.Tech in <a href="https://www.ee.iitb.ac.in/web/index.php">Electrical Engineering</a> from <a href="https://www.iitb.ac.in/">IIT Bombay</a>, along with minors in AI & Data Science and Computer Science Engineering, which sparked my interest in machine learning and computer vision.</p>
                <p>After graduating, I worked at Texas Instruments as a Software Application Engineer for a year before transitioning to AI research. I joined <a href="https://www.fastcode.ai/" target="_blank" rel="noopener noreferrer">Fast Code AI</a> as an Associate Researcher under <a href="https://www.arjunjain.co.in/" target="_blank" rel="noopener noreferrer">Prof. Arjun Jain</a>, where I worked on text-to-motion synthesis, virtual try-on applications, and eventually Odo — my main publication accepted as an Oral at WACV 2026.</p>
                <p>I was subsequently promoted to Research Scientist at Fast Code AI, and for the past 10 months I have been working on speech-to-speech models. My broader research interests include vision-language models, generative AI, 3D computer vision, and exploring their real-world deployment and applicability.</p>
              </div>
            </div>
            <div className="profile-image">
              <img src="/ProfilePic.jpeg" alt="Siddharth Khandelwal" />
            </div>
          </div>
        </section>

        <section className="news-section">
          <h2>News</h2>
          <ul className="news-list">
            <li>
              <span className="news-date">Nov 2025</span>
              <span className="news-content">
                <strong>Odo</strong> accepted as an <strong>Oral</strong> presentation at <strong>WACV 2026</strong> (top 5% of submissions).
              </span>
            </li>
            <li>
              <span className="news-date">Aug 2025</span>
              <span className="news-content">
                Promoted to <strong>Research Scientist</strong> at <a href="https://www.fastcode.ai/" target="_blank" rel="noopener noreferrer">Fast Code AI</a>; began work on speech-to-speech models.
              </span>
            </li>
            <li>
              <span className="news-date">Oct 2024</span>
              <span className="news-content">
                Joined <a href="https://www.fastcode.ai/" target="_blank" rel="noopener noreferrer">Fast Code AI</a> as an Associate Researcher under <a href="https://www.arjunjain.co.in/" target="_blank" rel="noopener noreferrer">Prof. Arjun Jain</a>.
              </span>
            </li>
            <li>
              <span className="news-date">Jan 2024</span>
              <span className="news-content">
                Best Paper Award at the 2nd International IEEE Applied Sensing Conference for our IoT-based crop sensing system.
              </span>
            </li>
            <li>
              <span className="news-date">Aug 2023</span>
              <span className="news-content">
                Joined Texas Instruments as a Software Application Engineer.
              </span>
            </li>
            <li>
              <span className="news-date">2023</span>
              <span className="news-content">
                Graduated from <a href="https://www.iitb.ac.in/" target="_blank" rel="noopener noreferrer">IIT Bombay</a> with a B.Tech in Electrical Engineering and minors in AI &amp; Data Science and Computer Science.
              </span>
            </li>
          </ul>
        </section>

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
                      {pub.link.includes('arxiv') ? 'arXiv' : 'Paper'}
                    </a>
                    {pub.website && (
                      <a href={pub.website} target="_blank" rel="noopener noreferrer">
                        Project Page
                      </a>
                    )}
                  </div>
                </div>
                {(pub.video || pub.image) && (
                  <div className="publication-image">
                    {pub.video ? (
                      <video
                        src={pub.video}
                        poster={pub.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        aria-label={pub.title}
                      />
                    ) : (
                      <img src={pub.image} alt={pub.title} />
                    )}
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
