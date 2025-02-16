import { Outlet } from "react-router-dom";
import "./Layout.css";
import Navigation from "./../Navigation/Navigation";

const Layout = () => {
  return (
    <div className="layout">
      <Navigation />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
