import TimeSlotItem from "./TimeSlotItem";
import "./TimePicker.scss";

interface Props {
  selectedTime: string | null;
  onSelectTime: (time: string) => void;
}

const times = Array.from({ length: ((17 - 9) * 2) + 1 }, (_, index) => {
  const totalMinutes = 9 * 60 + index * 30;
  const hour24 = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const suffix = hour24 >= 12 ? "PM" : "AM";
  const displayHour = hour24 % 12 === 0 ? 12 : hour24 % 12;
  const displayMinutes = minutes.toString().padStart(2, "0");
  return `${displayHour}:${displayMinutes} ${suffix}`;
});

const TimePicker: React.FC<Props> = ({ selectedTime, onSelectTime }) => {
  return (
    <div className="time-slot-list">
      {times.map((t) => (
        <TimeSlotItem
          key={t}
          time={t}
          active={selectedTime === t}
          onClick={() => onSelectTime(t)}
        />
      ))}
    </div>
  );
};

export default TimePicker;
