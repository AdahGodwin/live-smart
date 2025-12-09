import { addMonths, startOfMonth, subMonths } from "date-fns";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import "./DatePicker.scss";
import { useMemo, useState } from "react";

interface Props {
  selectedDate: Date | null;
  onDateChange: (date: Date) => void;
}

const DatePicker: React.FC<Props> = ({ selectedDate, onDateChange }) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);
  const startMonth = useMemo(() => startOfMonth(new Date()), []);
  const lastMonth = useMemo(() => addMonths(startMonth, 11), [startMonth]);

  const handleMonthChange = (date: Date) => {
    setCurrentMonth(date);
    setIsMonthDropdownOpen(false);
  };

  const handleDateChange = (date: Date) => {
    onDateChange(date);
    setIsMonthDropdownOpen(false);
  };

  const canGoPrev = subMonths(currentMonth, 1).getTime() >= startMonth.getTime();
  const canGoNext = addMonths(currentMonth, 1).getTime() <= lastMonth.getTime();

  const handlePrev = () => {
    const prevMonth = subMonths(currentMonth, 1);
    if (prevMonth.getTime() < startMonth.getTime()) return;
    setCurrentMonth(prevMonth);
    setIsMonthDropdownOpen(false);
  };

  const handleNext = () => {
    const nextMonth = addMonths(currentMonth, 1);
    if (nextMonth.getTime() > lastMonth.getTime()) return;
    setCurrentMonth(nextMonth);
    setIsMonthDropdownOpen(false);
  };

  return (
    <div className="date-picker-container">
      <CalendarHeader
        month={currentMonth}
        onPrev={handlePrev}
        onNext={handleNext}
        onMonthSelect={handleMonthChange}
        isDropdownOpen={isMonthDropdownOpen}
        onToggleDropdown={() => setIsMonthDropdownOpen((prev) => !prev)}
        onCloseDropdown={() => setIsMonthDropdownOpen(false)}
        canGoPrev={canGoPrev}
        canGoNext={canGoNext}
      />

      <CalendarGrid
        month={currentMonth}
        selectedDate={selectedDate}
        onSelectDate={handleDateChange}
      />
    </div>
  );
};

export default DatePicker;
