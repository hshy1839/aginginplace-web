import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import '../css/Cms.css';
import Useradd from './Useradd';

const Cmss = () => {
  const [users, setUsers] = useState([
    { number: 1, userType: '환자', id: 'user1', name: '옥지', contact: '000-1234-5678', email: 'kangsh4969@naver.com', joinDate: '0000-00-00' },
    { number: 2, userType: '보호자', id: 'user2', name: '빵빵', contact: '010-1111-2222', email: 'kangsh4969@gmail.com', joinDate: '2024-01-01' },
    { number: 3, userType: '보호자', id: 'user2', name: '빵빵', contact: '010-1111-2222', email: 'kangsh4969@gmail.com', joinDate: '2024-01-01' },
    { number: 4, userType: '보호자', id: 'user2', name: '빵빵', contact: '010-1111-2222', email: 'kangsh4969@gmail.com', joinDate: '2024-01-01' },
    { number: 5, userType: '보호자', id: 'user2', name: '빵빵', contact: '010-1111-2222', email: 'kangsh4969@gmail.com', joinDate: '2024-01-01' },
    { number: 6, userType: '보호자', id: 'user2', name: '빵빵', contact: '010-1111-2222', email: 'kangsh4969@gmail.com', joinDate: '2024-01-01' },
    { number: 7, userType: '보호자', id: 'user2', name: '빵빵', contact: '010-1111-2222', email: 'kangsh4969@gmail.com', joinDate: '2024-01-01' },
    { number: 8, userType: '보호자', id: 'user2', name: '빵빵', contact: '010-1111-2222', email: 'kangsh4969@gmail.com', joinDate: '2024-01-01' },
    { number: 9, userType: '보호자', id: 'user2', name: '빵빵', contact: '010-1111-2222', email: 'kangsh4969@gmail.com', joinDate: '2024-01-01' },
    { number: 10, userType: '보호자', id: 'user2', name: '빵빵', contact: '010-1111-2222', email: 'kangsh4969@gmail.com', joinDate: '2024-01-01' },
    { number: 10, userType: '보호자', id: 'user2', name: '빵빵', contact: '010-1111-2222', email: 'kangsh4969@gmail.com', joinDate: '2024-01-01' },
    { number: 10, userType: '보호자', id: 'user2', name: '빵빵', contact: '010-1111-2222', email: 'kangsh4969@gmail.com', joinDate: '2024-01-01' },
    { number: 10, userType: '보호자', id: 'user2', name: '빵빵', contact: '010-1111-2222', email: 'kangsh4969@gmail.com', joinDate: '2024-01-01' },
    { number: 10, userType: '보호자', id: 'user2', name: '빵빵', contact: '010-1111-2222', email: 'kangsh4969@gmail.com', joinDate: '2024-01-01' }
  ]);

  const handleAddUser = (newUser) => {
    setUsers([...users, { ...newUser, number: users.length + 1 }]);
  };

  return (
    <div className="cms-container">
      <div className="sidebar">
        <img src="/images/logo192.png" alt="Your Logo" />
        <p>MenuPage</p>
        <ul>
          <li><Link to="/Cms">Home</Link></li>
          <li><Link to="/Cmss">프로그램 컨텐츠 </Link></li>
          <li><Link to="/Cmss">게시판 관리</Link></li>
          <li><Link to="/Cmss">사용자 관리</Link></li>
        </ul>
      </div>
      <div>
        
        <Routes>
          <Route path="/" element={<CmssTable users={users} />} />
          <Route
            path="/useradd"
            element={<Useradd onAddUser={handleAddUser} />}
          />
        </Routes>
      </div>
    </div>
  );
};

const CmssTable = ({ users }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(users.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th className='dodo'>사용자타입</th>
            <th>아이디</th>
            <th>이름</th>
            <th>연락처</th>
            <th>E-mail</th>
            <th>가입일</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map(user => (
            <tr key={user.number}>
              <td className='table-td'>{user.number}</td>
              <td className='table-td'>{user.userType}</td>
              <td className='table-td'>{user.id}</td>
              <td className='table-td'>{user.name}</td>
              <td className='table-td'>{user.contact}</td>
              <td className='table-td'>{user.email}</td>
              <td className='table-td'>{user.joinDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination" >
        {Array.from({ length: totalPages }).map((_, index) => (
          <button  key={index + 1} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Cmss;