import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Login from './component/Login';
import Signup from './component/Signup';
import Footer from './component/Footer';
import Main from './component/Main';
import Idppl from './component/Idppl';
import Passwordppl from './component/Passwordppl';
import Page2 from './component/Page2';
import Page3 from './component/Page3';
import Page4 from './component/Page4';
import Page5 from './component/Page5';
import Cms from './admin/Cms';
import Cmss from './admin/Cmss';
import MyPage from './component/MyPage';
import Contents from './component/Contents';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Main /><Footer /></>} />
          <Route path="/login" element={<><Login /><Footer /></>} />
          <Route path="/signup" element={<><Signup /><Footer /></>} /> 
          <Route path="/Idppl" element={<><Idppl /><Footer /></>} />
          <Route path="/Passwordppl" element={<><Passwordppl /><Footer /></>} />
          <Route path="/page2" element={<><Page2 /><Footer /></>} />
          <Route path="/page3" element={<><Page3 /><Footer /></>} />
          <Route path="/page4" element={<><Page4 /><Footer /></>} />
          <Route path="/Page5" element={<><Page5 /><Footer /></>} />
          <Route path="/cmss" element={<><Cmss /><Footer /></>} />
          <Route path="/cms" element={<><Cms /><Footer /></>} />
          <Route path="/contents" element={<> <Header /><Contents /><Footer /> </>} />
          <Route path="/mypages" element={<><MyPage /><Footer /></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
