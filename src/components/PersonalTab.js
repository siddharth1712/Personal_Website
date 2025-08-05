import React, { useState } from 'react';

const PersonalTab = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [expandedDestination, setExpandedDestination] = useState(null);

  const movies = [
    {
      title: "Interstellar",
      image: "/images/movies/interstellar.jpg",
      quote: "Do not go gentle into that good night, Old age should burn and rave at close of day; Rage, rage against the dying of the light."
    },
    {
      title: "The Batman",
      image: "/images/movies/batman.jpg",
      quote: "Our scars can destroy us, even after the physical wounds have healed. But if we survive them, they can transform us."
    },
    {
      title: "Rush",
      image: "/images/movies/rush.jpg",
      quote: "A wise man can learn more from his enemies than a fool from his friends."
    }
  ];

  const destinations = [
    {
      name: "Spiti Valley",
      location: "Himachal Pradesh, India",
      description: "A mesmerizing high-altitude desert in the Himalayas",
      images: [
        "/images/trips/Spiti/IMG_20230617_181010.jpg",
        "/images/trips/Spiti/IMG_20230618_174106.jpg",
        "/images/trips/Spiti/IMG_3985.jpg",
        "/images/trips/Spiti/IMG_5448.JPG",
        "/images/trips/Spiti/IMG_5482.JPG"
      ]
    },
    {
      name: "Vietnam",
      location: "Southeast Asia",
      description: "An incredible journey through vibrant culture and stunning landscapes",
      images: [
        "/images/trips/Vietnam/IMG_7131.jpg",
        "/images/trips/Vietnam/IMG_7716.jpg",
        "/images/trips/Vietnam/IMG_7934.jpg",
        "/images/trips/Vietnam/IMG_9277.jpg",
        "/images/trips/Vietnam/IMG_9416.jpg",
        "/images/trips/Vietnam/IMG_9672.jpg"
      ]
    },
    {
      name: "Goa",
      location: "India",
      description: "Beautiful beaches and Portuguese heritage",
      images: [
        "/images/trips/Goa/IMG_3010.JPG",
        "/images/trips/Goa/P1203169.JPG"
      ]
    },
    {
      name: "Kodaikanal",
      location: "Tamil Nadu, India",
      description: "The Princess of Hill Stations with misty mountains",
      images: [
        "/images/trips/Kodikanal/IMG_1326.jpg",
        "/images/trips/Kodikanal/IMG_4627.jpg"
      ]
    }
  ];

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const toggleDestination = (index) => {
    setExpandedDestination(expandedDestination === index ? null : index);
  };

  return (
    <div className="tab-content">
      <section className="section">
        <h2>Beyond Work</h2>
        <p className="section-subtitle">When I'm not diving deep into AI research, here's what keeps me inspired</p>
        
        {/* Movies Section */}
        <div className="movies-section">
          <h3>Cinematic Inspirations</h3>
          <p className="movies-intro">Movies that have shaped my perspective and continue to inspire me</p>
          <div className="movies-showcase">
            {movies.map((movie, index) => (
              <div key={index} className="movie-poster" onClick={() => openModal(movie.image)}>
                <img src={movie.image} alt={movie.title} />
                <div className="movie-overlay">
                  <h3>{movie.title}</h3>
                  <p className="movie-quote">"{movie.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Section */}
        <div className="travel-section">
          <h3>Travel Adventures</h3>
          <p className="section-subtitle">Exploring the world, one destination at a time</p>
          
          <div className="travel-grid">
            {destinations.map((destination, index) => (
              <div key={index} className="destination">
                <div 
                  className="destination-header"
                  onClick={() => toggleDestination(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <h3>
                    {destination.name}
                    <span>({destination.location})</span>
                    <span className="expand-icon">
                      {expandedDestination === index ? ' ▼' : ' ▶'}
                    </span>
                  </h3>
                  <p>{destination.description}</p>
                </div>
                
                {expandedDestination === index && (
                  <div className="photo-grid expanded-photos">
                    {destination.images.map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={image}
                        alt={`${destination.name} ${imgIndex + 1}`}
                        onClick={() => openModal(image)}
                        style={{ cursor: 'pointer' }}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="philosophy-section">
          <h3>My Philosophy</h3>
          <blockquote>
            "Life is about collecting experiences, not things. Whether it's through the lens of cinema or the adventures of travel, every story adds depth to who we are and how we see the world."
          </blockquote>
        </div>
        
        {/* Contact Section */}
        <div className="contact-section">
          <h3>Let's Connect!</h3>
          <p>I'm always excited to discuss AI research, share travel stories, recommend movies, or collaborate on interesting projects. Feel free to reach out!</p>
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
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close-modal" onClick={closeModal}>&times;</span>
          <img className="modal-content" src={selectedImage} alt="Enlarged view" />
        </div>
      )}
    </div>
  );
};

export default PersonalTab;
