import SubTitle from "./../../components/SubTitle/SubTitle";
import DotNavigation from "./../../components/DotNavigation/DotNavigation";
import { useState } from "react";
import TabContent from "../../components/TabContent/TabContent";
import "./SkillsPage.css";

const TabData = [
  { title: "Language", content: <TabContent title="Language" /> },
  { title: "Frontend", content: <TabContent title="Frontend" /> },
  { title: "BackEnd", content: <TabContent title="BackEnd" /> },
  { title: "Database", content: <TabContent title="Database" /> },
  { title: "ETC", content: <TabContent title="ETC" /> },
];

const SkillsPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="skills_section">
      <SubTitle title="Skills" />
      <DotNavigation />
      <div className="skills_inner">
        <div>
          <ul className="skills_tab">
            {TabData.map((tab, index) => (
              <li
                key={index}
                className={`skills_tab_title ${
                  activeTab === index ? "active" : ""
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </li>
            ))}

            <span
              className="tab_line"
              style={{ top: `${activeTab * 38}px` }}
            ></span>
          </ul>
        </div>
        <div className="tab_content">{TabData[activeTab].content}</div>
      </div>
    </div>
  );
};

export default SkillsPage;
