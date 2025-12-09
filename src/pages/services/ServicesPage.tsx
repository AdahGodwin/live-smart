import "./ServicesPage.scss";
import PageIntro from "../../shared/components/page-intro/PageIntro";
import CustomButton from "../../shared/components/custom-button/CustomButton";
import serviceImage from "@/assets/service-image-background.jpg";
import HomeSetupImage from "@/assets/smart-home-setup.png";
import PresetsImage from "@/assets/customizable-preset.png";
import ToursImage from "@/assets/immersive-setup.png";
const services = [
  {
    title: "Effortless Smart Home Setup",
    description:
      "Discover the ultimate in hassle-free smart living with LiveSmart's expert guidance. We handle everything from initial consultation to seamless installation, ensuring your home is optimized for energy efficiency, security, and convenience—without any stress on your end. Our team assesses your space, recommends tailored solutions, and sets up devices like smart lighting, climate control, and security systems, all integrated via our intuitive app for instant control.",
    imageUrl: HomeSetupImage,
  },
  {
    title: "Customizable Smart Space Presets",
    description:
      "Unlock endless possibilities with our curated presets for smart spaces. Choose from ready-made models for rooms like living areas, kitchens, or bedrooms, then personalize them with add-ons such as voice-activated controls or solar integrations. This DIY-friendly configurator lets you visualize and tweak your ideal setup in minutes, turning basic interiors into intelligent, adaptive environments that fit your Nigerian lifestyle perfectly.",
    imageUrl: PresetsImage,
  },
  {
    title: "Immersive Smart Space Tours",
    description:
      "Experience LiveSmart innovations firsthand through our virtual 3D tours or scheduled in-person visits. Dive into interactive digital walkthroughs from your phone or laptop, exploring fully equipped smart homes with 360° views and clickable features. For a tactile feel, book an on-site tour at our Lagos demo centers—see automations in action and get inspired for your own upgrade.",
    imageUrl: ToursImage,
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="services-page">
      <PageIntro
        title="Services"
        subtitle="We don't sell gadgets. We design, deliver, and maintain intelligent living systems—customized
for Nigerian homes, climates, and power realities"
        backgroundImage={serviceImage}
        overlayColor="#231F2099"
        subtitleFontSize="16px"
      />
      <div className="services-content">
        {services.map((service, index) => {
          const isImageLeft = index % 2 === 0;
          return (
            <div
              className={`service-row ${
                isImageLeft ? "image-left-row" : "image-right-row"
              }`}
              key={service.title}
            >
              <div
                className={`service-image ${
                  isImageLeft ? "image-left" : "image-right"
                }`}
              >
                <img src={service.imageUrl} alt={service.title} />
              </div>
              <div className="service-copy">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <CustomButton>Learn More</CustomButton>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesPage;
