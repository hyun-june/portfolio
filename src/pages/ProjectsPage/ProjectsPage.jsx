import SubTitle from "./../../components/SubTitle/SubTitle";
import DotNavigation from "./../../components/DotNavigation/DotNavigation";
import Card from "./../../components/Card/Card";
import ProjectForm from "../../components/ProjectForm/ProjectForm";
import "./ProjectsPage.css";

const ProjectsData = [
  {
    title: "HealthyLife2024",
    description: `사용자의 운동량과 섭취 및 소비 칼로리를 한곳에서 관리할 수 있는 서비스입니다.
                  기존 자기 관리 앱과 차별화하여, SNS 기능을 추가해 게시물 작성과 댓글을 통해 다른 사용자들과 소통할 수 있도록 했습니다.
                  또한, 웹앱 형태로 제작해 모바일에서도 편리하게 접근할 수 있도록 제공했습니다.`,
    skills: [
      "React",
      "React Query",
      "Node.js",
      "Express",
      "Axios",
      "MongoDB",
      "Mongoose",
      "Github",
      "Figma",
    ],
    img: "https://cdn.discordapp.com/attachments/1305155148099752004/1342164427524276376/image.png?ex=67b8a387&is=67b75207&hm=0af115980e065ca2d27db140948ab4433f9eb8f725ee582e4988228c98b3caad&",
    git: "https://github.com/hyun-june/Nodejs-TeamProject2-3",
    link: "https://healthylife-2024.netlify.app/",
    src: "https://daily-creator-da3.notion.site/ebd/13bd357c34288018a2daf447fe2680c2",
  },
  {
    title: "Radion",
    description: `"Radio"와 "On"이 결합된 단어로,
                  원하는 음악을 쉽게 들을 수 있는 서비스입니다. 
                  음악 추천과 검색 기능을 제공하며,
                  API를 통해 데이터를 받아 사용하고,
                  react-oauth/google을 사용해
                  구글 계정으로 로그인할 수 있습니다.`,
    skills: [
      "React",
      "React Query",
      "React-oauth/google",
      "Redux",
      "Youtube data api v3",
      "Spotify API",
      "Bootstrap",
    ],
    img: "https://library.gabia.com/wp-content/uploads/2016/04/wix%EB%A9%94%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80-1.png",
    git: "https://github.com/hyun-june/react-study-teamProject-Radion",
    link: "https://react-teamproject-radion.netlify.app/",
    src: "https://daily-creator-da3.notion.site/ebd/1a0d357c3428805b96daf366a8e0437b",
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
