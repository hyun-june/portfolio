import SubTitle from "./../../components/SubTitle/SubTitle";
import DotNavigation from "./../../components/DotNavigation/DotNavigation";
import { CiMail } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div>
      {/* <SubTitle title="About Me" /> */}
      <div className="about_info">
        <div className="about_photo">
          <img src={`${process.env.PUBLIC_URL}/images/증명사진.jpg`} alt="" />
          <div id="photo_box"></div>
        </div>
        <div className="about_user">
          <div className="about_info_name">
            <h1>이현준</h1>
            <span>LEE HYUNJUN</span>
          </div>
          <ul>
            <li>
              <CiMail /> <span>leehyunjune11@naver.com</span>
            </li>
            <li>
              <IoIosPhonePortrait />
              <span>010-8225-6103</span>
            </li>

            <li>
              <a href="https://github.com/hyun-june">
                <FaGithub />
                <span>https://github.com/hyun-june</span>
              </a>
            </li>
          </ul>
          <div className="about_text">
            <h3>"안녕하세요. 프론트엔드 개발자가 되고 싶은 이현준입니다."</h3>
            <p>
              코드를 작성하고 그 결과물이 즉시 눈에 보이는 것에서 큰 흥미를
              느꼈고, <br /> 이를 통해 프론트엔드 개발자로서더 많은 것을 배우고
              성장해 나가고 싶습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
