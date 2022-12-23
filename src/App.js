import './App.css';
import '@fontsource/lato';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ForgetPassword from './components/ForgetPassword';
import VarificationEmail from './components/VarificationEmail';
import SetNewPassword from './components/SetNewPassword';
import Dashboard from './components/DashBoard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/varification" element={<VarificationEmail />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/setpassword" element={<SetNewPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/*"
            element={<h1 className="text-center py-5">Invalid URL</h1>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
