import React, { useState } from 'react';
import '../css/Section2.css';

const Section2 = ({ userData, handleInputChange, handleNext }) => {
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [emailId, setEmailId] = useState('');
  const [emailDomain, setEmailDomain] = useState('');
  const [showCustomDomain, setShowCustomDomain] = useState(false);
  const [customDomain, setCustomDomain] = useState('');
  const [gender, setGender] = useState('male');
  const [role, setRole] = useState('patient');

  const isFormComplete = () => {
    return (
      userData.username !== '' &&
      userData.password !== '' &&
      userData.confirmPassword !== '' &&
      emailId !== '' &&
      emailDomain !== '' &&
      (emailDomain !== '직접입력' || customDomain !== '') && // 직접입력일 경우 customDomain도 확인
      userData.userName !== '' &&
      userData.birthDate !== '' &&
      userData.telephoneNumber !== ''
    );
  };

  const handleNextClick = () => {
    if (isFormComplete()) {
      handleNext(); 
    } else {
      alert('모든 내용을 입력해주세요.');
    }
  };

  const handleEmailIdChange = (e) => {
    const { value } = e.target;
    setEmailId(value);
    handleInputChange({ target: { name: 'email', value: `${value}@${emailDomain}` } });
  };

  const handleEmailDomainChange = (e) => {
    const { value } = e.target;
    setEmailDomain(value);
    if (value === '직접입력') {
      setShowCustomDomain(true);
    }
    handleInputChange({ target: { name: 'email', value: `${emailId}@${value}` } });
  };

  const handleCustomDomainChange = (e) => {
    const { value } = e.target;
    setCustomDomain(value);
    handleInputChange({ target: { name: 'customDomain', value } });
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    handleInputChange({ target: { name: 'gender', value: e.target.value } });
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    handleInputChange({ target: { name: 'role', value: e.target.value } });
  };

  return (
    <div className='section-container'>
      <ol className="nav nav-pills nav-pills-step">
        <li className="nav-item"><span className="num">01</span> 약관동의</li>
        <li className="nav-item active"><span className="num">02</span> 가입정보입력</li>
        <li className="nav-item"><span className="num">03</span> 가입완료</li>
      </ol>
      <div className='signup-info'>
        <p className='section2-title'>가입정보입력</p>
      </div>
      <div className='signup-id'>
        <div className='input-container'>
          <div>
            <input type='text' id='userid' name='username' value={userData.username} onChange={handleInputChange} placeholder='아이디' className='input-field' />
          </div>
          <div>
            <input type='password' id='userpassword' name='password' value={userData.password} onChange={handleInputChange} placeholder='비밀번호' className='input-field' />
          </div>
          <div>
            <input type='password' id='confirmPassword' name='confirmPassword' value={userData.confirmPassword} onChange={handleInputChange} placeholder='비밀번호 확인' className='input-field' />
            {passwordMismatch && <p className='error-message'>비밀번호가 일치하지 않습니다.</p>}
          </div>
          <div className='email-container'>
            <input type='text' id='emailId' name='emailId' value={emailId} onChange={handleEmailIdChange} placeholder='이메일' className='input-field input-email' />

            <span>@</span>
            {showCustomDomain ? (
              <>
                <input type='text' id='customDomain' value={customDomain} onChange={handleCustomDomainChange} placeholder='' className='input-field' />
                <button onClick={() => setShowCustomDomain(false)}>확인</button>
              </>
            ) : (
              <select id='emailDomain' value={emailDomain} onChange={handleEmailDomainChange} className='select-field'>
                <option value=''>옵션 선택</option>
                <option value='naver.com'>naver.com</option>
                <option value='gmail.com'>gmail.com</option>
                <option value='daum.com'>daum.com</option>
                
              </select>
            )}
          </div>

          <div>
            <label>
              <input type="radio" name="gender" value="male" checked={userData.gender === 'male'} onChange={handleInputChange} />
              남자
            </label>
            <label>
              <input type="radio" name="gender" value="female" checked={userData.gender === 'female'} onChange={handleInputChange} />
              여자
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="role" value="patient" checked={userData.role === 'patient'} onChange={handleInputChange} />
              환자
            </label>
            <label>
              <input type="radio" name="role" value="guardian" checked={userData.role === 'guardian'} onChange={handleInputChange} />
              보호자
            </label>
          </div>
        </div>
        <div>
          <input type='text' id='name' name='name' value={userData.userName} onChange={handleInputChange} placeholder='이름' className='input-field'></input>
        </div>
        <div>
          <input type='text' id='name' name='name' value={userData.userName} onChange={handleInputChange} placeholder='생년월일 8자' className='input-field'></input>
        </div>
        <div>
          <input type='text' id='name' name='name' value={userData.userName} onChange={handleInputChange} placeholder='통신사 선택' className='input-field'></input>
        </div>
        <div>
          <input type='text' id='name' name='name' value={userData.userName} onChange={handleInputChange} placeholder='휴대전화번호' className='input-field'></input>
        </div>
      </div>
      <button onClick={handleNextClick} className="next-button">
        다음
      </button>

    </div>
  );
};

export default Section2;
