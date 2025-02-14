import { Outlet } from "react-router-dom";
import "./Layout.css";
import Navigation from "./../Navigation/Navigation";

const Layout = () => {
  return (
    <div className="layout">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
