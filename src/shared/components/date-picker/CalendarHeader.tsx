import { addMonths, format, startOfMonth } from "date-fns";
import { type KeyboardEvent, type MouseEvent, useEffect, useMemo, useRef } from "react";
import "./CalendarHeader.scss";

interface Props {
  month: Date;
  onPrev: () => void;
  onNext: () => void;
  onMonthSelect: (date: Date) => void;
  isDropdownOpen: boolean;
  onToggleDropdown: () => void;
  onCloseDropdown: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
}

const CalendarHeader: React.FC<Props> = ({
  month,
  onPrev,
  onNext,
  onMonthSelect,
  isDropdownOpen,
  onToggleDropdown,
  onCloseDropdown,
  canGoPrev,
  canGoNext,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const monthOptions = useMemo(() => {
    const todayStart = startOfMonth(new Date());
    return Array.from({ length: 12 }, (_, index) => addMonths(todayStart, index));
  }, []);

  const handleMonthSelection = (selectedMonth: Date, event: MouseEvent<HTMLButtonElement>) => {
    onMonthSelect(selectedMonth);
    onCloseDropdown();
    event.stopPropagation();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onToggleDropdown();
    }
  };

  useEffect(() => {
    if (!isDropdownOpen) {
      return;
    }

    const handleClickOutside = (event: globalThis.MouseEvent) => {
      const target = event.target as Node;
      if (containerRef.current && !containerRef.current.contains(target)) {
        onCloseDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen, onCloseDropdown]);

  return (
    <div className="calendar-header" ref={containerRef}>
      <button
        className={`control-button ${!canGoPrev ? "is-disabled" : ""}`}
        onClick={canGoPrev ? onPrev : undefined}
        aria-label="Previous month"
        disabled={!canGoPrev}
      >
        <i className="fa fa-chevron-left" aria-hidden="true"></i>
        <span className="calendar-header__sr-only">Previous month</span>
      </button>

      <div
        className="calendar-header__current-month"
        role="button"
        tabIndex={0}
        onClick={onToggleDropdown}
        onKeyDown={handleKeyDown}
      >
        <span>{format(month, "MMMM yyyy")}</span>
        <span className="calendar-header__icon" aria-hidden="true">
          <i className="fa fa-chevron-down"></i>
        </span>
        {isDropdownOpen && (
          <div className="calendar-header__dropdown">
            {monthOptions.map((monthOption) => {
              const isActive =
                monthOption.getFullYear() === month.getFullYear() &&
                monthOption.getMonth() === month.getMonth();

              return (
                <button
                  key={monthOption.getTime()}
                  type="button"
                  className={`calendar-header__dropdown-item ${isActive ? "is-active" : ""}`}
                  onClick={(event) => handleMonthSelection(monthOption, event)}
                >
                  {format(monthOption, "MMMM yyyy")}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <button
        className={`control-button ${!canGoNext ? "is-disabled" : ""}`}
        onClick={canGoNext ? onNext : undefined}
        aria-label="Next month"
        disabled={!canGoNext}
      >
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
        <span className="calendar-header__sr-only">Next month</span>
      </button>
    </div>
  );
};

export default CalendarHeader;
