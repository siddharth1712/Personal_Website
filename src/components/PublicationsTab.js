import React from 'react';

const PublicationsTab = () => {
  const publications = [
    {
      title: "IoT-based Sensing System for Thrips Pest and Disease Management in Onion Crop",
      year: "2024",
      authors: "Susmita Banerjee, Kisan Sarda, Siddharth Khandelwal, Rajbabu Velmurugan et al.",
      venue: "2nd International IEEE Applied Sensing Conference",
      abstract: "Developed an IoT-based monitoring system for early detection and management of thrips pest and diseases in onion crops, improving crop yield and reducing pesticide usage.",
      link: "https://drive.google.com/file/d/1nhNsc6lkVobTDWpA7anf8MoXk81OCzui/view?usp=drive_link",
      award: "🏆 Best Paper Award"
    },
    {
      title: "Lunar Exploration through Chipsats",
      year: "2020",
      authors: "Yuktee Gupta, Siddharth Khandelwal et al.",
      venue: "71st International Astronautical Congress (IAC) - Cyberspace Edition",
      abstract: "Presented research on utilizing chip-scale satellites for cost-effective lunar exploration missions, focusing on miniaturized instrumentation and communication systems.",
      link: "https://drive.google.com/file/d/1qJJNl_PKnnj49-t7nwE8GIQxBLb05euu/view?usp=sharing"
    }
  ];

  return (
    <div className="tab-content">
      <section className="section">
        <h2>Research Publications</h2>
        <p className="section-subtitle">My contributions to academic research in AI and related fields</p>
        
        <div className="publications-grid">
          {publications.map((pub, index) => (
            <div key={index} className="publication-card">
              <div className="publication-header">
                <h3>{pub.title}</h3>
                <span className="publication-year">{pub.year}</span>
              </div>
              <p className="publication-authors">
                {pub.authors.split('Siddharth Khandelwal').map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && <strong>Siddharth Khandelwal</strong>}
                  </span>
                ))}
              </p>
              <p className="publication-venue">{pub.venue}</p>
              <p className="publication-abstract">{pub.abstract}</p>
              <div className="publication-links">
                {pub.award && <span className="award-badge">{pub.award}</span>}
                <a href={pub.link} className="publication-link" target="_blank" rel="noopener noreferrer">Paper</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PublicationsTab;
