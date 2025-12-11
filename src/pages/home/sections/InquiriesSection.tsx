import React, { useState } from "react";
import CustomButton from "../../../shared/components/custom-button/CustomButton";
import CustomInput from "../../../shared/components/form-elements/CustomInput";
import CustomTextArea from "../../../shared/components/form-elements/CustomTextArea";
import inquiriesBg from "@/assets/contact-us-image.jpg";

const InquiriesSection: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInquirySubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFullName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      id="inquiries"
      className="home-section inquiries-section"
      style={{
        backgroundImage: `linear-gradient(rgba(8,8,8,0.7), rgba(8,8,8,0.8)), url(${inquiriesBg})`,
      }}
    >
      <div className="form-content">
        <h1>Inquiries</h1>
        <p>For inquiries, contact us</p>
        <form className="inquiry-form" onSubmit={handleInquirySubmit}>
          <div className="form-row">
            <CustomInput
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              placeholder="Full Name"
              required
            />
            <CustomInput
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email Address"
              required
            />
          </div>

          <CustomTextArea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Inquiry"
          />

          <CustomButton type="submit">Send</CustomButton>
        </form>
      </div>
    </section>
  );
};

export default InquiriesSection;
