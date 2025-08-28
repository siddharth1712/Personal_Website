import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Few-Shot Plant Disease Classification",
      guide: "Prof. Rajbabu Velmurugan",
      type: "RnD Project",
      period: "2022",
      description: "Developed a few-shot deep learning model using prototypical networks to classify plant diseases from leaf images, achieving 87% accuracy on unseen disease classes. Implemented robust nearest neighbour prototype-based testing for corrupted labels and studied prompt learning techniques with CLIP model optimization, achieving 82% classification accuracy on the Plant Village dataset.",
      tech: "Deep Learning, Prototypical Networks, CLIP, Few-Shot Learning, Computer Vision"
    },
    {
      title: "Onion Crop Disease Detection",
      guide: "Prof. Rajbabu Velmurugan",
      type: "B.Tech Project",
      period: "Feb 2023 – April 2023",
      description: "Analyzed and improved baseline models for onion crop disease detection using data sampling and augmentation techniques, achieving 92.4% detection accuracy. Deployed the models into a mobile application using Android Studio and PyTorch Mobile for real-time image classification and disease identification.",
      tech: "Computer Vision, PyTorch Mobile, Android Studio, Data Augmentation, Mobile Development"
    },
    {
      title: "IIT Bombay Student Satellite Program",
      guide: "Instrumentation Subsystem | GLEE - Great Lunar Expedition for Everyone System",
      type: "Space Technology Project",
      period: "2020",
      description: "Contributed to a 70-member student team developing space technology for lunar surface research with Chipsats as part of the global GLEE mission. Implemented I2C communication protocol between gyroscope sensors and Arduino UNO, and simulated lunar seismic models using Python and Devito to visualize stress patterns through finite difference wave propagation methods.",
      tech: "Embedded Systems, I2C Protocol, Arduino, Python, Devito, Finite Difference Method, Space Technology"
    },
    {
      title: "Cancer Detection using CNNs",
      guide: "Prof. Suyash Awate",
      type: "CS 736 (Medical Image Computing) Course Project",
      period: "Nov 2021",
      description: "Developed a deep learning model to identify metastatic tissue in histopathologic scans of lymph node sections, achieving 94% accuracy and 0.97 AUC-ROC score. Implemented VGG and custom CNNs using Keras and TensorFlow, along with image denoising, segmentation, and statistical shape analysis algorithms for comprehensive medical image analysis.",
      tech: "CNNs, VGG, Keras, TensorFlow, Medical Imaging, Image Segmentation, Statistical Analysis"
    }
  ];

  return (
    <div className="projects-page">
      <div className="container">
        <header className="projects-header">
          <h1>My Projects</h1>
          <p className="projects-subtitle">A comprehensive overview of my research and development work</p>
        </header>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-detail-card">
              <div className="project-header">
                <h2>{project.title}</h2>
                <div className="project-meta">
                  <span className="project-guide">Guide: {project.guide}</span>
                  <span className="project-type">{project.type}</span>
                  <span className="project-period">{project.period}</span>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
                
                <div className="project-technologies">
                  <strong>Technologies:</strong> {project.tech}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
