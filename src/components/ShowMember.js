import React from 'react';
import '../Styles/ShowMemberStyles.css';
import memberIcon from '../assets/MemberRectangleicon.svg';
import '@fontsource/lato';

export default function ShowMember() {
  return (
    <>
      <div className="ShowMemberComp">
        <svg
          width="139"
          height="40"
          viewBox="0 0 139 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 5C0 2.23858 2.23858 0 5 0H134C136.761 0 139 2.23858 139 5V35C139 37.7614 136.761 40 134 40H5C2.23858 40 0 37.7614 0 35V5Z"
            fill="#0054A6"
            fillOpacity="0.05"
          />
        </svg>
        <div className="ShowMemberName">John Doe</div>
        <div className="ShowMemberImg">
          <img src={memberIcon} alt="Member Icon" />
          {/* <img
            src={''}
            alt=" "
            style={{
              paddingTop: '10px',
              paddingLeft: '12px',
            }}
          /> */}
        </div>
        <div className="ShowMemberCloseBtn">
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.79464 0.229334L3.96598 3.05733L1.13798 0.229334L0.195312 1.172L3.02331 4L0.195312 6.828L1.13798 7.77067L3.96598 4.94267L6.79464 7.77067L7.73731 6.828L4.90931 4L7.73731 1.172L6.79464 0.229334Z"
              fill="#F04B4B"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
