import React, { useState } from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

const Signup = () => {
  const [section, setSection] = useState(1);
  const [agreed, setAgreed] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    name: '',
    birthdate: '',
    telecom: 'SKT',
    gender: 'male',
    nationality: 'domestic',
    phoneNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleAgree = () => {
    setAgreed(true);
  };

  const handleNext = () => {
    if (section === 2 && !checkAllInputs()) {
      alert('모두 입력해주세요.');
    } else {
      if (section === 2) {
        if (userData.password !== userData.confirmPassword) {
          setPasswordMatch(false);
          return;
        }
      }
      setSection(section + 1);
    }
  };

  const checkAllInputs = () => {
    return (
      userData.username !== '' &&
      userData.password !== '' &&
      userData.confirmPassword !== '' &&
      userData.email !== '' &&
      userData.name !== '' &&
      userData.birthdate !== '' &&
      userData.phoneNumber !== ''
    );
  };

  return (
    <div>
      {section === 1 && <Section1 agreed={agreed} handleAgree={handleAgree} handleNext={handleNext} />}
      {section === 2 && <Section2 userData={userData} passwordMatch={passwordMatch} handleInputChange={handleInputChange} handleNext={handleNext} />}
      {section === 3 && <Section3 />}
    </div>
  );
};

export default Signup;
