import React, { useState } from 'react';
import '../css/Section.css';

const Section1 = ({ handleNext }) => {
  const [agreement1, setAgreement1] = useState(false);
  const [agreement2, setAgreement2] = useState(false);
  const [allAgreed, setAllAgreed] = useState(false);

  const handleCheckAll = () => {
    const newAllAgreed = !allAgreed;
    setAllAgreed(newAllAgreed);
    setAgreement1(newAllAgreed);
    setAgreement2(newAllAgreed);
  };

  const handleIndividualCheck = (agreement) => {
    if (agreement === 1) {
      setAgreement1(!agreement1);
    } else if (agreement === 2) {
      setAgreement2(!agreement2);
    }
    setAllAgreed(agreement1 && agreement2);
  };

  const handleNextButton = () => {
    if (agreement1 && agreement2) {
      handleNext();
    } else {
      alert('동의가 필요합니다.');
    }
  };
   return (
    <div className='section-container'>
      <ol className="nav nav-pills nav-pills-step">
        <li className="nav-item active"><span className="num">01</span> 약관동의</li>
        <li className="nav-item"><span className="num">02</span> 가입정보입력</li>
        <li className="nav-item"><span className="num">03</span> 가입완료</li>
      </ol>
      <div>
        <div className="terms-scroll">
          <div className='pscheck-box1'>
            <label>
              <input type="checkbox" checked={agreement1} onChange={() => handleIndividualCheck(1)} />
              <span className='pschecks'>(필수)</span> 이용약관
            </label>
          </div>
          <div>
            <textarea rows="15" cols="65" placeholder="약관 내용asdadsadadadadasdadsadadadadasdadsadadadad
            asdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadad
            asdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadad
            asdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadad
            asdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadad" readOnly></textarea>
          </div>
          <div className='pscheck-box2'>
            <label>
              <input type="checkbox" checked={agreement2} onChange={() => handleIndividualCheck(2)} />
              <span className='pschecks'>(필수)</span> 이용약관
            </label>
          </div>
          <div>
            <textarea rows="15" cols="65" placeholder="약관 내용asdadsadadadadasdadsadadadadasdadsadadadadsaddsadadasasddsadadasdasddsa
            asdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadadsadasdsadadd
            asdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadad
            asdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadad
            asdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadadasdadsadadadad" readOnly></textarea>
          </div>
        </div>
        <div className='Allcheckdss'>
          <label>
            <input type="checkbox" checked={allAgreed} onChange={handleCheckAll} />
            모든 약관을 확인하고 전체 동의합니다.
          </label>
        </div>
        <div>
         <button className='nextBtt' onClick={handleNextButton}>다음</button>
        </div>
        
      </div>
    </div>
  );
};

export default Section1;
