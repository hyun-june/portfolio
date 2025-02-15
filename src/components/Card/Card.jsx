import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import "./Card.css";

const Card = ({ ...props }) => {
  return (
    <div className="card">
      <div className="card_img">
        <img src="images/캐릭터.png" alt="" />
      </div>

      <div className="card_inner">
        <h6>{props.title}</h6>
        <div>
          <p>{props.description}</p>
        </div>
        <h6>Use Skills</h6>
        <ul>
          {props.skills ? props.skills.map((item) => <li>{item}</li>) : ""}
        </ul>
        <div className="inner_icons">
          <a href={props.git}>
            <FaGithub />
          </a>
          <a href={props.link}>
            <GoLinkExternal />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
