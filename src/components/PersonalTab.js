import React from 'react';

const PersonalTab = () => {
  return (
    <div className="tab-content">
      <section className="section">
        <h2>Beyond Work</h2>
        <p className="section-subtitle">When I'm not diving deep into AI research, here's what keeps me inspired</p>
        
        <div className="personal-content">
          <div className="personal-grid">
            <div className="personal-card">
              <div className="personal-icon">🎸</div>
              <h3>Music & Creativity</h3>
              <p>I love playing guitar and exploring different music genres. Music helps me think creatively and often inspires new approaches to research problems.</p>
            </div>
            
            <div className="personal-card">
              <div className="personal-icon">📚</div>
              <h3>Continuous Learning</h3>
              <p>Always curious about new technologies, I enjoy reading research papers, attending conferences, and staying updated with the latest in AI and machine learning.</p>
            </div>
            
            <div className="personal-card">
              <div className="personal-icon">🏃‍♂️</div>
              <h3>Fitness & Mindfulness</h3>
              <p>Regular exercise and meditation help me maintain focus and clarity. I believe a healthy mind and body are essential for productive research.</p>
            </div>
            
            <div className="personal-card">
              <div className="personal-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>Passionate about using technology for environmental good. My IoT research in agriculture reflects my commitment to sustainable solutions.</p>
            </div>
          </div>
          
          <div className="philosophy-section">
            <h3>My Philosophy</h3>
            <blockquote>
              "The best way to predict the future is to create it. Through AI research, I aim to build technologies that not only advance our understanding but also create positive impact in the real world."
            </blockquote>
          </div>
          
          <div className="contact-section">
            <h3>Let's Connect!</h3>
            <p>I'm always excited to discuss AI research, collaborate on interesting projects, or simply chat about technology and its potential. Feel free to reach out!</p>
            <div className="contact-buttons">
              <a href="mailto:siddharth.khandelwal2001@gmail.com" className="contact-btn">
                📧 Email Me
              </a>
              <a href="https://www.linkedin.com/in/siddharth-khandelwal-711370193/" target="_blank" rel="noopener noreferrer" className="contact-btn">
                🔗 LinkedIn
              </a>
              <a href="https://github.com/siddharth1712" target="_blank" rel="noopener noreferrer" className="contact-btn">
                💻 GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalTab;
