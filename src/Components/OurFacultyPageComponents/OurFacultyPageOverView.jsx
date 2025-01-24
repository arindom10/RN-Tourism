import CallToActionSection from "../HomePageComponents/CallToActionSection";
import OurFaculty from "./OurFaculty";
import OurFacultyPageStarting from "./OurFacultyPageStarting";

const OurFacultyPageOverView = () => {
  return (
    <div>
      <OurFacultyPageStarting />
      <OurFaculty />
      <CallToActionSection />
    </div>
  );
};

export default OurFacultyPageOverView;
