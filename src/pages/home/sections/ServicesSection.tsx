import React from "react";
import CustomButton from "../../../shared/components/custom-button/CustomButton";
import ScrollToNextSection from "./ScrollToNextSection";
import servicesBg from "@/assets/service-image-background.jpg";

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="home-section services-section"
      style={{
        backgroundImage: `linear-gradient(rgba(16,16,16,0.6), rgba(16,16,16,0.7)), url(${servicesBg})`,
      }}
    >
      <div className="section-content">
        <div>
          <h1>Services</h1>
          <p>Experience our excellent sales and after-sales services</p>
        </div>
        <CustomButton className="section-btn section-btn--filled">
          Learn more
        </CustomButton>
      </div>
      <ScrollToNextSection targetId="inquiries" />
    </section>
  );
};

export default ServicesSection;
