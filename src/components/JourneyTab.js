import React from 'react';

const JourneyTab = () => {
  const timelineItems = [
    {
      year: "future",
      icon: "🚀",
      title: "What's Next?",
      period: "Future",
      description: "WACV 2026 paper submission in progress. Excited to see where this AI research journey takes me next!",
      className: "future"
    },
    {
      year: "2024-present",
      icon: "🤖",
      title: "AI Research at Fast Code AI",
      period: "Oct 2024 - Present",
      description: "Currently pushing boundaries in diffusion models, text-to-motion generation, and virtual try-on applications under Prof. Arjun Jain."
    },
    {
      year: "2024",
      icon: "📝",
      title: "Best Paper Award",
      period: "2024",
      description: "Won Best Paper Award at IEEE Applied Sensing Conference for my work in my B.Tech project on IoT-based crop disease management research."
    },
    {
      year: "2023-2024",
      icon: "⚡",
      title: "Application Engineer at TI",
      period: "Aug 2023 - Oct 2024",
      description: "Joined the DLP team, mastering embedded systems and customer solutions. Every bug fixed was a lesson learned."
    },
    {
      year: "2023",
      icon: "🎓",
      title: "IIT Bombay Graduate",
      period: "2023",
      description: "Graduated with 9.23 CGPA and minors in AI & Data Science + Computer Science. Ready to make an impact!"
    },
    {
      year: "2022",
      icon: "💼",
      title: "First Industry Experience",
      period: "Summer 2022",
      description: "Embedded Software Intern at Texas Instruments - dove deep into bootloader code and automation, discovering my love for problem-solving."
    },
    {
      year: "2019",
      icon: "🎯",
      title: "JEE Success & IIT Bombay",
      period: "2019",
      description: "Secured AIR 206 in JEE Advanced and joined IIT Bombay for B.Tech in Electrical Engineering. The adventure begins!"
    },
    {
      year: "2018",
      icon: "🏆",
      title: "KVPY Fellowship",
      period: "2018",
      description: "Received the prestigious Kishore Vaigyanik Prostahan Yojona Fellowship from IISc, marking the beginning of my scientific journey."
    }
  ];

  const expertiseCards = [
    {
      icon: "🧠",
      title: "AI & Machine Learning",
      description: "Diffusion Models, Computer Vision, Deep Learning"
    },
    {
      icon: "💻",
      title: "Software Engineering",
      description: "Python, C/C++, Embedded Systems"
    },
    {
      icon: "🔬",
      title: "Research & Innovation",
      description: "Publications, Problem Solving, Experimental Design"
    }
  ];

  return (
    <div className="tab-content">
      <section className="section">
        <h2>My Journey</h2>
        <p className="journey-intro">From cracking JEE to researching cutting-edge AI models, here's the story of my professional evolution. Each milestone has shaped who I am today.</p>
      </section>

      <section className="section">
        <div className="timeline">
          {timelineItems.map((item, index) => (
            <div key={index} className={`timeline-item ${item.className || ''}`} data-year={item.year}>
              <div className="timeline-marker">{item.icon}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p className="timeline-year">{item.period}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Core Expertise</h2>
        <div className="expertise-grid">
          {expertiseCards.map((card, index) => (
            <div key={index} className="expertise-card">
              <div className="expertise-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default JourneyTab;
