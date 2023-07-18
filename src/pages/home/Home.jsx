import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/charts/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="Example 1" />
          <Widget type="Example 2" />
          <Widget type="Example 3" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Error)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest </div>
          <Table/>
        </div>
      </div>
    </div>
  );
};

export default Home;