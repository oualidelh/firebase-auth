import CreateGuide from "./CreateGuide";
import GuideList from "./GuideList";
import Account from "../account/Account";

const Home = () => {
  return (
    <div>
      <div className="container">
        <Account />
        <CreateGuide />
        <GuideList />
      </div>
    </div>
  );
};

export default Home;
