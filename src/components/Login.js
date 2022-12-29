import '../Styles/LoginStyles.css';
import React from 'react';
import '@fontsource/lato';
import backgroundimg from '../assets/UpdatedQbatchBackground.svg';
import myimage from '../assets/Qbatch_logo2.svg';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <div className="backgroundcls">
        <img
          className="backgroundsize"
          src={backgroundimg}
          alt="backgroundImg"
        />
        <div className="inner">
          <form>
            <div className="text-center mb-5">
              <img
                className="Qbatch_logo_remove_bg_preview1"
                src={myimage}
                alt="Logo Icon"
              />
            </div>
            <div className="sign_in_to_your_account my-5">
              Sign in to your account
            </div>
            <label className="Email my-2">Email</label>
            <input
              className="EmailField form-control my-2"
              placeholder="name@qbatch.com"
            />
            <label className="Password my-2">Password</label>
            <input
              className="PasswordField form-control my-2"
              placeholder="Password Here"
            />

            <label className="keep_me_logged_in my-2">
              <input
                className="form-check-input chkbox"
                type="checkbox"
                id="check"
              />
              &nbsp;Keep me logged in
            </label>
            <Link to="/forgetpassword">
              <label className="btn forgotPassword my-2">
                Forget Password?
              </label>
            </Link>
            <Link to="/dashboard">
              <button className="my-3 sign_in_btn py-2">Sign In</button>
            </Link>
            <>
              {/* <div className="line73"></div> */}
              {/* <div className="or">or</div> */}
              {/* <div className="line74"></div> */}
              {/* <div className="Not_a_member_yet">Not a member yet?</div> */}
              {/* <div className="btn sign_up">Sign Up</div> */}
            </>
          </form>
        </div>
      </div>
    </>
  );
}
