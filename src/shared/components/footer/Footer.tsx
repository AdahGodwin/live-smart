import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

import HomeIcon from '@/assets/svgs/home.svg?react';
import UserIcon from '@/assets/svgs/users.svg?react';
import LinkIcon from '@/assets/svgs/link.svg?react';
import StarsIcon from '@/assets/svgs/stars.svg?react';
import CompanyIcon from '@/assets/svgs/company.svg?react';

import PhoneIcon from '@/assets/svgs/phone.svg?react';
import EmailIcon from '@/assets/svgs/email.svg?react';
import GlobeIcon from '@/assets/svgs/globe.svg?react';
import FacebookIcon from '@/assets/svgs/facebook.svg?react';
import InstagramIcon from '@/assets/svgs/instagram.svg?react';
import XTwitterIcon from "@/assets/svgs/x-twitter.svg?react";
import fontLogo from '@/assets/font-logo.png';
const Footer: React.FC = () => {
  return (
    <footer className="app-footer">
      <div className="footer">
        <div className="footer-content">
        {/* Column 1: About & Contact */}
        <div className="footer-column about-column">
          <div className="column-header">
              <UserIcon className="icon" />
             <h3>About</h3>
          </div>
          <div className="footer-logo-wrapper">
            <img src={fontLogo} alt="Logo" />
          
          </div>
          <div className="contact-info-list">
            <div className="info-item">
              <HomeIcon className="icon" />
              <p>38 CIPM Avenue, Alausa, Ikeja, Lagos, Nigeria</p>
            </div>
            <div className="info-item">
              <PhoneIcon className="icon" />
              <p>+234 812 345 6789</p>
            </div>
            <div className="info-item">
              <EmailIcon className="icon" />
              <p>info@livesmartafrica.com</p>
            </div>
            <div className="info-item">
              <GlobeIcon className="icon" />
              <p>www.livesmartafrica.com</p>
            </div>
          </div>

          <div className="social-links">
            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" aria-label="X (Twitter)"><XTwitterIcon /></a>
          </div>
        </div>
        
        {/* Column 2: Company & Smart Spaces */}
        <div className="footer-column company-column">
          <div className="section-group">
            <div className="column-header">
                 <CompanyIcon />
               <h3>Company</h3>
            </div>
            <ul className="footer-links">
              <li><Link to="/smart-spaces">Smart Spaces</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          <div className="section-group">
            <div className="column-header">
                 <StarsIcon />
               <h3>Smart Spaces</h3>
            </div>
            <ul className="footer-links">
              <li><Link to="/smart-spaces/living-room">Smart Living Rooms</Link></li>
              <li><Link to="/smart-spaces/kitchen">Smart Kitchens</Link></li>
              <li><Link to="/smart-spaces/bedroom">Smart Bedrooms</Link></li>
            </ul>
          </div>
        </div>

        {/* Column 3: Quick Links */}
        <div className="footer-column links-column">
           <div className="column-header">
              <LinkIcon />
               <h3>Quick Links</h3>
            </div>
          <ul className="footer-links">
            <li><Link to="/build-smart-space">Build Smart Space</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/book-tour">Book Tour</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/newsletter">Newsletter</Link></li>
            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
         
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright &copy; {new Date().getFullYear()}. All rights reserved. By LiveSmart</p>
      </div>
      </div>
      
      
    </footer>
  );
};

export default Footer;
