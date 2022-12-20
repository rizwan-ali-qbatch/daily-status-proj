import './ForgetPasswordStyles.css';
import React from 'react';
import '@fontsource/lato';
import myimage from '../assets/Qbatch_logo-removebg-preview.png';

export default function ForgetPassword() {
  return (
    <>
      <form className="ForgetPasswordinner">
        <img
          className="Qbatch_logo_remove_bg_preview1"
          src={myimage}
          alt="Logo Icon"
        />
        <div className="ForgotPasswordHeading">Forgot Password?</div>
        <p className="ForgetPasswordInst">
          Please enter your qbatch email address and we'll send you instructions
          to reset your password.
        </p>
        <label className="Email">Email</label>
        <input
          className="EmailField form-control"
          placeholder="name@qbatch.com"
        />
        <button className="SendResetInst">Send Reset Instructions</button>
        {/* <div className="line73"></div> */}
        <div className="or">or</div>
        {/* <div className="line74"></div> */}
        <div className="returntotxt">Return to</div>
        <div className="btn sign_in">Sign In</div>
      </form>
    </>
  );
}
