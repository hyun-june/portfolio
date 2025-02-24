import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./DotNavigation.css";

const dotList = ["Home", "About", "Skills", "Projects"];

const DotNavigation = () => {
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    if (location.hash) {
      const targetSection = document.querySelector(location.hash);

      if (targetSection) {
        setTimeout(() => {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth",
          });
        }, 0);
      }
    }
  }, [location.hash]);

  return (
    <nav className="dot_navigation">
      {dotList.map((item, index) => (
        <div
          className={`dot_item ${
            location.pathname == `/${item}` ? "active" : ""
          }`}
          key={index}
        >
          <Link to={`#${item}`} className="dot_circle"></Link>
          <Link to={`#${item}`} className="dot_title">
            {item}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default DotNavigation;
