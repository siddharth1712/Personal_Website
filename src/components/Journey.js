import React from 'react';

const Journey = () => {
  const journeyItems = [
    {
      title: "AI Research at Fast Code AI",
      period: "Oct 2024 - Present",
      description: "Currently pushing boundaries in diffusion models, text-to-motion generation, and virtual try-on applications under Prof. Arjun Jain. Working on cutting-edge research with a WACV 2026 paper submission in progress on depth-guided diffusion for identity-preserving body reshaping.",
      icon: "🤖"
    },
    {
      title: "Best Paper Award",
      period: "2024",
      description: "Won Best Paper Award at IEEE Applied Sensing Conference for IoT-based crop disease management research. This recognition validated the practical impact of applying AI solutions to agricultural challenges.",
      icon: "📝"
    },
    {
      title: "Application Engineer at Texas Instruments",
      period: "Aug 2023 - Oct 2024",
      description: "Joined the DLP team, mastering embedded systems and customer solutions. Developed system-level software and gained valuable industry experience in hardware-software integration and customer-facing technical solutions.",
      icon: "⚡"
    },
    {
      title: "IIT Bombay Graduate",
      period: "2023",
      description: "Graduated with 9.23 CGPA in Electrical Engineering along with minors in AI & Data Science and Computer Science. This interdisciplinary education provided the perfect foundation for my transition into AI research.",
      icon: "🎓"
    },
    {
      title: "First Industry Experience",
      period: "Summer 2022",
      description: "Embedded Software Intern at Texas Instruments where I dove deep into bootloader code and automation. This internship sparked my love for problem-solving and gave me my first taste of professional software development.",
      icon: "💼"
    },
    {
      title: "JEE Success & IIT Bombay",
      period: "2019",
      description: "Secured AIR 206 in JEE Advanced and joined IIT Bombay for B.Tech in Electrical Engineering. This achievement opened doors to world-class education and research opportunities that shaped my technical foundation.",
      icon: "🎯"
    },
    {
      title: "KVPY Fellowship",
      period: "2018",
      description: "Received the prestigious Kishore Vaigyanik Prostahan Yojona Fellowship from IISc, marking the beginning of my scientific journey. This early recognition of research potential set the stage for my academic pursuits.",
      icon: "🏆"
    }
  ];

  return (
    <div className="journey-page">
      <div className="container">
        <header className="journey-header">
          <h1>My Journey</h1>
          <p className="journey-subtitle">From cracking JEE to researching cutting-edge AI models - the story of my professional evolution</p>
        </header>

        <div className="timeline">
          {journeyItems.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-icon">{item.icon}</div>
              </div>
              <div className="timeline-content">
                <div className="timeline-card">
                  <div className="timeline-header">
                    <h3>{item.title}</h3>
                    <span className="timeline-period">{item.period}</span>
                  </div>
                  <div className="timeline-description">
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;
