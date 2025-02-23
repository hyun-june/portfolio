import { Outlet, useLocation } from "react-router-dom";
import "./Layout.css";
import Navigation from "./../Navigation/Navigation";
import DotNavigation from "../DotNavigation/DotNavigation";
import SubTitle from "../SubTitle/SubTitle";

const Layout = () => {
  const location = useLocation();
  return (
    <div className="layout">
      <Navigation />
      <main>
        <div className="container">
          {location.pathname !== "/Home" && (
            <SubTitle title={location.pathname.replace("/", "")} />
          )}

          <Outlet />
        </div>
        {location.pathname !== "/Home" && <DotNavigation />}
      </main>
    </div>
  );
};

export default Layout;
