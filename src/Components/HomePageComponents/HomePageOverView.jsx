import Footer from "../Common/Footer/Footer";
import AboutJourney from "./AboutJourney";
import AcademyLocations from "./AcademyLocations";
import AlumniTestimonials from "./AlumniTestimonials";
import CallToActionSection from "./CallToActionSection";
import FAQAndVideoSection from "./FAQAndVideoSection";
import GallerySection from "./GallerySection";
import HomePageCarousel from "./HomePageCarousel";
import LatestNewsSection from "./LatestNewsSection";
import ProfessionalPrograms from "./ProfessionalPrograms";
import YourFoodFuture from "./YourFoodFuture";

const HomePageOverView = () => {
  return (
    <div className="absolute top-0 w-full">
      <HomePageCarousel />
      <AboutJourney />
      <ProfessionalPrograms />
      <YourFoodFuture />
      <GallerySection />
      <AcademyLocations />
      <AlumniTestimonials />
      <FAQAndVideoSection />
      <LatestNewsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default HomePageOverView;
