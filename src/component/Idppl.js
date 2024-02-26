import React, { useState } from 'react';
import '../css/idppl.css';
const Idppl = () => {
  const [findMethod, setFindMethod] = useState('email');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationCodeSent, setVerificationCodeSent] = useState(false);

  const handleFindMethodChange = (event) => {
    const selectedMethod = event.target.value;
    setFindMethod(selectedMethod);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  
  const handleSendVerificationCode = () => {
    //인증번호 받는 나중에
    setVerificationCodeSent(true);
  };

  const handleVerificationCodeChange = (event) => {
    setVerificationCode(event.target.value);
  };

  const handleVerify = () => {
    //인증번호 확인인 나중에
  };

  return (
    <div>

        <h2 className='idididid'>아이디 찾기</h2>
        <div className='ddd'>
            <div className="idbox col-lg-2">          
                <div className='idradio2'>
                    <input
                    type="radio"
                    id="findByEmail"
                    name="findMethod"
                    value="email"
                    checked={findMethod === 'email'}
                    onChange={handleFindMethodChange}
                    />
                    <label htmlFor="findByEmail">이메일로 찾기</label>
                </div>
                <div className='idradio'>
                    <input
                    type="radio"
                    id="findByPhone"
                    name="findMethod"
                    value="phone"
                    checked={findMethod === 'phone'}
                    onChange={handleFindMethodChange}
                    />
                    <label htmlFor="findByPhone">전화번호로 찾기</label>
                </div>

                {findMethod === 'email' && (
                    <div>
                        <label htmlFor="name"> </label>
                        <input type='text' id='name' name='name' value={name} onChange={handleNameChange} placeholder='이름' className='idfieldname'></input>
                        <div className='idemail'>
                            <p><label htmlFor="email"> </label></p>
                            <input type='text' id='email' name='email' value={email} onChange={handleEmailChange} placeholder='이메일' className='idfield2' />
                                <span className='golgol'>@</span>
                            <select id='emailDomain' value='' onChange=''className='idfield2'>
                                <option value=''>옵션 선택</option>
                                <option value='naver.com'>naver.com</option>
                                <option value='gmail.com'>gmail.com</option>
                                <option value='daum.com'>daum.com</option>        
                            </select>
                        <button onClick={handleSendVerificationCode} className='fieldbtt'>인증번호 받기</button>
                        </div>
                    {verificationCodeSent && (
                        <div>
                            <input type='text' id='name' name='name' value={verificationCode} onChange={handleVerificationCodeChange} placeholder='인증번호입력' className='inzzm'></input>
                            <button onClick={handleVerify} className='fieldbtt1'>확인</button>
                        </div>
                    )}
                    </div>
                )}

                {findMethod === 'phone' && (
                    <div>
                        <input type='text' id='name' name='name' value={name} onChange={handleNameChange} placeholder='이름' className='idfieldname'></input>
                        <div className='idemail'>
                            
                            <input type='text' id='name' name='name' value={phone} onChange={handlePhoneChange} placeholder='전화번호' className='idfield2' />
                                <span className='golgol'></span>
                            <select id='emailDomain' value='' onChange=''className='idfield2'>
                                <option value=''>옵션 선택</option>
                                <option value='LG'>LG U+</option>
                                <option value='SKT'>SKT</option>
                                <option value='KT'>KT</option>    
                                <option value='알뜰'>알뜰폰</option>    
                            </select>
                        <button onClick={handleSendVerificationCode} className='fieldbtt'>인증번호 받기</button>
                        </div>
                    {verificationCodeSent && (
                        <div>
                            <input type='text' id='name' name='name' value={verificationCode} onChange={handleVerificationCodeChange} placeholder='인증번호 입력' className='phoneinzzm'></input>
                            <button onClick={handleVerify} className='fieldbtt1'>확인</button>
                        </div>
                    )}
                    </div>
                )}
                    <button className='idbttckck'>아이디찾기</button>
                </div>
        </div>
    </div>
  );
};

export default Idppl;
