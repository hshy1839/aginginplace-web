import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  return (
    <header className="header-container">
          
        
      <div>
        <Link to="/main">
<<<<<<< HEAD
           <img src="/images/loginlogo.jpg" alt="Your Logo"  style={{ width: '25%', height: '90px', marginLeft:'300px' }}/>
=======
          <img src="/images/logo192.png" alt="Your Logo" />
        <span>DPS</span>
>>>>>>> a3bd1bdcdeca36b63643270293839d933d6338a2
        </Link>
       
      </div>
      <div className="logo">

      </div>

      <nav className="nav-container">
        
        <ul>
<<<<<<< HEAD
          <li><Link to="/Contents">프로그램 콘텐츠</Link></li>
          <li><Link to="/page2">커뮤니티</Link></li>
          <li><Link to="/MyPage">내정보</Link></li>
        
=======
          <li><Link to="/page1">복약 알림 및 설정</Link></li>
          <li><Link to="/page2">실시간 생체정보 확인가능</Link></li>
          <li><Link to="/contents">프로그램 콘텐츠 제공</Link></li>
          <li><Link to="/page4">커뮤니티 및 건강상담실</Link></li>
>>>>>>> a3bd1bdcdeca36b63643270293839d933d6338a2
        </ul>
      </nav>
      <div className="auth-buttons">
        <button><Link to="/login">로그인 </Link></button>
        <button><Link to="/signup">회원가입</Link></button>
        <button><Link to="/signup">고객센터</Link></button>
      </div>
    </header>
  );
};

export default Header;
