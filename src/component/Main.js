import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Main.css';

const Main = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div>
<<<<<<< HEAD
      <img src="/images/asddddd.jpg" alt='img' style={{ width: '100%', height: '660px',  }}/>
      <div className="main-container">
        <h1>소개</h1>
        <div className='mainbtt'>
          <div className="button-container" style={{ marginBottom: '10px' }}>
            <button
              onClick={() => handleSectionClick('whatIsDementia')}
              className={selectedSection === 'whatIsDementia' ? 'active' : ''}
            >
              치매란?
            </button>
            <button
              onClick={() => handleSectionClick('causes')}
              className={selectedSection === 'causes' ? 'active' : ''}
            >
              원인
            </button>
            <button
              onClick={() => handleSectionClick('treatments')}
              className={selectedSection === 'treatments' ? 'active' : ''}
            >
              치료방법
            </button>
            <button
              onClick={() => handleSectionClick('prevention')}
              className={selectedSection === 'prevention' ? 'active' : ''}
            >
              치매 예방법1
            </button>
          </div>
=======
        <img src="/images/cat3.jpg" alt='img'style={{ width: '50%', height: '700px' }}/>
        <div className="main-container">
            <Section image="/images/cat1.jpg" to="/page1" buttonText="복욕 알림 및 설정" />
            <Section image="/images/cat2.jpg" to="/page2" buttonText="실시간 생체정보 확인 가능" />
            <Section image="/images/cat3.jpg" to="/contents" buttonText="프로그램 콘텐츠 제공" />
            <Section image="/images/cat4.jpg" to="/page4" buttonText="커뮤니티 및 건강상담실" />
>>>>>>> a3bd1bdcdeca36b63643270293839d933d6338a2
        </div>

