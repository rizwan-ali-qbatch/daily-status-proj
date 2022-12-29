import React from 'react';
import myimage from '../assets/Qbatch_logo2.svg';
import '../Styles/VarificationEmailStyles.css';
import backgroundimg from '../assets/UpdatedQbatchBackground.svg';
import emailimg from '../assets/Email-Logo.svg';
import '@fontsource/lato';

export default function VarificationEmail() {
  return (
    <>
      <div className="backgroundcls">
        <img
          className="backgroundsize"
          src={backgroundimg}
          alt="backgroundImg"
        />
        <form className="text-center VarificationEmailinner">
          <img
            className="Qbatch_logo_in_VarificationEmail"
            src={myimage}
            alt="Logo Icon"
          />
          <div className="VarificationEmailHeading">
            Verification Email Sent
          </div>
          <img className="innerEmailLogo" src={emailimg} alt="Email Icon" />
          <div className="emailrcvtxt">
            If you didn't receive the email
            <label
              className="clickHereBtn"
              onClick={() => {
                console.log('clicked');
              }}
            >
              &nbsp;Click here
            </label>
          </div>
        </form>
      </div>
    </>
  );
}
