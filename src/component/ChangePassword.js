import React, { useState } from 'react';
import '../css/ChangePassword.css';

function ChangePassword() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageColor, setMessageColor] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'currentPassword') setCurrentPassword(value);
        else if (name === 'newPassword') setNewPassword(value);
        else if (name === 'confirmPassword') setConfirmPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentPassword === '' || newPassword === '' || confirmPassword === '') {
            setMessageColor('red');
            setMessage('모든 필드를 입력해주세요.');
        } else if (newPassword !== confirmPassword) {
            setMessageColor('red'); 
            setMessage('새 비밀번호가 일치하지 않습니다.');
        } else {
            setMessageColor('green');
            setMessage('비밀번호가 변경되었습니다.');
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
        }
    };

    return (
        <div className="changepw-container">
            <div className='changepw-title'>
            <strong>비밀번호 변경 페이지</strong>
            </div>
            <div className='changepw-context-container'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="currentPassword">현재 비밀번호</label>
                    <input
                        type="password"
                        id="currentPassword"
                        name="currentPassword"
                        value={currentPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="newPassword">새 비밀번호</label>
                    <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        value={newPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">새 비밀번호 확인</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">변경</button>
            </form>
            {message && <p className="message" style={{ color: messageColor }}>{message}</p>}
        </div>
        </div>
    );
}

export default ChangePassword;
