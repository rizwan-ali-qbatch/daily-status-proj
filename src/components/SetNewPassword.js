import React from 'react';
import myimage from '../assets/Qbatch_logo2.svg';
import backgroundimg from '../assets/UpdatedQbatchBackground.svg';
import '../Styles/SetNewPasswordStyles.css';
import '@fontsource/lato';
import { Link } from 'react-router-dom';

export default function SetNewPassword() {
  return (
    <>
      <div className="backgroundcls">
        <img
          className="backgroundsize"
          src={backgroundimg}
          alt="backgroundImg"
        />
        <form className="text-center SetNewPasswordinner">
          <div className="text-center">
            <img
              className="Qbatch_logo_in_NewPass"
              src={myimage}
              alt="Logo Icon"
            />
          </div>

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
          <button className="sign_in_btn2">Reset Password</button>
          <div className="ortxtinnewPass">or</div>
          <div className="returntxt">
            Return to
            <Link to={'/login'}>
              <label style={{ cursor: 'pointer' }} className="sign_In">
                &nbsp;Sign In
              </label>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
