import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import "./ProjectForm.css";

const ProjectForm = ({ ...props }) => {
  const { title, type, description, skills, git, link, img } = props;
  return (
    <div className="project_section" {...props}>
      <div className={`project_inner ${type === "reverse" ? "reverse" : ""}`}>
        <div className="project_info">
          <h4>{title}</h4>
          <div className="project_description">
            <p> {description}</p>
          </div>
          <ul className="project_skills">
            {skills ? skills.map((item) => <li>{item}</li>) : ""}
          </ul>
          <div className="project_icons">
            <a href={git}>
              <FaGithub />
            </a>
            <a href={link}>
              <GoLinkExternal />
            </a>
          </div>
        </div>
        <div className="project_img">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
