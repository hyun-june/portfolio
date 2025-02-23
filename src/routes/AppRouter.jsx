import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import Cover from "../pages/Cover/Cover";
import AboutPage from "../pages/AboutPage/AboutPage";
import SkillsPage from "../pages/SkillsPage/SkillsPage";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";
import Layout from "../components/Layout/Layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home" replace />} />
      {/* <Route path="/" element={<Cover />} /> */}
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
