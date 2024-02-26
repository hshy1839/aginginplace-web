import React, { useState } from 'react';
import '../css/MyInfo.css';

function MyInfo() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [category, setCategory] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className='myinfo-container'>
            <div className='myinfo-title'>
                <strong>내 정보 페이지</strong>
            </div>
            <div className='myinfo-context-container'>
                <div>
                    <strong>이름</strong>
                    <input type="text" placeholder="ex)홍정민" value={name} onChange={(e) => setName(e.target.value)} />
                    <button>수정</button>
                </div>
                <div>
                    <strong>성별</strong>
                    <input type="text" placeholder="ex)남성" value={gender} onChange={(e) => setGender(e.target.value)} />
                    <button>수정</button>
                </div>
                <div>
                    <strong>분류</strong>
                    <input type="text" placeholder="ex)회원" value={category} onChange={(e) => setCategory(e.target.value)} />
                    <button>수정</button>
                </div>
                <div>
                    <strong>번호</strong>
                    <input type="text" placeholder="ex)010-1111-1111" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    <button>수정</button>
                </div>
                <div>
                    <strong>메일</strong>
                    <input type="text" placeholder="ex)woosuk@naver.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button>수정</button>
                </div>
            </div>
        </div>
    );
}

export default MyInfo;