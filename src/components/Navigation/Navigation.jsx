import TabButton from "./../TabButton/TabButton";
import { useLocation } from "react-router-dom";
import "./Navigation.css";

const tabList = ["Home", "About", "Skills", "Projects"];

const Navigation = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <nav className="nav_section">
        <h3>Lee</h3>
        <div className="tab_list">
          {tabList.map((item) => (
            <span>
              <TabButton
                className={location.pathname === `/${item}` ? "current" : ""}
                item={item}
              />
            </span>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
