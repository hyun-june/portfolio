import "./TabInner.css";

const TabInner = ({ src, title, text, ...props }) => {
  return (
    <div>
      <li className="content_inner">
        <img src={src} alt="" />
        <div className="inner_text">
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </li>
    </div>
  );
};

export default TabInner;
