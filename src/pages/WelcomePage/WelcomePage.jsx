import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./WelcomePage.css";

const WelcomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/Home");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div>
      <div className="text">
        <span>제 포트폴리오를 방문해 주셔서 진심으로 감사드립니다.</span>
      </div>
    </div>
  );
};

export default WelcomePage;
