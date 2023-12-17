import HelmetUse from "../Components/Hooks/HelmetUse";
import Banner from "../Components/Layout/Banner/Banner";
import Course from "./Course";

const Home = () => {
  return (
    <div>
      <HelmetUse helmet={"Home"} />
      <Banner />
      <Course />
    </div>
  );
};
export default Home;
