import AboutSection from "../components/AboutSection";
import BeyondCodeSection from "../components/BeyondCodeSection";
import ContactSection from "../components/ContactSection";
import CourseSection from "../components/CourseSection";
import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";

const HomeLanding = () => {
  return (
    <div className="max-h-full">
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <CourseSection />
      <ContactSection />
      <BeyondCodeSection />
    </div>
  );
};

export default HomeLanding;
