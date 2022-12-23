import React from 'react';
import myimage from '../assets/Qbatch_logo2.svg';
import '../Styles/SetNewPasswordStyles.css';
import '@fontsource/lato';
import { Link } from 'react-router-dom';

export default function SetNewPassword() {
  return (
    <>
      <div className="backgroundcls">
        <div className="Rectangle1"></div>
        <div className="Rectangle2"></div>
        <form className="SetNewPasswordinner">
          <img
            className="Qbatch_logo_in_NewPass"
            src={myimage}
            alt="Logo Icon"
          />
          <div className="SetNewPasswordHead">Set New Password</div>
          <p className="SetNewPasswordInst">
            Please enter new strong password to be used for your Qbatch account.
          </p>
          <label className="NewPass">New Password</label>
          <input
            className="NewPassField form-control"
            placeholder="New Password Here"
          />
          <label className="CPassword">Confirm Password</label>
          <input
            className="CPasswordField form-control"
            placeholder="Confirm Password Here"
          />
          <button className="sign_in_btn">Reset Password</button>
          {/* <div className="line73"></div> */}
          <div className="or">or</div>
          {/* <div className="line74"></div> */}
          <div className="returntxt">Return to</div>
          <Link to={'/login'}>
            <div className="btn sign_In">Sign In</div>
          </Link>
        </form>
      </div>
    </>
  );
}
