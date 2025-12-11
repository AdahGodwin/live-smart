import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import HeroSection from "./sections/HeroSection";
import SmartSpacesSection from "./sections/SmartSpacesSection";
import ServicesSection from "./sections/ServicesSection";
import InquiriesSection from "./sections/InquiriesSection";
import SectionIndicator from "./sections/SectionIndicator";

const sections = ["hero", "smart-spaces", "services", "inquiries"];

const HomePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const index = Math.min(
        sections.length - 1,
        Math.max(0, Math.round(window.scrollY / window.innerHeight))
      );
      setActiveSection(index);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-page">
      <SectionIndicator sections={sections} activeIndex={activeSection} />
      <HeroSection />
      <SmartSpacesSection />
      <ServicesSection />
      <InquiriesSection />
    </div>
  );
};

export default HomePage;
