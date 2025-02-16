import TabInner from "./components/TabInner/TabInner";
import "./TabContent.css";

const tabItems = [
  {
    category: "Frontend",
    items: [
      {
        img: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
        title: "HTML5",
        text: "• 기본적인 HTML 태그를 사용할 수 있습니다.",
      },
      {
        img: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
        title: "CSS3",
        text: "",
      },
      {
        img: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
        title: "JavaScript",
        text: "",
      },
      {
        img: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000",
        title: "React",
        text: "",
      },
      {
        img: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000",
        title: "Next.js",
        text: "",
      },
    ],
  },
  {
    category: "BackEnd",
    items: [
      {
        img: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
        title: "Node.js",
        text: "•",
      },
      {
        img: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000",
        title: "Express.js",
        text: "•",
      },
    ],
  },
  {
    category: "Database",
    items: [
      {
        img: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
        title: "MongoDB",
        text: "•",
      },
    ],
  },

  {
    category: "ETC",
    items: [
      {
        img: "https://img.icons8.com/?size=100&id=62856&format=png&color=000000",
        title: "Github",
        text: "•",
      },
      {
        img: "https://img.icons8.com/?size=100&id=GflC6KLkdd0Y&format=png&color=000000",
        title: "Figma",
        text: "•",
      },
      {
        img: "https://img.icons8.com/?size=100&id=KIcFwp9MNQL5&format=png&color=000000",
        title: "Postman",
        text: "•",
      },
    ],
  },
];

const TabContent = ({ title }) => {
  const category = tabItems.find((item) => item.category === title);
  console.log(category);
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
