import React, { useState } from 'react';
import '../css/MyPage.css';

function MyInfo() {
    const [name, setName] = useState('John Doe');
    const [gender, setGender] = useState('남성');
    const [category, setCategory] = useState('회원');
    const [phoneNumber, setPhoneNumber] = useState('010-1234-5678');
    const [email, setEmail] = useState('johndoe@example.com');

    return (
        <div className='myinfo-container'>
            <div className='myinfo-title'>
                <h2>내 정보 페이지</h2>
            </div>
            <div className='myinfo-context-container'>
                <div>
                    <strong>이름</strong>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <button>수정하기</button>
                </div>
                <div>
                    <strong>성별</strong>
                    <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
                    <button>수정하기</button>
                </div>
                <div>
                    <strong>분류</strong>
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                    <button>수정하기</button>
                </div>
                <div>
                    <strong>전화번호</strong>
                    <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    <button>수정하기</button>
                </div>
                <div>
                    <strong>이메일</strong>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button>수정하기</button>
                </div>
            </div>
        </div>
    );
}

function ChangePassword() {
    return (
        <div className='password-container'>
            <h2>비밀번호 변경 페이지</h2>
            <h4>테스트용 비번 변경</h4>
        </div>
    );
}

function EditProfile() {
    return (
        <div className='editprofile-container'>
            <h2>개인정보 수정 페이지</h2>
            <h4>테스트용 개인정보 수정</h4>
        </div>
    );
}

function Withdraw() {
    return (
        <div className='withdraw-container'>
            <h2>회원탈퇴 페이지</h2>
            <h4>테스트용 회원탈퇴</h4>
        </div>
    );
}

function MyPage() {
    const [selectedSection, setSelectedSection] = useState('myinfo');

    return (
        <div className="mypage">
            <div className="sidebar">
                <div className="logo-container">
                    <img src="/images/logo-small.png" alt="로고" />
                    <span>DPS</span>
                </div>
                <div className='logo-bottombar'>
                    <p></p>
                </div>
                <div className='sidebar-title'>
                    <h2>마이페이지</h2>
                </div>
                <ul>
                    <li onClick={() => setSelectedSection('myinfo')}>
                        <span>내 정보</span>
                    </li>
                    <li onClick={() => setSelectedSection('changepassword')}>
                        <span>비밀번호 변경</span>
                    </li>
                    <li onClick={() => setSelectedSection('editprofile')}>
                        <span>개인정보 수정</span>
                    </li>
                    <li onClick={() => setSelectedSection('withdraw')}>
                        <span>회원탈퇴</span>
                    </li>
                </ul>
            </div>
            <div className="content">
                {selectedSection === 'myinfo' && <MyInfo />}
                {selectedSection === 'changepassword' && <ChangePassword />}
                {selectedSection === 'editprofile' && <EditProfile />}
                {selectedSection === 'withdraw' && <Withdraw />}
            </div>
        </div>
    );
}

export default MyPage;
