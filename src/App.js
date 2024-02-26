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
<<<<<<< HEAD
import Page5 from './component/Page5';
=======
import Contents from './component/Contents';
>>>>>>> a3bd1bdcdeca36b63643270293839d933d6338a2
import Cms from './admin/Cms';
import Cmss from './admin/Cmss';
import MyPage from './component/MyPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
<<<<<<< HEAD
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Idppl" element={<Idppl />} />
          <Route path="/Passwordppl" element={<Passwordppl />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/Page5" element={<Page5 />} />
=======
          <Route path="/" element={ <> <Header /> <Main /> </> }/>
          <Route path="/main" element={<> <Header /> <Main /> </>} />
          <Route path="/login" element={<> <Header /><Login /> </>} />
          <Route path="/signup" element={<> <Header /><Signup /> </>} />
          <Route path="/page1" element={<> <Header /><Page1 /> </>} />
          <Route path="/page2" element={<> <Header /><Page2 /> </>} />
          <Route path="/page3" element={<> <Header /><Page3 /> </>} />
          <Route path="/page4" element={<> <Header /><Page4 /> </>} />
>>>>>>> a3bd1bdcdeca36b63643270293839d933d6338a2
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
