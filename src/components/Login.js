import './LoginStyles.css';
import React from 'react';
import '@fontsource/lato';
import myimage from '../assets/Qbatch_logo-removebg-preview.png';

export default function Login() {
  return (
    <>
      <form className="inner">
        <img
          className="Qbatch_logo_remove_bg_preview1"
          src={myimage}
          alt="Logo Icon"
        />
        <div className="sign_in_to_your_account">Sign in to your Account</div>
        <label className="Email">Email</label>
        <input
          className="EmailField form-control"
          placeholder="name@qbatch.com"
        />
        <label className="Password">Password</label>
        <input
          className="PasswordField form-control"
          placeholder="Password Here"
        />
        <input className="form-check-input chkbox" type="checkbox" id="check" />
        <label className="keep_me_logged_in">Keep me logged in</label>
        <label className="btn forgotPassword">Forget Password?</label>
        <button className="sign_in_btn">Sign In</button>
        {/* <div className="line73"></div> */}
        <div className="or">or</div>
        {/* <div className="line74"></div> */}
        <div className="Not_a_member_yet">Not a member yet?</div>
        <div className="btn sign_up">Sign Up</div>
      </form>
    </>
  );
}
