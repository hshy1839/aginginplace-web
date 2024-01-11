import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Page1 from "./component/Page1";
import Page2 from "./component/Page2";
import Page3 from "./component/Page3";
import Page4 from "./component/Page4";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        
        <Routes>
         <Route path="/main" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
