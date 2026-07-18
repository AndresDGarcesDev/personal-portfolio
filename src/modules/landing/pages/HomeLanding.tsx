import AboutSection from "../components/AboutSection";
import BeyondCodeSection from "../components/BeyondCodeSection";
import ContactSection from "../components/ContactSection";
import CourseSection from "../components/CourseSection";
import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";
import TechnologySection from "../components/TechnologySection";

const HomeLanding = () => {
  return (
    <div className="max-h-full">
      <AboutSection />
      <TechnologySection />
      <ExperienceSection />
      <EducationSection />
      <CourseSection />
      <ContactSection />
      <BeyondCodeSection />
    </div>
  );
};

export default HomeLanding;
