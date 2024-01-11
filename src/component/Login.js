import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [saveId, setSaveId] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Save ID:', saveId);
  };

  return (
    <div className='aaaaa'>
      <div id="content">
        <div className="login-layout">
          <h2 className='login-lg'>로그인</h2>

          <div className="row">
            <div className="login-box col-lg-2">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    id="username"
                    title="아이디"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control flush"
                    placeholder="아이디"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    id="password"
                    title="비밀번호"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control flush"
                    placeholder="비밀번호"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="checkbox"
                    name="saveId"
                    id="saveId"
                    className="sr-only"
                    checked={saveId}
                    onChange={() => setSaveId(!saveId)}
                  />
                  <label htmlFor="saveId" className="custom-label custom-label-sm">
                    <span className="check-primary">
                      <i className="xi-check"></i>
                    </span>
                    아이디 저장
                  </label>
                </div>
                <div className="find-group">
                  <Link to="/signup" className="text-primary">
                    회원가입 | 
                  </Link>
                  <Link to="/find_id" className="findPd">
                     아이디 찾기 |
                  </Link>
                  <Link to="/find_pw" className="findPd">
                    비밀번호 찾기
                  </Link>
                </div>
                <button  type="submit" className="btn-primary">
                  로그인
                </button>
              </form>
              <div className="social-login">
                <strong>간편 로그인</strong>
                <div className="social-icon">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
