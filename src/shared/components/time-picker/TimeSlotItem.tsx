import "./TimeSlotItem.scss";

interface Props {
  time: string;
  active: boolean;
  onClick: () => void;
}

const TimeSlotItem: React.FC<Props> = ({ time, active, onClick }) => {
  return (
    <div
      className={`time-slot ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {time}
    </div>
  );
};

export default TimeSlotItem;
