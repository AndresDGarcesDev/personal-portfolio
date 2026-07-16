import AboutSection from "../components/AboutSection";
import BeyondCodeSection from "../components/BeyondCodeSection";
import ContactSection from "../components/ContactSection";
import EducationSection from "../components/EducationSection";

const HomeLanding = () => {
  return (
    <div className="max-h-full">
      <AboutSection />
      <EducationSection />
      <ContactSection />
      <BeyondCodeSection />
    </div>
  );
};

export default HomeLanding;
