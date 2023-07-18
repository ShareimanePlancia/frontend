import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="logo">Logo</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/home" style={{ textDecoration: "none" }}>
          <li>
            {/* <DashboardIcon className="icon" /> */}
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              {/* <PersonOutlineIcon className="icon" /> */}
              <span>Users</span>
            </li>
          </Link>
          <Link to="/designer" style={{ textDecoration: "none" }}>
          <li>
            <span>Designer</span>
          </li>
          </Link>
          <li>
            <span>Test 1</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <span>Test 2</span>
          </li>
          <li>
            <span>Test 3</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            {/* <SettingsSystemDaydreamOutlinedIcon className="icon" /> */}
            <span>Test 4</span>
          </li>
          <p className="title">USER</p>
          <li>
            <span>Test 5</span>
          </li>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            {/* <ExitToAppIcon className="icon" /> */}
            <span>Logout</span>
          </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;