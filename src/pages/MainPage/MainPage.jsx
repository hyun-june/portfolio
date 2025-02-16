import { useEffect, useState } from "react";
import { IoLogoFigma } from "react-icons/io5";
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
      <div className="main_text">
        <span>제 포트폴리오를 방문해 주셔서 진심으로 감사드립니다.</span>
      </div>

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
              className={`text_item ${i === index ? "visible" : "hidden"}`}
            >
              {text}
            </p>
          ))}
        </div>
        <span className="icons_box">
          <a
            href="https://github.com/hyun-june"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub className="git_icon" />
          </a>
          <a
            href="https://github.com/hyun-june"
            rel="noopener noreferrer"
            target="_blank"
          >
            <IoLogoFigma className="git_icon" />
          </a>
        </span>
      </div>
    </div>
  );
};

export default MainPage;
