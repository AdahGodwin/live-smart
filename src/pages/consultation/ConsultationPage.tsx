import React, { useState } from "react";
import PageIntro from "../../shared/components/page-intro/PageIntro";
import consultationImage from "@/assets/contact-us-image.jpg";
import "./ConsultationPage.scss";
import DatePicker from "../../shared/components/date-picker/DatePicker";
import TimePicker from "../../shared/components/time-picker/TimePicker";
import TimeZoneSelector from "../../shared/components/time-picker/TimeZoneSelector";
import ConfirmBooking from "../../shared/components/confirm-booking/ConfirmBooking";
import CustomButton from "../../shared/components/custom-button/CustomButton";

const ConsultationPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedZone, setSelectedZone] = useState<string>("Africa/Lagos");
  const [activeTab, setActiveTab] = useState<'book' | 'confirm'>('book');

  return (
    <div className="consultation-page">
      <PageIntro
        title="Book A Tour"
        subtitle="See the magic we have in store for you"
        backgroundImage={consultationImage}
        overlayColor="#231F2099"
      />
      <div className="consultation-content">
        <div className="consultation-image">
          <div className="image">
            <img src={consultationImage} alt="Consultation" />
          </div>
          <p>Book a session and take some time to see our amazing product. </p>
        </div>
        <div className="date-column">
          <div className={`tab-bar ${activeTab === 'book' ? 'active-first' : 'active-second'}`}>
            <button
              className={`tab-btn ${activeTab === 'book' ? 'active' : ''}`}
             
            >
              Book your tour
            </button>
            <button
              className={`tab-btn ${activeTab === 'confirm' ? 'active' : ''}`}
             
            >
              Confirm your booking
            </button>
            <span className="sliding-underline" />
          </div>

          <div className="tab-content">
            <div className={`tab-pane ${activeTab === 'book' ? 'is-active' : ''}`}>
              <div className="date-time-picker">
                <div className="date-and-timezone">
                  <DatePicker
                    selectedDate={selectedDate}
                    onDateChange={(date) => setSelectedDate(date)}
                  />
                  <TimeZoneSelector
                    value={selectedZone}
                    onChange={(zone) => setSelectedZone(zone)}
                  />
                </div>
                <TimePicker
                  selectedTime={selectedTime}
                  onSelectTime={(time) => setSelectedTime(time)}
                />
              </div>
              <CustomButton onClick={() => setActiveTab('confirm')} className="confirmation-btn">Confirm Your Booking</CustomButton>
            </div>
            <div className={`tab-pane ${activeTab === 'confirm' ? 'is-active' : ''}`}>
              <ConfirmBooking
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                selectedZone={selectedZone}
                setTab={()=> setActiveTab("book")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;
