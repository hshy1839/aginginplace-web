import React from 'react';
import '../css/Section.css';
const Section2 = ({ userData, passwordMatch, handleInputChange, handleNext }) => {
  return (
    <div className='section-container'>
      <ol class="nav nav-pills nav-pills-step">
        <li class="nav-item"><span class="num">01</span> 약관동의</li>
        <li class="nav-item active"><span class="num">02</span> 가입정보입력</li>
        <li class="nav-item"><span class="num">03</span> 가입완료</li>
      </ol>
      <div className='signup-info'>
        <p className='section2-title'>가입정보입력</p>
          <div className='label-id' >
            <label>
              <span> 아이디 </span> 
              <input className='input-button' type="text" name="username" value={userData.username} onChange={handleInputChange} placeholder="아이디" />
            </label>
          </div>
          <div className='label-id'>
            <label>
              <span> 비밀번호 </span> 
              <input type="password" name="password" value={userData.password} onChange={handleInputChange} placeholder="비밀번호" />
            </label>
          </div>
          <div className='label-id'>
            <label>
              <span> 비밀번호 확인 </span> 
              <input type="password" name="confirmPassword" value={userData.confirmPassword} onChange={handleInputChange} placeholder="비밀번호 확인" />
              {!passwordMatch && <p style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</p>}
            </label>
          </div>
          <div>
            <label>
              <span> 이메일 </span> 
              <input type="email" name="email" value={userData.email} onChange={handleInputChange} placeholder="이메일"/>
            </label>
          </div>
          <div>
            <label>
              <span> 이름 </span> 
              <input type="text" name="name" value={userData.name} onChange={handleInputChange} placeholder="이름"/>
            </label>
          </div>
          <div>
            <label>
              <span> 생년월일 </span>   
              <input type="text" name="birthdate" value={userData.birthdate} onChange={handleInputChange} placeholder="생년월일 8자"/>
            </label>
          </div>
              <div>
                <label>
                  <span>통신사 선택 </span>
                  <select name="telecom" value={userData.telecom} onChange={handleInputChange}>
                    <option value="SKT">SKT</option>
                    <option value="KT">KT</option>
                    <option value="LG U+">LG U+</option>
                  </select>
                </label>
              </div>
              <div>
                <label>
                  <span>성별 : </span>
                  <label>
                    남자
                    <input type="radio" name="gender" value="male" checked={userData.gender === 'male'} onChange={handleInputChange} />
                  </label>
                  <label>
                    여자
                    <input type="radio" name="gender" value="female" checked={userData.gender === 'female'} onChange={handleInputChange} />
                  </label>
                </label>
              </div>
              <div>
                <label>
                  <span>국적 : </span>
                  <label>
                    내국인
                    <input type="radio" name="nationality" value="domestic" checked={userData.nationality === 'domestic'} onChange={handleInputChange} />
                  </label>
                  <label>
                    외국인
                    <input type="radio" name="nationality" value="foreign" checked={userData.nationality === 'foreign'} onChange={handleInputChange} />
                  </label>
                </label>
              </div>
              <div>
                <label>
                  <span>휴대전화 입력</span>
                  <input type="text" name="phoneNumber" value={userData.phoneNumber} onChange={handleInputChange} placeholder="010 - 0000 - 0000" />
                </label>
              </div>
           <button onClick={handleNext}>회원가입 완료</button>
          </div>
      </div>
      
  );
};

export default Section2;
