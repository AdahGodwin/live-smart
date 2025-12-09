import { useState } from 'react';
import { format } from 'date-fns';
import CustomButton from '../custom-button/CustomButton';
import './ConfirmBooking.scss';
import CalendarIcon from "@/assets/svgs/calendar.svg?react";
import TimeZoneIcon from "@/assets/svgs/globe-zone.svg?react";
interface Props {
  selectedDate: Date | null;
  selectedTime: string | null;
  selectedZone: string;
  setTab: ()=> void;
}

const ConfirmBooking: React.FC<Props> = ({ selectedDate, selectedTime, selectedZone, setTab }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const hasSelection = Boolean(selectedDate && selectedTime);
  return (
    <div className="confirm-booking">
      
      <div className="confirm-booking__summary">
        <div className='booking-values'>
          <CalendarIcon />
          <div className="date-and-time">
            <span>{selectedDate ? format(selectedDate, 'EEEE, do MMMM, yyyy') : 'Select a date'}</span>
            <span>{selectedTime ?? 'Pick a time slot'}</span>
          </div>
        </div>
        <div className='booking-values'>
          <TimeZoneIcon />
            <span style={{fontSize:14}}>Timezone: {selectedZone ?? 'Pick a time zone'}</span>
          
        </div>

      </div>
      <div className="contact-fields">
        <label>
          {/* <span>Name</span> */}
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your full name"
          />
        </label>
        <label>
          {/* <span>Email</span> */}
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="your email"
          />
        </label>
      </div>
      <div className="confirm-actions">
         <button className="back-button" onClick={setTab}>Back</button>
         <CustomButton className='confirm-button' disabled={!hasSelection}>Confirm Your Booking</CustomButton>
      </div>
     
    </div>
  );
};

export default ConfirmBooking;
