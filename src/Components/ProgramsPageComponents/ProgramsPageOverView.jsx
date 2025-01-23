import CallToActionSection from "../HomePageComponents/CallToActionSection";
import ProfessionalPrograms from "../HomePageComponents/ProfessionalPrograms";
import ProgramePageStarting from "./ProgramePageStarting";

const ProgramsPageOverView = () => {
  return (
    <div>
      <ProgramePageStarting />
      <ProfessionalPrograms />
      <CallToActionSection />
    </div>
  );
};

export default ProgramsPageOverView;
