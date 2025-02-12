import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

import "./MainPage.css";

const texts = ["Developer", "Newcomer", "Thinker"];

const MainPage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="main_container">
      <div className="main_imgbox">
        <img src="/images/캐릭터.png" alt="" />
      </div>
      <div className="main_info">
        <h1>LEE HYUNJUN</h1>
        <span></span>
        <div className="sub_title">
          Creative
          {texts.map((text, i) => (
            <p
              key={i}
              className={`text_item ${i === index ? "active" : "hidden"}`}
            >
              {text}
            </p>
          ))}
        </div>
        <span>
          <a href="https://github.com/hyun-june" target="_blank">
            <FaGithub className="git_icon" />
          </a>
        </span>
      </div>
    </div>
  );
};

export default MainPage;
