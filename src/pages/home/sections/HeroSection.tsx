import React, { useEffect, useState } from "react";
import CustomButton from "../../../shared/components/custom-button/CustomButton";
import ScrollToNextSection from "./ScrollToNextSection";
import heroImageOne from "@/assets/smart-space.jpg";
import heroImageTwo from "@/assets/smart-kitchen.jpg";
import heroImageThree from "@/assets/smart-bedroom.jpg";

const heroSlides = [
  {
    id: "hero-1",
    title: "Designed for Intelligent Living",
    subtitle:
      "Experience automated comfort, refined security, and instant control over your entire home.",
    background: heroImageOne,
  },
  {
    id: "hero-2",
    title: "Spaces that Think for You",
    subtitle:
      "Every light, every sensor, every scene is choreographed to adapt to the rhythm of your day.",
    background: heroImageTwo,
  },
  {
    id: "hero-3",
    title: "Feel the Future Now",
    subtitle:
      "Move through your home with intuitive automation and cinematic scenes crafted by LiveSmart.",
    background: heroImageThree,
  },
];

const HeroSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((previous) => (previous + 1) % heroSlides.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  const goToPrevSlide = () => {
    setActiveSlide(
      (previous) => (previous - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const goToNextSlide = () => {
    setActiveSlide((previous) => (previous + 1) % heroSlides.length);
  };

  return (
    <section id="hero" className="home-section hero-section">
      <div className="hero-slider">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${
              index === activeSlide
                ? "is-active"
                : index === (activeSlide + 1) % heroSlides.length
                ? "is-next"
                : index ===
                  (activeSlide + heroSlides.length - 1) % heroSlides.length
                ? "is-prev"
                : ""
            } `}
            style={{ backgroundImage: `url(${slide.background})` }}
          />
        ))}
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Design Your Smarter Nigerian Home</h1>
        <p>We ensure your live in a space that is smart and stress free.</p>
        <CustomButton className="hero-cta-btn">Learn More</CustomButton>
      </div>

      <div className="hero-controls">
        <button
          type="button"
          className="hero-arrow hero-arrow-left"
          onClick={goToPrevSlide}
        >
          <i className="fa fa-chevron-left"></i>
        </button>
        <button
          type="button"
          className="hero-arrow hero-arrow-right"
          onClick={goToNextSlide}
        >
          <i className="fa fa-chevron-right"></i>
        </button>
      </div>
      <div className="hero-dots">
        {heroSlides.map((_, index) => (
          <button
            key={`dot-${index}`}
            type="button"
            className={`hero-dot ${activeSlide === index ? "is-active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <ScrollToNextSection targetId="smart-spaces" />
    </section>
  );
};

export default HeroSection;
