import "./ProjectsPage.css";
import SubTitle from "./../../components/SubTitle/SubTitle";
import DotNavigation from "./../../components/DotNavigation/DotNavigation";
import Card from "./../../components/Card/Card";
import ProjectForm from "../../components/ProjectForm/ProjectForm";

const ProjectsPage = () => {
  return (
    <div>
      <SubTitle title="Projects" />
      <DotNavigation />
      <div>
        <ProjectForm />
      </div>
    </div>
  );
};

export default ProjectsPage;
