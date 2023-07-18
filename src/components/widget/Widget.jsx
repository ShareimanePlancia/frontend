import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
      };
      break;
    case "Example 1":
      data = {
        title: "Example 1",
        isMoney: false,
        link: "View all Example 1",
      };
      break;
    case "Example 2":
      data = {
        title: "Example 2",
        isMoney: true,
        link: "View net Example 2",
      };
      break;
    case "Example 3":
      data = {
        title: "Example 3",
        isMoney: true,
        link: "See details",
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && " "} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;