import React, { useState, useEffect } from "react";
import hero1 from "../assets/images/hero-1.svg";
import hero2 from "../assets/images/hero-2.svg";
import hero3 from "../assets/images/hero-3.svg";
import hero4 from "../assets/images/hero-4.svg";
import hero5 from "../assets/images/hero-5.svg";

const HeroCarousel = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const heroImages = [
      { src: hero1, alt: "hero1" },
      { src: hero2, alt: "hero2" },
      { src: hero3, alt: "hero3" },
      { src: hero4, alt: "hero4" },
      { src: hero5, alt: "hero5" }
    ];
    setImages(heroImages);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((hero, index) => (
          <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
            <img src={hero.src} alt={hero.alt} width={700} height={500} className="d-block w-100" />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HeroCarousel;
