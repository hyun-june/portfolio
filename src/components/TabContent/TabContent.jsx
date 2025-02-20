import TabInner from "./components/TabInner/TabInner";
import "./TabContent.css";

const tabItems = [
  {
    category: "Frontend",
    items: [
      {
        img: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
        title: "HTML5",
        text: "기본적인 태그와 기능을 사용할 수 있습니다.",
      },
      {
        img: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
        title: "CSS",
        text: "순수 CSS를 이용해 반응형 레이아웃과 간단한 애니메이션을 구현할 수 있습니다.",
      },
      {
        img: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
        title: "JavaScript",
        text: "ES6 문법을 사용하여 코드를 작성할 수 있습니다.",
      },
      {
        img: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000",
        title: "React",
        text: "React Hook을 활용해 코드를 작성하고, 컴포넌트 기반 개발에 흥미를 느낍니다.",
      },
      {
        img: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000",
        title: "Next.js",
        text: "클론 코딩을 통해 연습하고, 프로젝트에 도전한 경험이 있습니다.",
      },
    ],
  },
  {
    category: "BackEnd",
    items: [
      {
        img: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
        title: "Node.js",
        text: "MongoDB와 Express.js를 사용하여 온라인 팀 프로젝트를 진행한 경험이 있습니다.",
      },
      {
        img: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000",
        title: "Express.js",
        text: "Node.js를 사용하여 라우팅, 미들웨어 구성, RESTful API 구축을 구현한 경험이 있습니다.",
      },
    ],
  },
  {
    category: "Database",
    items: [
      {
        img: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
        title: "MongoDB",
        text: "Node.js와 함께 사용하여 데이터베이스를 구축한 경험이 있습니다.",
      },
    ],
  },
  {
    category: "ETC",
    items: [
      {
        img: "https://img.icons8.com/?size=100&id=62856&format=png&color=000000",
        title: "Github",
        text: "Git-flow를 활용하여 온라인 팀 프로젝트를 진행한 경험이 있으며, 이를 통해 협업을 경험했습니다.",
      },
      {
        img: "https://img.icons8.com/?size=100&id=GflC6KLkdd0Y&format=png&color=000000",
        title: "Figma",
        text: "프로젝트의 초안을 디자인할 때 주로 피그마를 사용합니다.",
      },
      {
        img: "https://img.icons8.com/?size=100&id=KIcFwp9MNQL5&format=png&color=000000",
        title: "Postman",
        text: "API 테스트 할 때 주로 포스트맨을 사용합니다.",
      },
    ],
  },
];

const TabContent = ({ title }) => {
  const category = tabItems.find((item) => item.category === title);

  return (
    <div className="content_section">
      <h2>
        Skill Stack <span className="content_category">@{title}</span>
      </h2>
      <ul>
        {category
          ? category.items.map((item, index) => (
              <TabInner
                key={index}
                src={item.img}
                title={item.title}
                text={item.text}
              />
            ))
          : ""}
      </ul>
    </div>
  );
};

export default TabContent;
