import React from "react";

interface SectionIndicatorProps {
  sections: string[];
  activeIndex: number;
}

const SectionIndicator: React.FC<SectionIndicatorProps> = ({
  sections,
  activeIndex,
}) => (
  <div className="section-indicator">
    {sections.map((section, index) => (
      <span
        key={section}
        className={`indicator-bar ${index === activeIndex ? "is-active" : ""}`}
      />
    ))}
  </div>
);

export default SectionIndicator;
