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
import MyPage from './component/MyPage';
import Contents from './component/Contents';
import Cms from './admin/Cms';
import Cmss from './admin/Cmss';
import Cmscontents from './admin/Cmscontents';
import Cmsuser from './admin/Cmsuser';
import Cmsfaq from './admin/Cmsfaq'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Header /><Main /><Footer /></>}  />
          <Route path="/login" element={<><Header /><Login /><Footer /></>}  />
          <Route path="/signup" element={<><Header /><Signup /><Footer /></>}  />
          <Route path="/Idppl" element={<><Header /><Idppl /><Footer /></>}  />
          <Route path="/Passwordppl" element={<Passwordppl />} />
          <Route path="/page2" element={<><Header /><Page2 /><Footer /></>} />
          <Route path="/page3" element={<><Header /><Page3 /><Footer /></>}  />
          <Route path="/page4" element={<><Header /><Page4 /><Footer /></>}  />
          <Route path="/Page5" element={<><Header /><Page5 /><Footer /></>}  />
          <Route path="/main" element={<> <Header /> <Main /> </>} />
          <Route path="/login" element={<> <Header /><Login /><Footer /> </>} />
          <Route path="/MyPage" element={<> <Header /><MyPage /><Footer /> </>} />
          <Route path="/signup" element={<> <Header /><Signup /><Footer /> </>} />
          <Route path="/cmss" element={<Cmss />} />
          <Route path="/cmsuser" element={<Cmsuser />} />
          <Route path="/cmsfaq" element={<Cmsfaq />} />
          <Route path="/cms" element={<Cms />} />
          <Route path="/Cmscontents" element={<Cmscontents />} />
          <Route path="/contents" element={<> <Header /><Contents /><Footer /> </>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
