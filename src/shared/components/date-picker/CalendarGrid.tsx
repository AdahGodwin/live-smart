import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameDay,
  isSameMonth,
  format,
} from "date-fns";
import "./CalendarGrid.scss";

interface Props {
  month: Date;
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

const CalendarGrid: React.FC<Props> = ({
  month,
  selectedDate,
  onSelectDate,
}) => {
  const monthStart = startOfMonth(month);
  const monthEnd = endOfMonth(month);

  const gridStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const gridEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });

  const rows = [];
  let day = gridStart;

  while (day <= gridEnd) {
    const week = [];

    for (let i = 0; i < 7; i++) {
      const dayCopy = day;

      const isDisabled = !isSameMonth(day, month);
      const isSelected = selectedDate && isSameDay(day, selectedDate);

      week.push(
        <div
          key={day.toISOString()}
          className={`calendar-day ${isDisabled ? "disabled" : ""} ${
            isSelected ? "selected" : ""
          } ${
            day.getDay() === 0 || day.getDay() === 6 ? "weekend" : ""
          }`}
          onClick={() => !isDisabled && onSelectDate(dayCopy)}
        >
          {format(day, "d")}
        </div>
      );

      day = addDays(day, 1);
    }

    rows.push(...week);
  }

  const labels = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d, index) => (
    <div
      key={d}
      className={`calendar-day-label ${index >= 5 ? "weekend" : ""}`}
    >
      {d}
    </div>
  ));

  return (
    <div className="calendar-grid">
      {labels}
      {rows}
    </div>
  );
};

export default CalendarGrid;
