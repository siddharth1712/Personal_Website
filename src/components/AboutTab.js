import React from 'react';

const AboutTab = () => {
  return (
    <div className="tab-content">
      <section className="section">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>I'm Siddharth, an AI researcher working on conditional diffusion models for computer vision applications. I completed my B.Tech in <a href="https://www.ee.iitb.ac.in/web/index.php">Electrical Engineering</a> from <a href="https://www.iitb.ac.in/">IIT Bombay</a>, along with minors in AI & Data Science and Computer Science Engineering, which sparked my interest in machine learning and computer vision.</p>
            <p>After graduation, I worked at <a href="https://www.ti.com/">Texas Instruments</a> as a Software Applications Engineer, where I contributed to system-level software development and customer-facing solutions. Over time, I realized my deeper interest lay in AI research, particularly in generative models and visual understanding.</p>
            <p>To pursue this direction, I joined <a href="https://fastcode.ai/">Fast Code AI</a> under <a href="https://www.arjunjain.co.in/">Prof. Arjun Jain</a> as an associate researcher. I initially worked on human motion generation using diffusion models and currently focus on building conditional diffusion models for tasks like virtual try-on and human shape modification. I'm especially interested in improving the efficiency and applicability of these models for real-world deployment.</p>
          </div>
          
          <div className="about-highlights">
            <div className="highlight-card">
              <h4>🔧 From Hardware to AI</h4>
              <p>Transitioned from embedded systems debugging to computer vision research</p>
            </div>
            <div className="highlight-card">
              <h4>🎯 Research Focus</h4>
              <p>Diffusion models, text-to-motion generation, virtual try-on applications</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutTab;
