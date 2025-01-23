import AboutJourney from "./AboutJourney";
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
      <FAQAndVideoSection />
      <LatestNewsSection />
      <CallToActionSection />
    </div>
  );
};

export default HomePageOverView;
