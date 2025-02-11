import { useNavigate } from "react-router-dom";
import "./TabButton.css";

const TabButton = ({ item, className, ...props }) => {
  const navigate = useNavigate();
  const handleMove = ({ item }) => {
    navigate(`/${item}`);
  };
  return (
    <div
      className={`tab_box ${className}`}
      data-hover={item}
      onClick={() => handleMove({ item })}
    >
      {item}
    </div>
  );
};

export default TabButton;
