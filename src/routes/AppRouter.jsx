import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import SkillsPage from "../pages/SkillsPage/SkillsPage";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";
import Layout from "../components/Layout/Layout";
import WelcomePage from "../pages/WelcomePage/WelcomePage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/" element={<Layout />}>
        <Route path="/Home" element={<MainPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Skills" element={<SkillsPage />} />
        <Route path="/Projects" element={<ProjectsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
