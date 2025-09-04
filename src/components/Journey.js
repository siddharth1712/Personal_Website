import React from 'react';

const Journey = () => {
  const journeyItems = [
    {
      title: "AI Research at Fast Code AI",
      period: "Oct 2024 - Present",
      description: "Currently pushing boundaries in diffusion models, text-to-motion generation, and virtual try-on applications under Prof. Arjun Jain. Working on cutting-edge research with a WACV 2026 paper submission in progress on depth-guided diffusion for identity-preserving body reshaping.",
      category: "research",
      status: "current"
    },
    {
      title: "Best Paper Award",
      period: "2024",
      description: "Won Best Paper Award at IEEE Applied Sensing Conference for IoT-based crop disease management research. This recognition validated the practical impact of applying AI solutions to agricultural challenges.",
      category: "achievement",
      status: "completed"
    },
    {
      title: "Application Engineer at Texas Instruments",
      period: "Aug 2023 - Oct 2024",
      description: "Joined the DLP team, mastering embedded systems and customer solutions. Developed system-level software and gained valuable industry experience in hardware-software integration and customer-facing technical solutions.",
      category: "work",
      status: "completed"
    },
    {
      title: "IIT Bombay Graduate",
      period: "2023",
      description: "Graduated with 9.23 CGPA in Electrical Engineering along with minors in AI & Data Science and Computer Science. This interdisciplinary education provided the perfect foundation for my transition into AI research.",
      category: "education",
      status: "completed"
    },
    {
      title: "First Industry Experience",
      period: "Summer 2022",
      description: "Embedded Software Intern at Texas Instruments where I dove deep into bootloader code and automation. This internship sparked my love for problem-solving and gave me my first taste of professional software development.",
      category: "work",
      status: "completed"
    },
    {
      title: "JEE Success & IIT Bombay",
      period: "2019",
      description: "Secured AIR 206 in JEE Advanced and joined IIT Bombay for B.Tech in Electrical Engineering. This achievement opened doors to world-class education and research opportunities that shaped my technical foundation.",
      category: "education",
      status: "completed"
    },
    {
      title: "KVPY Fellowship",
      period: "2018",
      description: "Received the prestigious Kishore Vaigyanik Prostahan Yojona Fellowship from IISc, marking the beginning of my scientific journey. This early recognition of research potential set the stage for my academic pursuits.",
      category: "achievement",
      status: "completed"
    }
  ];

  return (
    <div className="journey-page">
      <div className="container">
        <header className="journey-header">
          <h1>Professional Journey</h1>
          <p className="journey-subtitle">A timeline of key milestones in my academic and professional career</p>
        </header>

        <div className="timeline">
          {journeyItems.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className={`timeline-icon ${item.category}`}>
                  <div className="icon-dot"></div>
                </div>
              </div>
              <div className="timeline-content">
                <div className={`timeline-card ${item.status}`}>
                  <div className="timeline-header">
                    <h3>{item.title}</h3>
                    <span className="timeline-period">{item.period}</span>
                  </div>
                  <div className="timeline-description">
                    <p>{item.description}</p>
                  </div>
                  <div className={`category-badge ${item.category}`}>
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
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
