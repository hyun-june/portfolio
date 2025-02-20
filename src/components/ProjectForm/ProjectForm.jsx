import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import "./ProjectForm.css";

const ProjectForm = ({ ...props }) => {
  const { title, type, description, skills, git, link, img, src } = props;
  const [isIframeLoading, setIsIframeLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const backgroundRef = useRef();

  const clickOutside = (event) => {
    if (
      backgroundRef.current &&
      !backgroundRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  return (
    <div ref={backgroundRef} className="project_section" {...props}>
      <div className={`project_inner ${type === "reverse" ? "reverse" : ""}`}>
        <div className="project_info">
          <h4>{title}</h4>
          <div className="project_description">
            <p> {description}</p>
          </div>
          <ul className="project_skills">
            {skills
              ? skills.map((item, index) => <li key={index}>{item}</li>)
              : ""}
          </ul>

          <div className="project_icons">
            <a href={git} target="blank">
              <FaGithub />
            </a>
            <a href={link} target="blank">
              <GoLinkExternal />
            </a>
            <div>
              <button className="modal_btn" onClick={() => setIsOpen(!isOpen)}>
                상세보기
              </button>
              {isOpen && (
                <div className="project_modal">
                  <iframe
                    src={src}
                    width="100%"
                    height="800"
                    onLoad={() => setIsIframeLoading(true)}
                  />

                  {isIframeLoading && (
                    <button onClick={() => setIsOpen(false)}>X</button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="project_img">
          <a href={link} target="blank">
            <img src={img} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