<<<<<<< HEAD
        {selectedSection && (
          <div className="section-description">
            {selectedSection === 'whatIsDementia' && (
              <div className='sul2'>
                
                <p className='sul1'>
                <h1>치매란?</h1>
                  <span className='sul11'>65세 이상 노인의 약 5~8%가 치매로 추정되고 있으며,</span> 연령이 증가할 수록 급격히 증가해
                  65세에서 74세는 3% 내외이나, 85세 이상은 45%가 치매로 추정됩니다. 알츠하이머병이 가
                  장 많아서 47~61%, 혈관성 치매가 13~31%, 그 외 루이체 치매가 세 번째로 많을 것으로 보
                  고되고 있습니다.65세에서 74세는 3% 내외이나, 85세 이상은 45%가 치매로 추정됩니다. 알츠하이머병이 가
                  장 많아서 47~61%, 혈관성 치매가 13~31%, 그 외 루이체 치매가 세 번째로 많을 것으로 보
                  고되고 있습니다.65세에서 74세는 3% 내외이나, 85세 이상은 45%가 치매로 추정됩니다. 알츠하이머병이 가
                  장 많아서 47~61%, 혈관성 치매가 13~31%, 그 외 루이체 치매가 세 번째로 많을 것으로 보
                  <p>ㅇㅁㄴㅇㅇㅁㄴㅇ</p>
                  고되고 있습니다.65세에서 74세는 3% 내외이나, 85세 이상은 45%가 치매로 추정됩니다. 알츠하이머병이 가
                  장 많아서 47~61%, 혈관성 치매가 13~31%, 그 외 루이체 치매가 세 번째로 많을 것으로 보
                  고되고 있습니다.65세에서 74세는 3% 내외이나, 85세 이상은 45%가 치매로 추정됩니다. 알츠하이머병이 가
                  장 많아서 47~61%, 혈관성 치매가 13~31%, 그 외 루이체 치매가 세 번째로 많을 것으로 보
                  고되고 있습니다.65세에서 74세는 3% 내외이나, 85세 이상은 45%가 치매로 추정됩니다. 알츠하이머병이 가
                  장 많아서 47~61%, 혈관성 치매가 13~31%, 그 외 루이체 치매가 세 번째로 많을 것으로 보
                  고되고 있습니다.
                </p>
              </div>
            )}
            {selectedSection === 'causes' && (
              <div className='sul2'>
                
                <p className='sul1'>
                <h1>치매의 원인</h1>
                  <span className='sul11'>65세 이상 노인의 약 5~8%가 치매로 추정되고 있으며,</span> 연령이 증가할 수록 급격히 증가해
                  65세에서 74세는 3% 내외이나, 85세 이상은 45%가 치매로 추정됩니다. 알츠하이머병이 가
                  장 많아서 47~61%, 혈관성 치매가 13~31%, 그 외 루이체 치매가 세 번째로 많을 것으로 보
                  고되고 있습니다.65세에서 74세는 3% 내외이나, 85세 이상은 45%가 치매로 추정됩니다. 알츠하이머병이 가
                  장 많아서 47~61%, 혈관성 치매가 13~31%, 그 외 루이체 치매가 세 번째로 많을 것으로 보
                  고되고 있습니다.65세에서 74세는 3% 내외이나, 85세 이상은 45%가 치매로 추정됩니다. 알츠하이머병이 가
                  장 많아서 47~61%, 혈관성 치매가 13~31%, 그 외 루이체 치매가 세 번째로 많을 것으로 보
                  <p>ㅇㅁㄴㅇㅇㅁㄴㅇ</p>
                  고되고 있습니다.65세에서 74세는 3% 내외이나, 85세 이상은 45%가 치매로 추정됩니다. 알츠하이머병이 가
                  장 많아서 47~61%, 혈관성 치매가 13~31%, 그 외 루이체 치매가 세 번째로 많을 것으로 보
                  고되고 있습니다.65세에서 74세는 3% 내외이나, 85세 이상은 45%가 치매로 추정됩니다. 알츠하이머병이 가
                  장 많아서 47~61%, 혈관성 치매가 13~31%, 그 외 루이체 치매가 세 번째로 많을 것으로 보
                  고되고 있습니다.65세에서 74세는 3% 내외이나, 85세 이상은 45%가 치매로 추정됩니다. 알츠하이머병이 가
                  장 많아서 47~61%, 혈관성 치매가 13~31%, 그 외 루이체 치매가 세 번째로 많을 것으로 보
                  고되고 있습니다.
                </p>
              </div>
            )}
            {selectedSection === 'treatments' && (
              <div className='sul2'>
                <p className='sul1'>
                <h1>치료방법</h1>
                  <span className='sul11'>65세 이상 노인의 약 5~8%가 치매로 추정되고 있으며,</span> 연령이 증가할 수록 급격히 증가해
                  65세에서 74세는 3% 내외이나, 85세 이상은 45%가 치매로 추정됩니다. 알츠하이머병이 가
                  장 많아서 47~61%, 혈관성 치매가 13~31%, 그 외 루이체 치매가 세 번째로 많을 것으로 보
                  고되고 있습니다.65세에서 74세는 3% 내외이나, 85세 이상은 45%가 치매로 추정됩니다. 알츠하이머병이 가
                  장 많아서 47~61%, 혈관성 치매가 13~31%, 그 외 루이체 치매가 세 번째로 많을 것으로 보
                  고되고 있습니다.65세에서 74세는 3% 내외이나, 85세 이상은 45%가 치매로 추정됩니다. 알츠하이머병이 가
                  장 많아서 47~61%, 혈관성 치매가 13~31%, 그 외 루이체 치매가 세 번째로 많을 것으로 보
                  <p>ㅇㅁㄴㅇㅇㅁㄴㅇ</p>
                  고되고 있습니다.65세에서 74세는 3% 내외이나, 85세 이상은 45%가 치매로 추정됩니다. 알츠하이머병이 가
                  장 많아서 47~61%, 혈관성 치매가 13~31%, 그 외 루이체 치매가 세 번째로 많을 것으로 보
                  고되고 있습니다.65세에서 74세는 3% 내외이나, 85세 이상은 45%가 치매로 추정됩니다. 알츠하이머병이 가
                  장 많아서 47~61%, 혈관성 치매가 13~31%, 그 외 루이체 치매가 세 번째로 많을 것으로 보
                  고되고 있습니다.65세에서 74세는 3% 내외이나, 85세 이상은 45%가 치매로 추정됩니다. 알츠하이머병이 가
                  장 많아서 47~61%, 혈관성 치매가 13~31%, 그 외 루이체 치매가 세 번째로 많을 것으로 보
                  고되고 있습니다.
                </p>
              </div>
            )}
            {selectedSection === 'prevention' && (
              <div className='sul2'>
                <p className='sul1'>
                <h1>치매 예방법</h1>
                  <span className='sul11'>65세 이상 노인의 약 5~8%가 치매로 추정되고 있으며,</span> 연령이 증가할 수록 급격히 증가해
                  65세에서 74세는 3% 내외이나, 85세 이상은 45%가 치매로 추정됩니다. 알츠하이머병이 가
                  장 많아서 47~61%, 혈관성 치매가 13~31%, 그 외 루이체 치매가 세 번째로 많을 것으로 보
                  고되고 있습니다.65세에서 74세는 3% 내외이나, 85세 이상은 45%가 치매로 추정됩니다. 알츠하이머병이 가
                  장 많아서 47~61%, 혈관성 치매가 13~31%, 그 외 루이체 치매가 세 번째로 많을 것으로 보
                  고되고 있습니다.65세에서 74세는 3% 내외이나, 85세 이상은 45%가 치매로 추정됩니다. 알츠하이머병이 가
                  장 많아서 47~61%, 혈관성 치매가 13~31%, 그 외 루이체 치매가 세 번째로 많을 것으로 보
                  <p>ㅇㅁㄴㅇㅇㅁㄴㅇ</p>
                  고되고 있습니다.65세에서 74세는 3% 내외이나, 85세 이상은 45%가 치매로 추정됩니다. 알츠하이머병이 가
                  장 많아서 47~61%, 혈관성 치매가 13~31%, 그 외 루이체 치매가 세 번째로 많을 것으로 보
                  고되고 있습니다.65세에서 74세는 3% 내외이나, 85세 이상은 45%가 치매로 추정됩니다. 알츠하이머병이 가
                  장 많아서 47~61%, 혈관성 치매가 13~31%, 그 외 루이체 치매가 세 번째로 많을 것으로 보
                  고되고 있습니다.65세에서 74세는 3% 내외이나, 85세 이상은 45%가 치매로 추정됩니다. 알츠하이머병이 가
                  장 많아서 47~61%, 혈관성 치매가 13~31%, 그 외 루이체 치매가 세 번째로 많을 것으로 보
                  고되고 있습니다.
                </p>
              </div>
            )}
            
          </div>
        )}
        <img src="/images/ddddd.jpg" alt='img' style={{ width: '59%', height: '100%', marginBottom : '2%'}}/>
      </div>
=======
  );
};

const Section = ({ image, to, buttonText }) => {
  return (
    <div className="section">
      <img src={image} alt={`Section`} />
      <Link to={to}>
        <button>{buttonText}</button>
      </Link>
>>>>>>> a3bd1bdcdeca36b63643270293839d933d6338a2
    </div>
  );
};

export default Main;
