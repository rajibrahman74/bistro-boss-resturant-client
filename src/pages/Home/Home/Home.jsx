import Banner from "../Banner/Banner";
import BistroSection from "../BistroSection/BistroSection";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Bistro - resturan</title>
      </Helmet>
      <Banner />
      <Category />
      <BistroSection />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
