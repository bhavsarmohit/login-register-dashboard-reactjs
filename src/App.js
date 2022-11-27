import './App.css';
import LoginRegister from './pages/LoginRegister/LoginRegister.js';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import Documentation from './pages/Documentation/Documentation.js';
import SideBar from './components/SideBar/SideBar';
import SideBar1 from './components/SideBar/Sidebar1';

function App() {
  return (
    <>
      <BrowserRouter>

        <SideBar1>

          <Routes>
            {/* <Route path="/" element={<LoginRegister />} /> */}
            <Route path='/' element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/loginregister" element={<LoginRegister />} />
            {/* <Route path="/sidebar" element={<SideBar1 />} /> */}


            {/* <Route path="/starcomponents" element={<StarsComponents />} /> */}


          </Routes>
        </SideBar1>
      </BrowserRouter>
    </>
  );
}

export default App;
