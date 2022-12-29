import '../Styles/ForgetPasswordStyles.css';
import React from 'react';
import '@fontsource/lato';
import myimage from '../assets/Qbatch_logo2.svg';
import backgroundimg from '../assets/UpdatedQbatchBackground.svg';
import { Link } from 'react-router-dom';

export default function ForgetPassword() {
  return (
    <>
      <div className="backgroundcls">
        <img
          className="backgroundsize"
          src={backgroundimg}
          alt="backgroundImg"
        />
        <form className="text-center ForgetPasswordinner">
          <img
            className="Qbatch_logo_in_forgetPass"
            src={myimage}
            alt="Logo Icon"
          />
          <div className="ForgotPasswordHeading">Forgot Password?</div>
          <div className="text-left">
            <p className="ForgetPasswordInst">
              Please enter your qbatch email address and we'll send you
              instructions to reset your password.
            </p>
          </div>
          <label className="ForgetPassTxt">Email</label>
          <input
            className="ForgetPassField form-control"
            placeholder="name@qbatch.com"
          />
          <Link to="/varification">
            <button className="SendResetInst">Send Reset Instructions</button>
          </Link>
          <div className="ortxtinForgetPass">or</div>

          <div className="returntotxt">
            Return to
            <Link to={'/login'}>
              <label style={{ cursor: 'pointer' }} className="sign_in">
                &nbsp;Sign In
              </label>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
