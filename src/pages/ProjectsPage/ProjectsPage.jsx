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
    img: "https://library.gabia.com/wp-content/uploads/2016/04/wix%EB%A9%94%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80-1.png",
    git: "https://react-icons.github.io/react-icons/search/#q=link",
    link: "http://localhost:3000",
    src: "https://daily-creator-da3.notion.site/ebd/13bd357c34288018a2daf447fe2680c2",
  },
  {
    title: "test2",
    description: "설명테스트2",
    skills: ["react", "css", "html", "dddd"],
    img: "https://library.gabia.com/wp-content/uploads/2016/04/wix%EB%A9%94%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80-1.png",
    git: "https://react-icons.github.io/react-icons/search/#q=link",
    link: "http://localhost:3000",
  },
];

const CardsData = [
  {
    title: "test1",
    description: "설명테스트",
    skills: ["react", "css", "html"],
    img: "https://library.gabia.com/wp-content/uploads/2016/04/wix%EB%A9%94%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80-1.png",
    git: "https://react-icons.github.io/react-icons/search/#q=link",
    link: "http://localhost:3000",
  },
  {
    title: "test2",
    p: "설명테스트2",
    skills: ["react", "css", "html", "dddd"],
    img: "https://library.gabia.com/wp-content/uploads/2016/04/wix%EB%A9%94%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80-1.png",
    git: "https://react-icons.github.io/react-icons/search/#q=link",
    link: "http://localhost:3000",
  },
];

const ProjectsPage = () => {
  return (
    <div className="projects_page_section">
      <SubTitle title="Projects" />
      <DotNavigation />
      <div className="main_project">
        {ProjectsData.map((project, index) => (
          <ProjectForm
            key={index}
            img={project.img}
            title={project.title}
            description={project.description}
            skills={project.skills}
            git={project.git}
            link={project.link}
            type={index % 2 === 0 ? "" : "reverse"}
            src={project.src}
          />
        ))}
      </div>
      <SubTitle title="Sub_projects" />
      <div className="sub_project">
        {CardsData.map((card, index) => (
          <Card
            key={index}
            img={card.img}
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
