import { Helmet } from "react-helmet-async";
import CallToAction from "../CallToAction/CallToAction";
import Category from "../Category/Category";
import ChefRecommend from "../ChefRecoment/ChefRecomment";
import Featured from "../Featured/Featured";
import Intro from "../Intro/Intro";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro boss | Home</title>
      </Helmet>
      <Banner />

      <Category></Category>

      <Intro></Intro>
      <PopularMenu></PopularMenu>

      <CallToAction></CallToAction>

      <ChefRecommend></ChefRecommend>

      <Featured></Featured>

      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
