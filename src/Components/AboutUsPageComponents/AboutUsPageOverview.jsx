import CallToActionSection from "../HomePageComponents/CallToActionSection";
import AcademyLocations from "../HomePageComponents/AcademyLocations";
import AwardCertification from "./AwardCertification";
import AboutUsBanner from "./AboutUsBanner";

const AboutUsPageOverview = () => {
  return (
    <div>
      <AboutUsBanner />
      <AcademyLocations />
      <AwardCertification />
      <CallToActionSection />
    </div>
  );
};

export default AboutUsPageOverview;
