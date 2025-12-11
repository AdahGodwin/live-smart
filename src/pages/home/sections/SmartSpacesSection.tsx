import React from "react";
import CustomButton from "../../../shared/components/custom-button/CustomButton";
import ScrollToNextSection from "./ScrollToNextSection";
import smartSpacesBg from "@/assets/smart-space-2.jpg";

const SmartSpacesSection: React.FC = () => {
  return (
    <section
      id="smart-spaces"
      className="home-section smart-spaces-section"
      style={{
        backgroundImage: `linear-gradient(rgba(15,15,15,0.7), rgba(15,15,15,0.7)), url(${smartSpacesBg})`,
      }}
    >
      <div className="section-content">
        <div>
          <h1>SMART SPACES</h1>
          <p>
            Explore our smart spaces made to get you a better living experience
          </p>
        </div>
        <div className="section-actions">
          <CustomButton bordered className="section-btn">
            View all smart spaces
          </CustomButton>
          <CustomButton className="section-btn section-btn--filled">
            Build smart spaces
          </CustomButton>
        </div>
      </div>
      <ScrollToNextSection targetId="services" />
    </section>
  );
};

export default SmartSpacesSection;
