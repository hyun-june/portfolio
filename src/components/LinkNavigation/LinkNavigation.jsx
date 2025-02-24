import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import "./LinkNavigation.css";

const LinkNavigation = () => {
  return (
    <div className="Link_nav">
      <a href="mailto:leehyunjune11@naver.com">
        <CiMail />
      </a>
      <a
        href="https://react-icons.github.io/react-icons/search/#q=git"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default LinkNavigation;
