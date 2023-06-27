import HeroPage from "../components/HomePage/HeroPage";
import FeaturedPosts from "../components/HomePage/FeaturedPosts";
import { data } from "../data";

const Home = () => {
  return (
    <>
      <HeroPage />
      <FeaturedPosts posts={data} />
    </>
  );
};

export default Home;
