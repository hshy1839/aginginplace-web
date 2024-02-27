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
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/Idppl" element={<Idppl />} />
          <Route path="/Passwordppl" element={<Passwordppl />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/Page5" element={<Page5 />} />
          <Route path="/cmss" element={<Cmss />} />
          <Route path="/cms" element={<Cms />} />
          <Route path="/contents" element={<> <Header /><Contents /> </>} />
          <Route path="/mypages" element={<MyPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
