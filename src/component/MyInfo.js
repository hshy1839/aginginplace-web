import React, { useState, useEffect } from 'react';
import '../css/MyInfo.css';

function MyInfo() {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await fetch('/api/userinfo');
                if (!response.ok) {
                    throw new Error('사용자 정보를 가져오는데 실패했습니다.');
                }
                const userData = await response.json();
                setUserInfo(userData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserInfo();

    }, []); 
    return (
        <div className='myinfo-container'>
            <div className='myinfo-title'>
                <strong>내 정보 페이지</strong>
            </div>
            {userInfo && (
                <div className='user-info'>
                    <p><strong>Email:</strong> {userInfo.email}</p>
                    <p><strong>Phone Number:</strong> {userInfo.phoneNumber}</p>
                    <p><strong>Birthdate:</strong> {userInfo.birthdate}</p>
                    <p><strong>Gender:</strong> {userInfo.gender}</p>
                    <p><strong>Name:</strong> {userInfo.name}</p>
                    <p><strong>Role:</strong> {userInfo.role}</p>
                </div>
            )}
        </div>
    );
}

export default MyInfo;
