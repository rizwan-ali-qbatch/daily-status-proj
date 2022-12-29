import React from 'react';
import '../Styles/TeamDetailMemberStyles.css';
import memberImage from '../assets/MemberImg.svg';
import '@fontsource/lato';

export default function TeamDetailMemberComponent() {
  return (
    <>
      <div className="dashboardcardcomp3">
        <img
          src={memberImage}
          alt="Member Img"
          style={{
            position: 'absolute',
            top: '8%',
            left: '35%',
            width: '30%',
            cursor: 'pointer',
            borderRadius: '50%',
          }}
        />
        <div className="MemberDetailName">John Doe</div>
        <div className="MemberDetailProf">Frontend Developer</div>
        <div className="MemberDetailMail">johndoe@qbatch.com</div>
        <div
          className="DltBtnInTeamDetail"
          onClick={() => {
            document.getElementById('Blur').classList.add('overlay2');
            document.getElementById('Demo3').style.display = 'initial';
          }}
        >
          <svg
            width="12"
            height="14"
            viewBox="0 0 12 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.33333 12.3333C1.33333 12.6869 1.47381 13.0261 1.72386 13.2761C1.97391 13.5262 2.31304 13.6667 2.66667 13.6667H9.33333C9.68696 13.6667 10.0261 13.5262 10.2761 13.2761C10.5262 13.0261 10.6667 12.6869 10.6667 12.3333V4.33333H12V2.99999H9.33333V1.66666C9.33333 1.31304 9.19286 0.973901 8.94281 0.723852C8.69276 0.473804 8.35362 0.333328 8 0.333328H4C3.64638 0.333328 3.30724 0.473804 3.05719 0.723852C2.80714 0.973901 2.66667 1.31304 2.66667 1.66666V2.99999H0V4.33333H1.33333V12.3333ZM4 1.66666H8V2.99999H4V1.66666ZM3.33333 4.33333H9.33333V12.3333H2.66667V4.33333H3.33333Z"
              fill="#F04B4B"
            />
            <path
              d="M4 5.66667H5.33333V11H4V5.66667ZM6.66667 5.66667H8V11H6.66667V5.66667Z"
              fill="#F04B4B"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
