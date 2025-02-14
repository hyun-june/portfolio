import "./TabContent.css";
import TabInner from "./components/TabInner/TabInner";

const tabItems = [
  {
    category: "Language",
    items: [
      {
        img: "https://w7.pngwing.com/pngs/5/56/png-transparent-website-development-html5-logo-world-wide-web-consortium-world-wide-web-angle-web-design-text-thumbnail.png",
        title: "HTML5",
        text: "• 기본적인 HTML 태그를 사용할 수 있습니다.",
      },
    ],
  },
  {
    category: "Frontend",
    items: [
      {
        img: "",
        title: "",
        text: "•",
      },
      {
        img: "",
        title: "",
        text: "•",
      },
    ],
  },
  {
    category: "BackEnd",
    items: [
      {
        img: "",
        title: "",
        text: "•",
      },
      {
        img: "",
        title: "",
        text: "•",
      },
    ],
  },
  {
    category: "Database",
    items: [
      {
        img: "",
        title: "",
        text: "•",
      },
      {
        img: "",
        title: "",
        text: "•",
      },
    ],
  },
  {
    category: "ETC",
    items: [
      {
        img: "",
        title: "",
        text: "•",
      },
      {
        img: "",
        title: "",
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
        Skill Stack <span>@{title}</span>
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
