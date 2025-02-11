import { Outlet, useLocation } from "react-router-dom";
import TabButton from "../TabButton/TabButton";
import "./Layout.css";

const tabList = ["Home", "About", "Skills", "Projects"];

const Layout = () => {
  const location = useLocation();

  return (
    <div className="layout">
      <nav className="layout_nav">
        <h3>Lee</h3>
        <div>
          {tabList.map((item) => (
            <span>
              <TabButton
                className={
                  location.pathname === `/${item.toLocaleLowerCase()}`
                    ? "current"
                    : ""
                }
                item={item}
              />
            </span>
          ))}
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
