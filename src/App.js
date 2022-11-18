import './App.css';
import LoginRegister from './pages/LoginRegister/LoginRegister.js';
import Dashboard from './pages/Dashboard/Dashboard';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginRegister />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
