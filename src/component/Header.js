import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  return (
    <header className="header-container">
          
        
      <div>
        <Link to="/main">
           <img src="/images/loginlogo.png" alt="Your Logo" className='hadervar-logo'/>
        </Link>
   
      </div>

      <nav className="nav-container">
        
        <ul>
          <li className='Header-nav'><Link to="/Contents">프로그램 콘텐츠</Link></li>
          <li className='Header-nav'><Link to="/page2">커뮤니티</Link></li>
          <li className='Header-nav'><Link to="/MyPage">내정보</Link></li>
        
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className='Header-loginbtt'><Link to="/login">로그인 </Link></button>
        <button className='Header-signupbtt'><Link to="/signup">회원가입</Link></button>
        <button className='Header-nav'><Link to="/signup">고객센터</Link></button>
      </div>
    </header>
  );
};

export default Header;
