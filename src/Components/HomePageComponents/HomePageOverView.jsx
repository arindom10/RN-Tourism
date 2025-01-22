import AboutJourney from "./AboutJourney";
import CallToActionSection from "./CallToActionSection";
import GallerySection from "./GallerySection";
import HomePageCarousel from "./HomePageCarousel";
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
      <CallToActionSection />
    </div>
  );
};

export default HomePageOverView;
