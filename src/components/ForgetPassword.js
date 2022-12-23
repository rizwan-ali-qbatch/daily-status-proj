import '../Styles/ForgetPasswordStyles.css';
import React from 'react';
import '@fontsource/lato';
import myimage from '../assets/Qbatch_logo2.svg';
import { Link } from 'react-router-dom';

export default function ForgetPassword() {
  return (
    <>
      <div className="backgroundcls">
        <div className="Rectangle1"></div>
        <div className="Rectangle2"></div>
        <form className="ForgetPasswordinner">
          <img
            className="Qbatch_logo_in_forgetPass"
            src={myimage}
            alt="Logo Icon"
          />
          <div className="ForgotPasswordHeading">Forgot Password?</div>
          <p className="ForgetPasswordInst">
            Please enter your qbatch email address and we'll send you
            instructions to reset your password.
          </p>
          <label className="ForgetPass">Email</label>
          <input
            className="ForgetPassField form-control"
            placeholder="name@qbatch.com"
          />
          <button className="SendResetInst">Send Reset Instructions</button>
          {/* <div className="line73"></div> */}
          <div className="or">or</div>
          {/* <div className="line74"></div> */}
          <div className="returntotxt">Return to</div>
          <Link to={'/login'}>
            <div className="btn sign_in">Sign In</div>
          </Link>
        </form>
      </div>
    </>
  );
}
