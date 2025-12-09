import React, { useState, useRef, useEffect } from "react";
import "./TimeZoneSelector.scss";
import Globe from "@/assets/svgs/globe-zone.svg?react";
interface Props {
  value: string;
  onChange: (zone: string) => void;
}

const timeZones = [
  "Africa/Lagos",
  "Africa/Nairobi",
  "Europe/London",
  "Europe/Berlin",
  "America/New_York",
  "America/Los_Angeles",
  "Asia/Tokyo",
  "Asia/Dubai",
];

const TimeZoneSelector: React.FC<Props> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (zone: string) => {
    onChange(zone);
    setOpen(false);
  };

  return (
    <div className="timezone-row" ref={dropdownRef}>
      <div className="timezone-label">
        <Globe width={16} height={16} />
        <span>Time Zone:</span>
      </div>

      <div className="timezone-dropdown" onClick={() => setOpen(!open)}>
        <span>{value}</span>
        <i className={`arrow fa fa-chevron-down ${open ? "rotate" : ""}`}></i>
      </div>

      {open && (
        <div className="timezone-options">
          {timeZones.map((zone) => (
            <div
              key={zone}
              className={`timezone-option ${zone === value ? "active" : ""}`}
              onClick={() => handleSelect(zone)}
            >
              {zone}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimeZoneSelector;
