import SubTitle from "./../../components/SubTitle/SubTitle";
import Card from "./../../components/Card/Card";
import ProjectForm from "../../components/ProjectForm/ProjectForm";
import "./ProjectsPage.css";

const ProjectsData = [
  {
    title: "HealthyLife2024",
    slogan: "나만의 건강 관리와 SNS 기능을 한 곳에서.",
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
    ],
    img: "https://res.cloudinary.com/dkuk1vsqa/image/upload/v1740407571/image_wvzfdo.png",
    git: "https://github.com/hyun-june/Nodejs-TeamProject2-3",
    site: "https://healthylife-2024.netlify.app/",
    figma:
      "https://www.figma.com/design/f7bTK7dr7UU3Azw6TqEn3R/HealthyLife?t=MsnbD71k0iPJcXgz-0",
    src: "https://daily-creator-da3.notion.site/ebd/13bd357c34288018a2daf447fe2680c2",
  },
  {
    title: "Radion",
    slogan: "원하는 음악과 추천 음악을 쉽게 즐기세요!",
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
    ],
    img: "https://res.cloudinary.com/dkuk1vsqa/image/upload/v1740407580/image_fuqhlr.png",
    git: "https://github.com/hyun-june/react-study-teamProject-Radion",
    site: "https://react-teamproject-radion.netlify.app/",
    figma:
      "https://www.figma.com/design/1XkwexEXjYZP0XyOWO04Dm/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%8A%A4%ED%84%B0%EB%94%94-2%EA%B8%B0-6%EC%A1%B0?node-id=0-1&t=z0g2EL66gqLERHKi-0",
    src: "https://hyun-june.github.io/react-study-teamProject-Radion/",
  },
  {
    title: "지오웨더(GeoWeather)",
    slogan: "실시간 날씨와 현재 위치 기반 서비스",
    description: `날씨 정보와 지도 서비스를 결합한 실시간 위치 기반 서비스입니다.
    사용자는 현재 위치 또는 특정 장소의 날씨를 쉽게 확인할 수 있어, 안전하고 효율적인 계획을 세울 수 있습니다.
    또한, 지도와 날씨 정보를 하나의 플랫폼에서 제공하여 사용자 경험을 극대화했습니다.`,
    skills: ["Javascript", "KakaoMap API", "OpenWeather API", "Web Speech API"],
    img: "https://res.cloudinary.com/dkuk1vsqa/image/upload/v1740407652/image_widys5.png",
    git: "https://github.com/jaeyoung99-lee/CodingSister_JS_TeamProject",
    site: "https://codingsister-js-teamproject.netlify.app/",
    figma:
      "https://www.figma.com/design/OaschMcLrot0yruH5uJ0eP/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-2%EA%B8%B0-5%EC%A1%B0?node-id=0-1&p=f&t=eJYLOvR3xfGrW6qu-0",
    src: "https://hyun-june.github.io/javscript2-teamproject/",
  },
];

const CardsData = [
  {
    title: "슈팅 게임",
    description: "자바스크립트 캔버스를 이용한 슈팅게임입니다.",
    skills: ["Javascript", "Canvas"],
    img: "https://res.cloudinary.com/dkuk1vsqa/image/upload/v1740407713/image_uekp4j.png",
    site: "https://javascript-shootinggame.netlify.app/",
  },
  {
    title: "쇼핑몰 페이지",
    description: "백엔드 개발자와 협업하여 실제 사용될 페이지를 개발 중입니다.",
    skills: ["React", "Php", "Laravel"],
    img: "https://res.cloudinary.com/dkuk1vsqa/image/upload/v1740407719/image_ytnlvx.png",
    site: "https://github.com/hyun-june/sellect-frontend_react",
  },
  {
    title: "포트폴리오",
    description: "Brittany Chiang의 포트폴리오를 참고하여 제작했습니다.",
    skills: ["React"],
    img: "https://res.cloudinary.com/dkuk1vsqa/image/upload/v1740408819/image_mkg8r7.png",
    site: "https://hyun-june.github.io/portfolio/",
  },
  {
    title: "포트폴리오 스크롤",
    description: "포트폴리오 원페이지 스크롤 버전입니다",
    skills: ["React"],
    img: "https://res.cloudinary.com/dkuk1vsqa/image/upload/v1740407809/image_x52jmu.png",
    site: "https://hyun-june.github.io/portfolio-scroll/",
  },
];

const ProjectsPage = () => {
  return (
    <div className="projects_page_section">
      <div className="main_project">
        {ProjectsData.map((project, index) => (
          <ProjectForm
            key={index}
            img={project.img}
            title={project.title}
            description={project.description}
            skills={project.skills}
            git={project.git}
            site={project.site}
            type={index % 2 === 0 ? "" : "reverse"}
            src={project.src}
            figma={project.figma}
          />
        ))}
      </div>
      <SubTitle title="Sub_projects" className="sub_title" />
      <div className="sub_project">
        {CardsData.map((card, index) => (
          <Card
            key={index}
            img={card.img}
            title={card.title}
            description={card.description}
            skills={card.skills}
            site={card.site}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
