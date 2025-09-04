import React from 'react';

const Journey = () => {
  const journeyItems = [
    {
      title: "AI Research at Fast Code AI",
      period: "Oct 2024 - Present",
      description: "Working on diffusion models and text-to-motion generation under Prof. Arjun Jain. Currently have a WACV 2026 paper under review.",
      category: "research",
      status: "current"
    },
    {
      title: "Best Paper Award",
      period: "2024",
      description: "Won Best Paper Award at IEEE Applied Sensing Conference for IoT-based crop disease management research.",
      category: "achievement",
      status: "completed"
    },
    {
      title: "Application Engineer at Texas Instruments",
      period: "Aug 2023 - Oct 2024",
      description: "Worked on DLP team developing embedded systems and customer solutions. Gained valuable industry experience in hardware-software integration.",
      category: "work",
      status: "completed"
    },
    {
      title: "IIT Bombay Graduate",
      period: "2023",
      description: "Graduated with 9.23 CGPA in Electrical Engineering with minors in AI & Data Science and Computer Science.",
      category: "education",
      status: "completed"
    },
    {
      title: "Embedded Software Intern",
      period: "Summer 2022",
      description: "First industry experience at Texas Instruments working on bootloader code and automation systems.",
      category: "work",
      status: "completed"
    },
    {
      title: "JEE Success & IIT Bombay",
      period: "2019",
      description: "Secured AIR 206 in JEE Advanced and joined IIT Bombay for B.Tech in Electrical Engineering.",
      category: "education",
      status: "completed"
    },
    {
      title: "KVPY Fellowship",
      period: "2018",
      description: "Received prestigious Kishore Vaigyanik Prostahan Yojona Fellowship from IISc, marking the beginning of my scientific journey.",
      category: "achievement",
      status: "completed"
    }
  ];

  return (
    <div className="journey-page">
      <div className="container">
        <header className="journey-header">
          <h1>Professional Journey</h1>
          <p className="journey-subtitle">A chronological timeline of key milestones from 2018 to present</p>
        </header>

        <div className="vertical-timeline">
          {journeyItems.map((item, index) => (
            <div key={index} className={`timeline-item ${item.status}`}>
              <div className="timeline-marker">
                <div className={`timeline-icon ${item.category}`}>
                  <div className="icon-dot"></div>
                </div>
              </div>
              <div className="timeline-content">
                <div className="timeline-card">
                  <div className="timeline-header">
                    <h3>{item.title}</h3>
                    <span className="timeline-period">{item.period}</span>
                    <div className={`category-badge ${item.category}`}>
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </div>
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
