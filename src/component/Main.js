
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Main.css';

const Main = () => {
  return (
    <div>
        <img src="/images/cat3.jpg" alt='img'style={{ width: '50%', height: '700px' }}/>
        <div className="main-container">
            <Section image="/images/cat1.jpg" to="/page1" buttonText="복욕 알림 및 설정" />
            <Section image="/images/cat2.jpg" to="/page2" buttonText="실시간 생체정보 확인 가능" />
            <Section image="/images/cat3.jpg" to="/contents" buttonText="프로그램 콘텐츠 제공" />
            <Section image="/images/cat4.jpg" to="/page4" buttonText="커뮤니티 및 건강상담실" />
        </div>
    </div>

  );
};

const Section = ({ image, to, buttonText }) => {
  return (
    <div className="section">
      <img src={image} alt={`Section`} />
      <Link to={to}>
        <button>{buttonText}</button>
      </Link>
    </div>
  );
};

export default Main;
