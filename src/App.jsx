import { useRef, useEffect, useState } from "react";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import SkillsPage from "./pages/SkillsPage/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import DotNavigation from "./components/DotNavigation/DotNavigation";
import { useLocation } from "react-router-dom";
import "./App.css";

function App() {
  const ref = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [visible, setVisible] = useState([false, false, false, false]);
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible((prev) => {
            const newVisible = [...prev];
            if (entry.isIntersecting) {
              const index = ref.findIndex(
                (ref) => ref.current === entry.target
              );
              if (index !== -1) {
                newVisible[index] = true;
                window.location.hash = `#${ref[index].current.id}`;
              }
            } else {
              const index = ref.findIndex(
                (ref) => ref.current === entry.target
              );
              if (index !== -1) {
                newVisible[index] = false;
              }
            }
            return newVisible;
          });
        });
      },
      { threshold: 0.4 }
    );

    ref.map((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      ref.map((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);
  return (
    <div>
      <WelcomePage />
      <DotNavigation />
      <section
        id="Home"
        className={`section ${visible[0] ? "visible" : ""}`}
        ref={ref[0]}
      >
        <MainPage />
      </section>
      <section
        id="About"
        className={`section ${visible[1] ? "visible" : ""}`}
        ref={ref[1]}
      >
        <AboutPage />
      </section>
      <section
        id="Skills"
        className={`section ${visible[2] ? "visible" : ""}`}
        ref={ref[2]}
      >
        <SkillsPage />
      </section>
      <section
        id="Projects"
        className={`section ${visible[3] ? "visible" : ""}`}
        ref={ref[3]}
      >
        <ProjectsPage />
      </section>
    </div>
  );
}

export default App;
