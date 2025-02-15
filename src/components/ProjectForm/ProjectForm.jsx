import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

import "./ProjectForm.css";

const ProjectForm = ({ ...props }) => {
  return (
    <div className="project_section" {...props}>
      <div
        className={`project_inner ${props.type === "reverse" ? "reverse" : ""}`}
      >
        <div className="project_info">
          <h4>{props.title}</h4>
          <div className="project_description">
            <p> {props.description}</p>
          </div>
          <ul className="project_skills">
            {props.skills ? props.skills.map((item) => <li>{item}</li>) : ""}
          </ul>
          <div className="project_icons">
            <a href={props.git}>
              <FaGithub />
            </a>
            <a href={props.link}>
              <GoLinkExternal />
            </a>
          </div>
        </div>
        <div className="project_img">
          <img src="/images/캐릭터.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
