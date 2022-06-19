import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import Sidebar from "../../components/Sidebar/Sidebar";
import HeaderTask from "../../components/HeaderTask/HeaderTask";
import CurrentTask from "../../components/Task/Task";
// import PaginationCustom from "../../components/Pagination/PaginationCustom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <Search />
      {/* <PaginationCustom/> */}
      <div className="Home">
        <Sidebar />
        <HeaderTask />
        <CurrentTask />
      </div>
      {/* <PaginationCustom /> */}
    </>
  );
};

export default Home;
