import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import Cover from "../pages/Cover/Cover";
import AboutPage from "../pages/AboutPage/AboutPage";
import SkillsPage from "../pages/SkillsPage/SkillsPage";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";
import Layout from "../components/Layout/Layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Cover />} />
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
