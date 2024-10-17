import BestSeller from "../Components/BestSeller";
import Hero from "../Components/Hero";
import LatestCollectiom from "../Components/LatestCollectiom";
import NewsLetterBox from "../Components/NewsLetterBox";
import OurPolicy from "../Components/OurPolicy";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollectiom />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  );
};

export default Home;
