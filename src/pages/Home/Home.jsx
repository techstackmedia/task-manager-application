import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Sidebar from '../../components/Sidebar/Sidebar';
import HeaderTask from '../../components/HeaderTask/HeaderTask';
import CurrentTask from '../../components/CurrentTask/CurrentTask';
import './Home.css';

const Home = () => {
  return (
    <>
      <Header />
      <Search />
      <div className="Home">
        <Sidebar />
        <HeaderTask />
        <CurrentTask />
      </div>
    </>
  );
};

export default Home;
