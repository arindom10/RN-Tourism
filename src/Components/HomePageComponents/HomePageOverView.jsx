import AboutJourney from "./AboutJourney";
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
    </div>
  );
};

export default HomePageOverView;
