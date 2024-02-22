import React, { useState } from 'react';
import '../css/MyPage.css';
import ChangePassword from './ChangePassword';
import MyInfo from './MyInfo';
import EditProfile from './EditProfile';


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
