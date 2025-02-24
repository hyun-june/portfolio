import { Outlet, useLocation } from "react-router-dom";
import "./Layout.css";
import Navigation from "./../Navigation/Navigation";
import DotNavigation from "../DotNavigation/DotNavigation";
import SubTitle from "../SubTitle/SubTitle";
import LinkNavigation from "./../LinkNavigation/LinkNavigation";

const Layout = () => {
  const location = useLocation();
  return (
    <div className="layout">
      <Navigation />
      <LinkNavigation />
      <main>
        <div className="container">
          {location.pathname !== "/Home" && (
            <SubTitle title={location.pathname.replace("/", "")} />
          )}

          <Outlet />
        </div>
        <DotNavigation />
      </main>
    </div>
  );
};

export default Layout;
