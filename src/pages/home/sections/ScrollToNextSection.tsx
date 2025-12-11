import DoubleArrowDown from "@/assets/svgs/doubleArrowDown.svg?react";
interface ScrollToNextSectionProps {
  targetId: string;
}

const ScrollToNextSection: React.FC<ScrollToNextSectionProps> = ({
  targetId,
}) => {
  const handleScroll = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      className="next-section"
      
    >
      <DoubleArrowDown onClick={handleScroll}
      aria-label={`Scroll to ${targetId}`} />
    </button>
  );
};

export default ScrollToNextSection;
