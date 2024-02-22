import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/main">
          <img src="/images/logo192.png" alt="Your Logo" />
        <span>DPS</span>
        </Link>
      </div>
      <nav className="nav-container">
        <ul>
          <li><Link to="/page1">복약 알림 및 설정</Link></li>
          <li><Link to="/page2">실시간 생체정보 확인가능</Link></li>
          <li><Link to="/contents">프로그램 콘텐츠 제공</Link></li>
          <li><Link to="/page4">커뮤니티 및 건강상담실</Link></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button><Link to="/login">로그인 </Link></button>
        <button><Link to="/signup">회원가입</Link></button>
      </div>
    </header>
  );
};

export default Header;
