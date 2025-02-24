import { CiFolderOn } from "react-icons/ci";
import "./Card.css";

const Card = ({ ...props }) => {
  return (
    <div className="card">
      <a href={props.site} target="_blank">
        <div className="card_main">
          <div className="card_title">
            <CiFolderOn className="folder_icon" />
            <h3>{props.title}</h3>
          </div>

          <p>{props.description}</p>

          <ul>
            {props.skills
              ? props.skills.map((item, index) => <li key={index}>{item}</li>)
              : ""}
          </ul>
        </div>

        <div className="card_img">
          <img src={props.img} alt="" />
        </div>
      </a>
    </div>
  );
};

export default Card;
