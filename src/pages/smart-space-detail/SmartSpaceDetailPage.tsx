import { useRef, useState, useEffect } from "react";
import "./SmartSpaceDetailPage.scss";
import CustomButton from "../../shared/components/custom-button/CustomButton";
import smartSpaceImage from "@/assets/smart-space.jpg";
import ExpandIcon from "@/assets/svgs/maximize.svg?react";
import ArrowLeftIcon from "@/assets/svgs/arrowLeft.svg?react";

/**
 * Single-file page component that matches the screenshot.
 * Replace the image URLs in `images` with your real assets.
 */

const images = Array.from({ length: 12 }, () => smartSpaceImage);

const SmartSpaceDetailPage: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const thumbnailsRef = useRef<HTMLDivElement | null>(null);
  const mainImgRef = useRef<HTMLImageElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    // Scroll the selected thumbnail into view
    const container = thumbnailsRef.current;
    if (!container) return;

    const thumb = container.querySelector<HTMLDivElement>(
      `.thumb[data-idx="${index}"]`
    );
    if (thumb) {
      // center thumbnail in view if possible
      const containerRect = container.getBoundingClientRect();
      const thumbRect = thumb.getBoundingClientRect();
      const offset =
        thumbRect.left -
        containerRect.left -
        containerRect.width / 2 +
        thumbRect.width / 2;
      container.scrollBy({ left: offset, behavior: "smooth" });
    }
  }, [index]);

  useEffect(() => {
    // keyboard support: left / right
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  useEffect(() => {
    const onFullScreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", onFullScreenChange);
    document.addEventListener("webkitfullscreenchange", onFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", onFullScreenChange);
      document.removeEventListener("webkitfullscreenchange", onFullScreenChange);
    };
  }, []);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  const goTo = (i: number) => setIndex(i);

  const handleBack = () => {
    window.history.back();
  };

  const toggleFullscreen = async () => {
    const elem = mainImgRef.current;
    if (!elem) return;
    try {
      if (!isFullscreen) {
        const request =
          elem.requestFullscreen?.bind(elem) ||
          (elem as any).webkitRequestFullscreen?.bind(elem);
        if (request) {
          await request();
          setIsFullscreen(true);
        }
      } else {
        const exit =
          document.exitFullscreen?.bind(document) ||
          (document as any).webkitExitFullscreen?.bind(document);
        if (exit) {
          await exit();
          setIsFullscreen(false);
        }
      }
    } catch (error) {
      console.error("Fullscreen request failed", error);
    }
  };

  return (
    <div className="smart-space-page" role="main">
      <div className="content">
        {/* Left gallery */}
        <section className="gallery" aria-label="Image gallery">
          <div className="viewer">
            <div className="image-actions">
             <ArrowLeftIcon  onClick={handleBack} />

              <ExpandIcon aria-label={isFullscreen ? "Exit fullscreen" : "Expand image"}
                onClick={toggleFullscreen} />
              
            </div>
            <button
              className="nav left"
              aria-label="Previous image"
              onClick={prev}
            >
                <i className="fa fa-chevron-left"></i>
            </button>

            <div className="image-wrap">
              <img
                ref={mainImgRef}
                src={images[index]}
                alt={`Smart living room ${index + 1}`}
                className="main-image"
                loading="eager"
              />
              <span className="image-overlay" aria-hidden="true" />
            </div>

            <button
              className="nav right"
              aria-label="Next image"
              onClick={next}
            >
               <i className="fa fa-chevron-right"></i>
            </button>
          </div>

          <div
            className="thumbnails"
            ref={thumbnailsRef}
            role="list"
            aria-label="Thumbnails"
          >
            {images.map((src, i) => (
              <div
                key={src}
                data-idx={i}
                role="listitem"
                className={`thumb ${i === index ? "active" : ""}`}
                onClick={() => goTo(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") goTo(i);
                }}
                tabIndex={0}
                aria-label={`View image ${i + 1}`}
              >
                <img src={src} alt={`thumb ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        {/* Right details */}
        <aside className="details" aria-label="Smart space details">
          <h1 className="title">SMART LIVING ROOM</h1>
          <h2 className="subtitle">About Smart Living Room</h2>

          <p className="description">
            After a long day in Lagos traffic, your LiveSmart living room senses
            your arrival—motion-triggered lights glow warmly, no switches
            needed. Say “Hey Google, movie night,” and blinds close, TV and
            sound system power on, and lights dim to 20% for cinematic comfort.
            The smart AC and fan maintain 24°C when occupied, then shift to 28°C
            when empty—cutting cooling costs by 40%—all controlled via the
            LiveSmart App from anywhere: kitchen, traffic, or Abuja.
            
            Designed for Nigerian homes—whether a sleek Ikoyi high-rise or a spacious
            Maitama family lounge—this smart living room isn't just tech. It's
            peace of mind, savings, and effortless style.
          </p>

          <div className="meta">
            <div className="meta-block">
              <strong>Starter package (3-seater space):</strong>
              <div>₦250,000 - ₦450,000</div>
            </div>

            <div className="meta-block">
              <strong>Full 200 sqft upgrade:</strong>
              <div>₦650,000+</div>
            </div>

            <div className="meta-block small">
              <div>Design in 5 minutes | Install in 1 day</div>
              <div>Live smarter forever.</div>
            </div>

            <div className="meta-contact">
              <div>
                <strong>Start now:</strong> livesmart.ng/configurator
              </div>
              <div>
                <strong>Inquiries:</strong> hello@livesmart.ng | +234 01 234
                5678
              </div>
            </div>
          </div>

          <div className="actions">
            <CustomButton bordered>3D Tour</CustomButton>
            <CustomButton bordered>Book an In-person Tour</CustomButton>
            <CustomButton>CUSTOMIZE THIS SMART SPACE</CustomButton>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default SmartSpaceDetailPage;
