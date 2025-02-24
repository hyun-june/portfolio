import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { FaFigma } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import "./ProjectForm.css";

const ProjectForm = ({ ...props }) => {
  const {
    id,
    title,
    slogan,
    type,
    description,
    skills,
    git,
    img,
    src,
    site,
    figma,
  } = props;

  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const backgroundRef = useRef();

  const clickOutside = (event) => {
    if (
      backgroundRef.current &&
      !backgroundRef.current.contains(event.target)
    ) {
      setIsOpen(false);
      setIsIframeLoading(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  const pointText = (title, id) => {
    const point = [
      { chars: ["H", "L"], color: "#88dbff" },
      { chars: ["R"], color: "#f0763c" },
    ];

    return title.split("").map((char, index) => {
      let foundColor = null;

      point.forEach((item) => {
        if (item.chars.includes(char)) {
          foundColor = item.color;
        }
      });

      return foundColor ? (
        <span key={index} style={{ color: foundColor }}>
          {char}
        </span>
      ) : (
        char
      );
    });
  };

  return (
    <div ref={backgroundRef} className="project_section" {...props}>
      <div className={`project_inner ${type === "reverse" ? "reverse" : ""}`}>
        <div className="project_info">
          <h4>{pointText(title, id)}</h4>
          <h5 className="project_slogan">"{slogan}"</h5>
          <div className="project_description">
            <p> {description}</p>
          </div>
          <ul className="project_skills">
            {skills
              ? skills.map((item, index) => <li key={index}>{item}</li>)
              : ""}
          </ul>

          <div className="project_icons">
            <a href={git} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href={site} target="_blank" rel="noopener noreferrer">
              <GoLinkExternal />
            </a>
            <a href={figma} target="_blank" rel="noopener noreferrer">
              <FaFigma />
            </a>
            <div>
              <button className="modal_btn" onClick={() => setIsOpen(true)}>
                상세보기
              </button>
              {isOpen && (
                <div className={`project_modal ${isOpen ? "open" : ""}`}>
                  <iframe
                    src={src}
                    width="100%"
                    height="800"
                    onLoad={() => setIsIframeLoading(false)}
                  />

                  <button onClick={() => setIsOpen(false)}>
                    <IoIosClose />
                  </button>
                  {isIframeLoading && <div id="loading_text">로딩중...</div>}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="project_img">
          <a href={site} target="_blank" rel="noopener noreferrer">
            <img src={img} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
