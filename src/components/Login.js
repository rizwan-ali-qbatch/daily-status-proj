import '../Styles/LoginStyles.css';
import React from 'react';
import '@fontsource/lato';
import myimage from '../assets/Qbatch_logo2.svg';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <div className="backgroundcls">
        <div className="Rectangle1"></div>
        <div className="Rectangle2"></div>
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
          <input
            className="form-check-input chkbox"
            type="checkbox"
            id="check"
          />
          <label className="keep_me_logged_in">Keep me logged in</label>
          <Link to={'/forgetpassword'}>
            <label className="btn forgotPassword">Forget Password?</label>
          </Link>
          <Link to={'/dashboard'}>
            <button className="sign_in_btn">Sign In</button>
          </Link>
          {/* <div className="line73"></div> */}
          <div className="or">or</div>
          {/* <div className="line74"></div> */}
          <div className="Not_a_member_yet">Not a member yet?</div>
          <div className="btn sign_up">Sign Up</div>
        </form>
      </div>
    </>
  );
}
