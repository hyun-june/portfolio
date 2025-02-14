import { useLocation } from "react-router-dom";
import "./DotNavigation.css";

const dotList = ["Home", "About", "Skills", "Projects"];

const DotNavigation = () => {
  const location = useLocation();
  console.log("ll", location);

  return (
    <nav className="dot_navigation">
      {dotList.map((item, index) => (
        <div
          className={`dot_item ${
            location.pathname === `/${item}` ? "active" : ""
          }`}
          key={index}
        >
          <a href={`/${item}`} className="dot_circle"></a>
          <a href={`/${item}`} className="dot_title">
            {item}
          </a>
        </div>
      ))}
    </nav>
  );
};

export default DotNavigation;
