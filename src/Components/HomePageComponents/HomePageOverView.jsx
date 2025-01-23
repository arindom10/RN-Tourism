import AboutJourney from "./AboutJourney";
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
    <div>
      <HomePageCarousel />
      <AboutJourney />
      <ProfessionalPrograms />
      <YourFoodFuture />
      <GallerySection />
      <AlumniTestimonials />
      <FAQAndVideoSection />
      <LatestNewsSection />
      <CallToActionSection />
    </div>
  );
};

export default HomePageOverView;
