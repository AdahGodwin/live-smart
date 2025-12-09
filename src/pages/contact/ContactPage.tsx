import PageIntro from "../../shared/components/page-intro/PageIntro";
import "./ContactPage.scss";
import contactImage from "@/assets/contact-us-image.jpg";
import HomeIcon from "@/assets/svgs/home.svg?react";
import PhoneIcon from "@/assets/svgs/phone.svg?react";
import EmailIcon from "@/assets/svgs/email.svg?react";
import GlobeIcon from "@/assets/svgs/globe.svg?react";
import CustomInput from "../../shared/components/form-elements/CustomInput";
import CustomTextArea from "../../shared/components/form-elements/CustomTextArea";
import CustomButton from "../../shared/components/custom-button/CustomButton";

const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      <PageIntro
        title="Contact Us"
        subtitle="Experience our excellent sales and after-sales services"
        backgroundImage={contactImage}
        overlayColor="#231F2099"
      />
      <div className="contact-content">
        <div className="contact-info">
          <div className="map-preview">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1608.4007186609203!2d3.357309319127397!3d6.6221205173003295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93c79ec3ed69%3A0x5c28bbabe76e73a4!2sAHCN%20Towers!5e0!3m2!1sen!2sng!4v1764928398294!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="contact-address">
            <h2>Address</h2>
            <div className="contact-info-items">
              <div className="info-item">
                <div className="icon-wrapper">
                  <HomeIcon />
                </div>
                <p>38 CIPM Avenue, Alausa, Ikeja, Lagos, Nigeria</p>
              </div>
              <div className="info-item">
                <div className="icon-wrapper">
                  <PhoneIcon />
                </div>
                <p>+234 812 345 6789</p>
              </div>
              <div className="info-item">
                <div className="icon-wrapper">
                  <EmailIcon />
                </div>
                <p>info@livesmartafrica.com</p>
              </div>
              <div className="info-item">
                <div className="icon-wrapper">
                  <GlobeIcon />
                </div>
                <p>www.livesmartafrica.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send Us a Message</h2>

          <form>
            <div className="inputs">
              <CustomInput placeholder="Your Name" />
              <CustomInput placeholder="Email" type="email" />
              <CustomInput placeholder="Phone Number" type="tel" />
            </div>
            <CustomTextArea placeholder="Inquiry" />
            <CustomButton type="submit" bordered className="align-center">
              Send Message
            </CustomButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
