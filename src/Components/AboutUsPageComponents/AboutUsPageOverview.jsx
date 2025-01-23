import CallToActionSection from "../HomePageComponents/CallToActionSection";
import AcademyLocations from "../HomePageComponents/AcademyLocations";
import AwardCertification from "./AwardCertification";

const AboutUsPageOverview = () => {
  return (
    <div>
      <AcademyLocations />
      <AwardCertification />
      <CallToActionSection />
    </div>
  );
};

export default AboutUsPageOverview;
