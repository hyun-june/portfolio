import SubTitle from "./../../components/SubTitle/SubTitle";
import DotNavigation from "./../../components/DotNavigation/DotNavigation";
import Card from "./../../components/Card/Card";
import ProjectForm from "../../components/ProjectForm/ProjectForm";
import "./ProjectsPage.css";

const ProjectsData = [
  {
    title: "test1",
    description: "설명테스트",
    skills: ["react", "css", "html"],
    git: "https://react-icons.github.io/react-icons/search/#q=link",
    link: "http://localhost:3000",
  },
  {
    title: "test2",
    description: "설명테스트2",
    skills: ["react", "css", "html", "dddd"],
    git: "https://react-icons.github.io/react-icons/search/#q=link",
    link: "http://localhost:3000",
  },
];

const CardsData = [
  {
    title: "test1",
    description: "설명테스트",
    skills: ["react", "css", "html"],
    git: "https://react-icons.github.io/react-icons/search/#q=link",
    link: "http://localhost:3000",
  },
  {
    title: "test2",
    p: "설명테스트2",
    skills: ["react", "css", "html", "dddd"],
    git: "https://react-icons.github.io/react-icons/search/#q=link",
    link: "http://localhost:3000",
  },
];

const ProjectsPage = () => {
  return (
    <div className="projects_page_section">
      <SubTitle title="Projects" />
      <DotNavigation />
      {ProjectsData.map((project, index) => (
        <ProjectForm
          key={index}
          title={project.title}
          description={project.description}
          skills={project.skills}
          git={project.git}
          link={project.link}
          type={index % 2 === 0 ? "" : "reverse"}
        />
      ))}
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        {CardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            skills={card.skills}
            git={card.git}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
