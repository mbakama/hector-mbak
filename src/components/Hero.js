import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Bonjour, je suis Hector Mbakama",
      subtitle: "Développeur Full Stack & Résolveur de Problèmes Créatif",
      description: "Passionné par la création d'expériences web exceptionnelles"
    },
    {
      title: "Innovation & Créativité",
      subtitle: "Transformant les idées en réalité digitale",
      description: "Spécialisé dans Angular, React, Laravel et les technologies modernes"
    },
    {
      title: "Collaboration & Excellence",
      subtitle: "Construisant l'avenir du web ensemble",
      description: "Toujours prêt pour de nouveaux défis et projets passionnants"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-carousel">
        <div className="carousel-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="hero-content">
                <h1>{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <p className="hero-description">{slide.description}</p>
                <a href="#about" className="cta-button">En savoir plus sur moi</a>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-btn prev-btn" onClick={prevSlide}>
          &#8249;
        </button>
        <button className="carousel-btn next-btn" onClick={nextSlide}>
          &#8250;
        </button>

        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;