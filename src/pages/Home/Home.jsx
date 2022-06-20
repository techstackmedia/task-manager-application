import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import Sidebar from "../../components/Sidebar/Sidebar";
import HeaderTask from "../../components/HeaderTask/HeaderTask";
import Task from "../../components/Task/Task";
import "./Home.css";

const Home = ({ feedback, handleSortClick }) => {
  return (
    <>
      <Header />
      <Search handleSortClick={handleSortClick} />
      <div className="Home">
        <Sidebar />
        <HeaderTask />
        <Task feedback={feedback} />
      </div>
    </>
  );
};

export default Home;
