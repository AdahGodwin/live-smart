import React from 'react';
import PageIntro from '../../shared/components/page-intro/PageIntro';
import termsImage from '@/assets/smart-space.jpg';
import './TermsAndConditionsPage.scss';

const TermsAndConditionsPage: React.FC = () => {
  return (
    <div className="terms-and-conditions-page">
      <PageIntro 
        title="Terms and Conditions"
        subtitle="Please read our terms and conditions carefully."
        backgroundImage={termsImage}
        height="400px"
      />
      <div className="terms-content">
        <section>
          <h2>Definitions</h2>
          <ul>
            <li><strong>“We/Us”</strong> - LiveSmart Technologies Ltd, registered in Nigeria (RC 1234567)</li>
            <li><strong>“You”</strong> - User of the platform or purchaser of services</li>
            <li><strong>“Services”</strong> - Design tools, installation, app access, support</li>
          </ul>
        </section>

        <section>
          <h2>Eligibility & Account</h2>
          <ul>
            <li>Must be 18+ and a legal resident of Nigeria</li>
            <li>One account per person. We may suspend duplicate or fraudulent accounts</li>
            <li>You are responsible for account security—notify us immediately of unauthorized use</li>
          </ul>
        </section>

        <section>
          <h2>Configurator & Design Rights</h2>
          <ul>
            <li>All preset models, 3D renders, and automation logic are © LiveSmart</li>
            <li>You own your custom design output for personal use</li>
            <li>We may use anonymized design data to improve presets (no PII)</li>
            <li>No commercial resale of designs without written consent</li>
          </ul>
        </section>

        <section>
          <h2>Orders, Payments & Pricing</h2>
          <ul>
            <li>All prices in Nigerian Naira (₦), inclusive of VAT</li>
            <li>Payment via Paystack, bank transfer, or USSD</li>
            <li>50% deposit required to schedule installation</li>
            <li>Final balance due on completion</li>
            <li>Price Lock: Quote valid for 14 days</li>
          </ul>
        </section>

        {/* <section>
          <h2>Refund Policy</h2>
          <ul>
            <li>Digital Tools</li>
            <li>Installation (Pre-Start)</li>
            <li>Post-Installation</li>
          </ul>
        </section> */}

        <section>
          <h2>Installation & Delivery</h2>
          <ul>
            <li>Timeline: 3-7 business days from deposit</li>
            <li>Access: You must provide safe entry and power</li>
            <li>Delays: Not liable for force majeure (strikes, floods, grid failure)</li>
            <li>Changes: Modifications after approval incur ₦35,000+ fee</li>
          </ul>
        </section>

        <section>
          <h2>Warranties & Liability</h2>
          <ul>
            <li>Hardware: 2 years (manufacturer-backed)</li>
            <li>Installation: 1 year against defects</li>
            <li>Exclusions: Misuse, power surges, unauthorized repairs</li>
            <li>Max Liability: Total amount paid by you</li>
            <li>No consequential damages (e.g., data loss, inconvenience)</li>
          </ul>
        </section>

        <section>
          <h2>Intellectual Property</h2>
          <ul>
            <li>LiveSmart App, Configurator, and branding are protected</li>
            <li>Limited personal, non-commercial license granted</li>
            <li>Reverse engineering prohibited</li>
          </ul>
        </section>

        <section>
          <h2>Termination</h2>
          <ul>
            <li>We may suspend or terminate access for: </li>
            <ul>
                <li>Non-payment</li>
                <li>Abuse of support</li>
                <li>Violation of Terms</li>
            </ul>
            <li>You may cancel anytime—no refunds for partial terms</li>
          </ul>
        </section>

        <section>
          <h2>Governing Law</h2>
          <ul>
            <li>Laws of the Federal Republic of Nigeria</li>
            <li>Exclusive jurisdiction: Lagos State Courts</li>
            <li>Dispute resolution: Mediation first, then litigation</li>
          </ul>
        </section>

        <section>
          <h2>Inquiries?</h2>
          <ul>
            <li>Legal questions: legal@livesmart.ng | +234 01 234 5678</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
