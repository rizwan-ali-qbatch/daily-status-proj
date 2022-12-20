import './App.css';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import DashBoard from './components/DashBoard';
import Footer from './components/Footer';

// import Login from './components/Login';
// import ForgetPassword from './components/ForgetPassword';
// import VarificationEmail from './components/VarificationEmail';
// import SetNewPassword from './components/SetNewPassword';

function App() {
  return (
    <>
      {/* <div className="backgroundcls">
        <div className="Rectangle1"></div>
        <div className="Rectangle2"></div> */}
      {/* <Login /> */}
      {/* <ForgetPassword /> */}
      {/* <VarificationEmail /> */}
      {/* <SetNewPassword /> */}
      {/* </div> */}
      <Navbar />
      <SideBar />
      <DashBoard />
      <Footer />
    </>
  );
}

export default App;
