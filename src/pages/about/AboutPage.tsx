import PageIntro from "../../shared/components/page-intro/PageIntro";
import "./AboutPage.scss";
import smartImage from "@/assets/smart-space.jpg";

const AboutPage: React.FC = () => {
  return (
    <div className="about-section">
      <PageIntro
        title="About Us"
        subtitle="Our smart thoughts that will ensure your comfort in a smart way"
        backgroundImage={smartImage}
        // overlayColor="#231F20CC"
      />
      <div className="about-content">
        {/* Top Text Block */}
        <div className="top-block">
          <h2 className="title">
            LiveSmart - Africa's Premier Smart Home Provider
          </h2>

          <p>
            LiveSmart is Nigeria's leading smart home solutions company, founded
            in 2023 to make intelligent living accessible, reliable, and deeply
            local. We don't just install devices—we redefine how Nigerians live,
            work, and thrive in their homes.
          </p>

          <section className="paragraph">
            From high-rise apartments in Ikoyi to family compounds in Abuja, we
            deliver fully integrated, AI-powered ecosystems that solve real
            Nigerian challenges:
            <ul>
              <li>Unpredictable power? → Solar-ready automation</li>
              <li>Security concerns? → 24/7 smart monitoring</li>
              <li>High energy bills? → Real-time savings with zero waste</li>
            </ul>
          </section>

          <p>
            With over 10,000 active smart homes across Lagos, Abuja, and Port
            Harcourt, we're not a tech startup—we're Africa's trusted partner in
            modern living.
          </p>
        </div>

        {/* Middle Section */}
        <div className="middle">
          <div className="card left">
            <h3>Vision</h3>
            <p>Every Nigerian home becomes a smart home.</p>
            <br />
            <p>
              Not tomorrow. Not for the elite only. Today. We see a future
              where:
            </p>
            <p>
              A mother in Surulere turns off lights from the market via her
              phone
            </p>
            <p>
              A family in Maitama saves 40% on electricity with automated
              schedules
            </p>
            <p>
              A young professional in VI locks their door with a voice command
              while stuck in traffic
            </p>
            <p>
              This isn't luxury. It's the new standard—and we're building it.
            </p>
          </div>

          <div className="phone-frame">
            <img src={smartImage} alt="Smart home phone UI" />
          </div>

          <div className="card right">
            <h3>Mission</h3>
            <p>
              To empower Nigerians with intelligent, affordable, and sustainable
              home automation.
            </p>
            <br />
            <p>
              We achieve this through: Localized Innovation - Devices designed
              for Nigerian power grids, climate, and lifestyles
            </p>
            <p>
              Seamless Integration - One app, one ecosystem, zero complexity
            </p>
            <p>
              Affordable Excellence - Starter kits from ₦150,000; full-home
              solutions under ₦2M
            </p>
            <p>
              End-to-End Service - From digital design in our Configurator to
              professional installation and lifetime support
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom-block">
          <div className="img-wrap">
            <img src={smartImage} alt="Smart Home" />
          </div>

          <div className="info-block">
            <h3>Why Us?</h3>

            <div className="lists">
              <div className="list-one">
                <h4>We Deliver</h4>
                <ul>
                  <li>100% Nigerian-Owned & Operated</li>
                  <li>Solar & Generator Auto-Switching</li>
                  <li>Real-Time ₦ Cost Estimator</li>
                  <li>24/7 Local Support Team (Lagos & Abuja)</li>
                  <li>NDPR-Compliant Privacy</li>
                  <li>10,000+ Verified Installs</li>
                  <li>Free Design Configurator</li>
                </ul>
              </div>

              <div className="list-two">
                <h4>Others Do</h4>
                <ul>
                  <li>Imported brands with zero local support</li>
                  <li>Systems that fail during outages</li>
                  <li>Hidden fees and surprise bills</li>
                  <li>Overseas chatbots and 3-day delays</li>
                  <li>Data sold to third parties</li>
                  <li>“Coming soon” promises</li>
                  <li>Paywalls just to visualize</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
